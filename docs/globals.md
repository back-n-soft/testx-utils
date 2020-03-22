[@nan-team/testx-utils](README.md) › [Globals](globals.md)

# @nan-team/testx-utils

## Index

### Classes

* [FileService](classes/fileservice.md)
* [Gmail](classes/gmail.md)
* [GmailKeywords](classes/gmailkeywords.md)
* [GoogleCore](classes/googlecore.md)
* [GoogleCoreKeywords](classes/googlecorekeywords.md)
* [HttpService](classes/httpservice.md)
* [Sheets](classes/sheets.md)
* [UtilsKeywords](classes/utilskeywords.md)

### Interfaces

* [TestxContext](interfaces/testxcontext.md)
* [TestxKeywords](interfaces/testxkeywords.md)

### Type aliases

* [TestxKeywordFunction](globals.md#testxkeywordfunction)

### Variables

* [Label](globals.md#label)
* [Message](globals.md#message)
* [MessagePart](globals.md#messagepart)
* [MessagePartBody](globals.md#messagepartbody)
* [Spreadsheet](globals.md#spreadsheet)
* [UpdateValuesResponse](globals.md#updatevaluesresponse)
* [axios](globals.md#const-axios)
* [gmail](globals.md#const-gmail)
* [googleCore](globals.md#const-googlecore)
* [rl](globals.md#const-rl)
* [sheets](globals.md#const-sheets)
* [showArgsVar](globals.md#let-showargsvar)
* [truncateOutputVar](globals.md#let-truncateoutputvar)

### Functions

* [Keyword](globals.md#keyword)
* [extractText](globals.md#extracttext)
* [getTestx](globals.md#gettestx)
* [isNotNullOrUndefined](globals.md#isnotnullorundefined)
* [isNullOrUndefined](globals.md#isnullorundefined)
* [logScriptStart](globals.md#const-logscriptstart)
* [logStepStart](globals.md#const-logstepstart)
* [loopOverContextList](globals.md#loopovercontextlist)
* [loopOverList](globals.md#loopoverlist)
* [objectKeysToLowerCase](globals.md#objectkeystolowercase)
* [printable](globals.md#const-printable)
* [runTestxScript](globals.md#runtestxscript)
* [saveAll](globals.md#saveall)
* [scrollDown](globals.md#scrolldown)
* [scrollMiddle](globals.md#scrollmiddle)
* [scrollUp](globals.md#scrollup)
* [startScriptLogLine](globals.md#const-startscriptlogline)
* [stringifyAndThrowError](globals.md#stringifyandthrowerror)
* [testxLogger](globals.md#testxlogger)
* [truncateObject](globals.md#truncateobject)
* [waitForDisappearanceOfElement](globals.md#waitfordisappearanceofelement)
* [waitForElement](globals.md#waitforelement)
* [waitForLocator](globals.md#waitforlocator)
* [waitForPresenceOfElement](globals.md#waitforpresenceofelement)
* [waitForUrl](globals.md#waitforurl)

### Object literals

* [keywords](globals.md#const-keywords)

## Type aliases

###  TestxKeywordFunction

Ƭ **TestxKeywordFunction**: *function*

Defined in utils/keywords-utils.ts:13

#### Type declaration:

▸ (`args`: any, `context`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | any |

## Variables

###  Label

• **Label**: *any*

Defined in extensions/google/gmail/api.ts:10

___

###  Message

• **Message**: *any*

Defined in extensions/google/gmail/api.ts:7

___

###  MessagePart

• **MessagePart**: *any*

Defined in extensions/google/gmail/api.ts:9

___

###  MessagePartBody

• **MessagePartBody**: *any*

Defined in extensions/google/gmail/api.ts:8

___

###  Spreadsheet

• **Spreadsheet**: *any*

Defined in extensions/google/sheets/api.ts:5

___

###  UpdateValuesResponse

• **UpdateValuesResponse**: *any*

Defined in extensions/google/sheets/api.ts:6

___

### `Const` axios

• **axios**: *AxiosInstance* = Axios.create({
  paramsSerializer: (params) => {
    const result: string[] = [];
    Object.keys(params).forEach((key) => {
      result.push(`${key}=${encodeURIComponent(params[key])}`);
    });
    return result.join('&');
  },
})

Defined in service/http.service.ts:3

___

### `Const` gmail

• **gmail**: *[Gmail](classes/gmail.md)‹›* = new Gmail()

Defined in extensions/google/gmail/keywords.ts:8

___

### `Const` googleCore

• **googleCore**: *[GoogleCore](classes/googlecore.md)‹›* = new GoogleCore()

Defined in extensions/google/core/keywords.ts:4

___

### `Const` rl

• **rl**: *Interface‹›* = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

Defined in tools/generate-gmail-token.ts:4

Defined in tools/generate-sheets-token.ts:4

___

### `Const` sheets

• **sheets**: *[Sheets](classes/sheets.md)‹›* = new Sheets()

Defined in extensions/google/sheets/keywords.ts:8

___

### `Let` showArgsVar

• **showArgsVar**: *any*

Defined in utils/logger.ts:14

___

### `Let` truncateOutputVar

• **truncateOutputVar**: *any*

Defined in utils/logger.ts:15

## Functions

###  Keyword

▸ **Keyword**(`keyword`: string, `keywords`: [TestxKeywords](interfaces/testxkeywords.md)): *(Anonymous function)*

Defined in utils/keywords-utils.ts:29

A decorator to add a testx keyword function to a testx keywords object

**`method`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`keyword` | string | The keyword string |
`keywords` | [TestxKeywords](interfaces/testxkeywords.md) | The keywords object |

**Returns:** *(Anonymous function)*

___

###  extractText

▸ **extractText**(`args`: any, `context`: [TestxContext](interfaces/testxcontext.md)): *Promise‹void›*

Defined in utils/keywords-utils.ts:242

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](interfaces/testxcontext.md) |

**Returns:** *Promise‹void›*

___

###  getTestx

▸ **getTestx**(): *any*

Defined in utils/keywords-utils.ts:35

**Returns:** *any*

___

###  isNotNullOrUndefined

▸ **isNotNullOrUndefined**<**T**>(`obj`: T | null | undefined): *boolean*

Defined in utils/api-utils.ts:7

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T &#124; null &#124; undefined |

**Returns:** *boolean*

___

###  isNullOrUndefined

▸ **isNullOrUndefined**<**T**>(`obj`: T | null | undefined): *obj is null | undefined*

Defined in utils/api-utils.ts:1

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T &#124; null &#124; undefined |

**Returns:** *obj is null | undefined*

___

### `Const` logScriptStart

▸ **logScriptStart**(`script`: any): *void*

Defined in utils/logger.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`script` | any |

**Returns:** *void*

___

### `Const` logStepStart

▸ **logStepStart**(`step`: any, `context`: any): *void*

Defined in utils/logger.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`step` | any |
`context` | any |

**Returns:** *void*

___

###  loopOverContextList

▸ **loopOverContextList**(`args`: any, `context`: [TestxContext](interfaces/testxcontext.md)): *Promise‹void›*

Defined in utils/keywords-utils.ts:196

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](interfaces/testxcontext.md) |

**Returns:** *Promise‹void›*

___

###  loopOverList

▸ **loopOverList**(`args`: any, `context`: [TestxContext](interfaces/testxcontext.md)): *Promise‹void›*

Defined in utils/keywords-utils.ts:88

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](interfaces/testxcontext.md) |

**Returns:** *Promise‹void›*

___

###  objectKeysToLowerCase

▸ **objectKeysToLowerCase**(`obj`: any): *any*

Defined in utils/api-utils.ts:29

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *any*

___

### `Const` printable

▸ **printable**(`obj`: any, `delimiter`: string): *string*

Defined in utils/logger.ts:17

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`obj` | any | - |
`delimiter` | string | ", " |

**Returns:** *string*

___

###  runTestxScript

▸ **runTestxScript**(`context`: [TestxContext](interfaces/testxcontext.md)): *(Anonymous function)*

Defined in utils/keywords-utils.ts:211

**Parameters:**

Name | Type |
------ | ------ |
`context` | [TestxContext](interfaces/testxcontext.md) |

**Returns:** *(Anonymous function)*

___

###  saveAll

▸ **saveAll**(`args`: any, `context`: any): *Promise‹void›*

Defined in utils/keywords-utils.ts:310

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | any |

**Returns:** *Promise‹void›*

___

###  scrollDown

▸ **scrollDown**(): *Promise‹unknown›*

Defined in utils/keywords-utils.ts:224

**Returns:** *Promise‹unknown›*

___

###  scrollMiddle

▸ **scrollMiddle**(): *Promise‹unknown›*

Defined in utils/keywords-utils.ts:236

**Returns:** *Promise‹unknown›*

___

###  scrollUp

▸ **scrollUp**(): *Promise‹unknown›*

Defined in utils/keywords-utils.ts:230

**Returns:** *Promise‹unknown›*

___

### `Const` startScriptLogLine

▸ **startScriptLogLine**(`source`: any): *string*

Defined in utils/logger.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`source` | any |

**Returns:** *string*

___

###  stringifyAndThrowError

▸ **stringifyAndThrowError**(`error`: any): *void*

Defined in utils/keywords-utils.ts:207

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *void*

___

###  testxLogger

▸ **testxLogger**(`eventEmitter`: any, `showArgs`: boolean, `truncateOutput`: boolean): *void*

Defined in utils/logger.ts:46

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventEmitter` | any | - |
`showArgs` | boolean | false |
`truncateOutput` | boolean | false |

**Returns:** *void*

___

###  truncateObject

▸ **truncateObject**(`obj`: any, `num`: number): *any*

Defined in utils/api-utils.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |
`num` | number |

**Returns:** *any*

___

###  waitForDisappearanceOfElement

▸ **waitForDisappearanceOfElement**(`locator`: ElementFinder, `waitSeconds`: number): *void*

Defined in utils/keywords-utils.ts:69

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`locator` | ElementFinder | - |
`waitSeconds` | number | 10 |

**Returns:** *void*

___

###  waitForElement

▸ **waitForElement**(`locator`: ElementFinder, `waitSeconds`: number): *void*

Defined in utils/keywords-utils.ts:47

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`locator` | ElementFinder | - |
`waitSeconds` | number | 10 |

**Returns:** *void*

___

###  waitForLocator

▸ **waitForLocator**(`locator`: Locator, `waitSeconds`: number): *void*

Defined in utils/keywords-utils.ts:39

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`locator` | Locator | - |
`waitSeconds` | number | 10 |

**Returns:** *void*

___

###  waitForPresenceOfElement

▸ **waitForPresenceOfElement**(`locator`: ElementFinder, `waitSeconds`: number): *void*

Defined in utils/keywords-utils.ts:58

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`locator` | ElementFinder | - |
`waitSeconds` | number | 10 |

**Returns:** *void*

___

###  waitForUrl

▸ **waitForUrl**(`url`: string, `waitSeconds`: number): *void*

Defined in utils/keywords-utils.ts:80

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`url` | string | - |
`waitSeconds` | number | 10 |

**Returns:** *void*

## Object literals

### `Const` keywords

### ▪ **keywords**: *object*

Defined in extensions/google/core/keywords.ts:5

Defined in extensions/google/gmail/keywords.ts:9

Defined in extensions/google/sheets/keywords.ts:9

Defined in extensions/google/index.ts:6

Defined in extensions/index.ts:5

Defined in utils/keywords.ts:16

Defined in index.ts:5
