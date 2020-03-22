[@nan-team/testx-utils](../README.md) › [Globals](../globals.md) › [Gmail](gmail.md)

# Class: Gmail

## Hierarchy

* [GoogleCore](googlecore.md)

  ↳ **Gmail**

## Index

### Properties

* [gmailApi](gmail.md#private-gmailapi)
* [oAuth2Client](gmail.md#protected-oauth2client)

### Methods

* [addLabelsToMessage](gmail.md#addlabelstomessage)
* [extractMessageContent](gmail.md#extractmessagecontent)
* [getLabels](gmail.md#getlabels)
* [getMessageAttachmentById](gmail.md#getmessageattachmentbyid)
* [getMessageAttachments](gmail.md#getmessageattachments)
* [getMessageById](gmail.md#getmessagebyid)
* [getMessages](gmail.md#getmessages)
* [login](gmail.md#login)
* [removeLabelsFromMessage](gmail.md#removelabelsfrommessage)
* [sendMessage](gmail.md#sendmessage)

## Properties

### `Private` gmailApi

• **gmailApi**: *Gmail*

Defined in extensions/google/gmail/api.ts:13

___

### `Protected` oAuth2Client

• **oAuth2Client**: *OAuth2Client*

*Inherited from [GoogleCore](googlecore.md).[oAuth2Client](googlecore.md#protected-oauth2client)*

Defined in extensions/google/core/api.ts:8

## Methods

###  addLabelsToMessage

▸ **addLabelsToMessage**(`messageId`: string, `labelIds`: string[]): *Promise‹[Message](../globals.md#message)›*

Defined in extensions/google/gmail/api.ts:77

**Parameters:**

Name | Type |
------ | ------ |
`messageId` | string |
`labelIds` | string[] |

**Returns:** *Promise‹[Message](../globals.md#message)›*

___

###  extractMessageContent

▸ **extractMessageContent**(`messagePart`: [MessagePart](../globals.md#messagepart)): *Promise‹string›*

Defined in extensions/google/gmail/api.ts:135

**Parameters:**

Name | Type |
------ | ------ |
`messagePart` | [MessagePart](../globals.md#messagepart) |

**Returns:** *Promise‹string›*

___

###  getLabels

▸ **getLabels**(): *Promise‹[Label](../globals.md#label)[]›*

Defined in extensions/google/gmail/api.ts:71

**Returns:** *Promise‹[Label](../globals.md#label)[]›*

___

###  getMessageAttachmentById

▸ **getMessageAttachmentById**(`messageId`: string, `attachmentId`: string): *Promise‹[MessagePartBody](../globals.md#messagepartbody)›*

Defined in extensions/google/gmail/api.ts:122

**Parameters:**

Name | Type |
------ | ------ |
`messageId` | string |
`attachmentId` | string |

**Returns:** *Promise‹[MessagePartBody](../globals.md#messagepartbody)›*

___

###  getMessageAttachments

▸ **getMessageAttachments**(`messageId`: string): *Promise‹[MessagePart](../globals.md#messagepart)[]›*

Defined in extensions/google/gmail/api.ts:104

**Parameters:**

Name | Type |
------ | ------ |
`messageId` | string |

**Returns:** *Promise‹[MessagePart](../globals.md#messagepart)[]›*

___

###  getMessageById

▸ **getMessageById**(`messageId`: string): *Promise‹[Message](../globals.md#message)›*

Defined in extensions/google/gmail/api.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`messageId` | string |

**Returns:** *Promise‹[Message](../globals.md#message)›*

___

###  getMessages

▸ **getMessages**(`query?`: string, `labelIds?`: string[], `maxResults`: number): *Promise‹[Message](../globals.md#message)[]›*

Defined in extensions/google/gmail/api.ts:24

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`query?` | string | - |
`labelIds?` | string[] | - |
`maxResults` | number | 50 |

**Returns:** *Promise‹[Message](../globals.md#message)[]›*

___

###  login

▸ **login**(`oAuth2ClientOptions`: OAuth2ClientOptions, `credentials`: Credentials): *Promise‹void›*

*Overrides [GoogleCore](googlecore.md).[login](googlecore.md#login)*

Defined in extensions/google/gmail/api.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`oAuth2ClientOptions` | OAuth2ClientOptions |
`credentials` | Credentials |

**Returns:** *Promise‹void›*

___

###  removeLabelsFromMessage

▸ **removeLabelsFromMessage**(`messageId`: string, `labelIds`: string[]): *Promise‹[Message](../globals.md#message)›*

Defined in extensions/google/gmail/api.ts:89

**Parameters:**

Name | Type |
------ | ------ |
`messageId` | string |
`labelIds` | string[] |

**Returns:** *Promise‹[Message](../globals.md#message)›*

___

###  sendMessage

▸ **sendMessage**(`sender`: string, `receiver`: string, `subject`: string, `messageText`: string, `headers?`: any): *Promise‹[Message](../globals.md#message)›*

Defined in extensions/google/gmail/api.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`sender` | string |
`receiver` | string |
`subject` | string |
`messageText` | string |
`headers?` | any |

**Returns:** *Promise‹[Message](../globals.md#message)›*
