[@nan-team/testx-utils](../README.md) › [Globals](../globals.md) › [GmailKeywords](gmailkeywords.md)

# Class: GmailKeywords

Gmail keywords.
Gmail keywords.

## Hierarchy

* **GmailKeywords**

## Index

### Methods

* [addLabelsToMessage](gmailkeywords.md#addlabelstomessage)
* [getLabels](gmailkeywords.md#getlabels)
* [getMessageAttachmentById](gmailkeywords.md#getmessageattachmentbyid)
* [getMessageAttachments](gmailkeywords.md#getmessageattachments)
* [getMessageById](gmailkeywords.md#getmessagebyid)
* [getMessages](gmailkeywords.md#getmessages)
* [getSpreadsheetById](gmailkeywords.md#getspreadsheetbyid)
* [getSpreadsheetValuesById](gmailkeywords.md#getspreadsheetvaluesbyid)
* [login](gmailkeywords.md#login)
* [removeLabelsFromMessage](gmailkeywords.md#removelabelsfrommessage)
* [sendMessage](gmailkeywords.md#sendmessage)
* [updateSpreadsheetValuesById](gmailkeywords.md#updatespreadsheetvaluesbyid)

## Methods

###  addLabelsToMessage

▸ **addLabelsToMessage**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹Schema$Message›*

Defined in extensions/google/gmail/keywords.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](../interfaces/testxcontext.md) |

**Returns:** *Promise‹Schema$Message›*

___

###  getLabels

▸ **getLabels**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹Schema$Label[]›*

Defined in extensions/google/gmail/keywords.ts:44

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](../interfaces/testxcontext.md) |

**Returns:** *Promise‹Schema$Label[]›*

___

###  getMessageAttachmentById

▸ **getMessageAttachmentById**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹Schema$MessagePartBody›*

Defined in extensions/google/gmail/keywords.ts:70

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](../interfaces/testxcontext.md) |

**Returns:** *Promise‹Schema$MessagePartBody›*

___

###  getMessageAttachments

▸ **getMessageAttachments**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹Schema$MessagePart[]›*

Defined in extensions/google/gmail/keywords.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](../interfaces/testxcontext.md) |

**Returns:** *Promise‹Schema$MessagePart[]›*

___

###  getMessageById

▸ **getMessageById**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹Schema$Message›*

Defined in extensions/google/gmail/keywords.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](../interfaces/testxcontext.md) |

**Returns:** *Promise‹Schema$Message›*

___

###  getMessages

▸ **getMessages**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹Schema$Message[]›*

Defined in extensions/google/gmail/keywords.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](../interfaces/testxcontext.md) |

**Returns:** *Promise‹Schema$Message[]›*

___

###  getSpreadsheetById

▸ **getSpreadsheetById**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹Schema$Spreadsheet›*

Defined in extensions/google/sheets/keywords.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](../interfaces/testxcontext.md) |

**Returns:** *Promise‹Schema$Spreadsheet›*

___

###  getSpreadsheetValuesById

▸ **getSpreadsheetValuesById**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹any[][]›*

Defined in extensions/google/sheets/keywords.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](../interfaces/testxcontext.md) |

**Returns:** *Promise‹any[][]›*

___

###  login

▸ **login**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹void›*

Defined in extensions/google/gmail/keywords.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](../interfaces/testxcontext.md) |

**Returns:** *Promise‹void›*

___

###  removeLabelsFromMessage

▸ **removeLabelsFromMessage**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹Schema$Message›*

Defined in extensions/google/gmail/keywords.ts:56

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](../interfaces/testxcontext.md) |

**Returns:** *Promise‹Schema$Message›*

___

###  sendMessage

▸ **sendMessage**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹Schema$Message›*

Defined in extensions/google/gmail/keywords.ts:37

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](../interfaces/testxcontext.md) |

**Returns:** *Promise‹Schema$Message›*

___

###  updateSpreadsheetValuesById

▸ **updateSpreadsheetValuesById**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹Schema$UpdateValuesResponse›*

Defined in extensions/google/sheets/keywords.ts:37

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](../interfaces/testxcontext.md) |

**Returns:** *Promise‹Schema$UpdateValuesResponse›*
