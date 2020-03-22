import { GoogleCore } from '../core';
import { gmail } from 'googleapis/build/src/apis/gmail';
import { gmail_v1 } from 'googleapis/build/src/apis/gmail/v1';
import { Credentials, OAuth2ClientOptions } from 'google-auth-library';
import { Base64 } from 'js-base64';
import { isNotNullOrUndefined, isNullOrUndefined } from '../../../utils';
import Message = gmail_v1.Schema$Message;
import MessagePartBody = gmail_v1.Schema$MessagePartBody;
import MessagePart = gmail_v1.Schema$MessagePart;
import Label = gmail_v1.Schema$Label;

export class Gmail extends GoogleCore {
  private gmailApi: gmail_v1.Gmail;

  login(
    oAuth2ClientOptions: OAuth2ClientOptions,
    credentials: Credentials
  ): Promise<void> {
    return super.login(oAuth2ClientOptions, credentials).then(() => {
      this.gmailApi = gmail({ version: 'v1', auth: this.oAuth2Client });
    });
  }

  getMessages(
    query?: string,
    labelIds?: string[],
    maxResults: number = 50
  ): Promise<Message[]> {
    return this.gmailApi.users.messages
      .list({
        userId: 'me',
        q: query,
        maxResults: maxResults,
        labelIds: labelIds,
      })
      .then((response) => response.data.messages);
  }

  getMessageById(messageId: string): Promise<Message> {
    return this.gmailApi.users.messages
      .get({
        userId: 'me',
        id: messageId,
      })
      .then((response) => response.data);
  }

  sendMessage(
    sender: string,
    receiver: string,
    subject: string,
    messageText: string,
    headers?: any
  ): Promise<Message> {
    let h = '\r\n';
    headers = isNullOrUndefined(headers) ? {} : headers;
    for (const [key, value] of Object.entries(headers)) {
      h += `${key}: ${value}\r\n`;
    }
    const email = `From: ${sender}\r\nTo: ${receiver}\r\nSubject: ${subject}${h}\r\n${messageText}`;
    return this.gmailApi.users.messages
      .send({
        userId: 'me',
        requestBody: {
          raw: Base64.encodeURI(email),
        },
      })
      .then((response) => response.data);
  }

  getLabels(): Promise<Label[]> {
    return this.gmailApi.users.labels
      .list({ userId: 'me' })
      .then((response) => response.data.labels);
  }

  addLabelsToMessage(messageId: string, labelIds: string[]): Promise<Message> {
    return this.gmailApi.users.messages
      .modify({
        userId: 'me',
        id: messageId,
        requestBody: {
          addLabelIds: labelIds,
        },
      })
      .then((response) => response.data);
  }

  removeLabelsFromMessage(
    messageId: string,
    labelIds: string[]
  ): Promise<Message> {
    return this.gmailApi.users.messages
      .modify({
        userId: 'me',
        id: messageId,
        requestBody: {
          removeLabelIds: labelIds,
        },
      })
      .then((response) => response.data);
  }

  getMessageAttachments(messageId: string): Promise<MessagePart[]> {
    return this.getMessageById(messageId)
      .then((response) => response.payload)
      .then((part) => {
        const attachments: MessagePart[] = [];
        const extractAttachment = (messagePart: MessagePart) => {
          if (isNotNullOrUndefined(messagePart.body.attachmentId)) {
            attachments.push(messagePart);
          }
          if (isNotNullOrUndefined(messagePart.parts)) {
            messagePart.parts.map(extractAttachment);
          }
        };
        extractAttachment(part);
        return attachments;
      });
  }

  getMessageAttachmentById(
    messageId: string,
    attachmentId: string
  ): Promise<MessagePartBody> {
    return this.gmailApi.users.messages.attachments
      .get({
        userId: 'me',
        id: attachmentId,
        messageId: messageId,
      })
      .then((response) => response.data);
  }

  extractMessageContent(messagePart: MessagePart): Promise<string> {
    return new Promise<string>(async (resolve) => {
      let res: string = '';
      if (messagePart.mimeType.startsWith('text/')) {
        res += `\n${Buffer.from(messagePart.body.data, 'base64').toString()}`;
      } else if (messagePart.mimeType.startsWith('multipart/')) {
        for (const part of messagePart.parts) {
          res += `\n${await this.extractMessageContent(part)}`;
        }
      }
      resolve(res);
    });
  }
}
