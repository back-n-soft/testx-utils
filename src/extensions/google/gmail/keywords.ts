import {
  Keyword,
  TestxContext,
  TestxKeywords,
} from '../../../utils/keywords-utils';
import { Gmail } from './api';

const gmail = new Gmail();
const keywords: TestxKeywords = {};

export { keywords };

/**
 * Gmail keywords.
 */
class GmailKeywords {
  @Keyword('login to gmail', keywords)
  login(args: any, context: TestxContext) {
    return gmail.login(args.client, args.credentials);
  }

  @Keyword('get gmail messages', keywords)
  getMessages(args: any, context: TestxContext) {
    return gmail
      .getMessages(args.query, args.labelIds, args.maxResults)
      .then((data) => (context.gmailMessages = data));
  }

  @Keyword('get gmail message', keywords)
  getMessageById(args: any, context: TestxContext) {
    return gmail
      .getMessageById(args.messageId)
      .then((data) => (context.gmailMessage = data));
  }

  @Keyword('send gmail message', keywords)
  sendMessage(args: any, context: TestxContext) {
    return gmail
      .sendMessage(args.from, args.to, args.subject, args.message)
      .then((data) => (context.gmailMessage = data));
  }

  @Keyword('get gmail labels', keywords)
  getLabels(args: any, context: TestxContext) {
    return gmail.getLabels().then((data) => (context.gmailLabels = data));
  }

  @Keyword('add labels to gmail message', keywords)
  addLabelsToMessage(args: any, context: TestxContext) {
    return gmail
      .addLabelsToMessage(args.messageId, args.labelIds)
      .then((data) => (context.gmailMessage = data));
  }

  @Keyword('remove labels from gmail message', keywords)
  removeLabelsFromMessage(args: any, context: TestxContext) {
    return gmail
      .removeLabelsFromMessage(args.messageId, args.labelIds)
      .then((data) => (context.gmailMessage = data));
  }

  @Keyword('get gmail message attachments', keywords)
  getMessageAttachments(args: any, context: TestxContext) {
    return gmail
      .getMessageAttachments(args.messageId)
      .then((data) => (context.gmailAttachments = data));
  }

  @Keyword('get gmail message attachment', keywords)
  getMessageAttachmentById(args: any, context: TestxContext) {
    return gmail
      .getMessageAttachmentById(args.messageId, args.attachmentId)
      .then((data) => (context.gmailAttachment = data));
  }
}
