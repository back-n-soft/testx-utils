[@nan-team/testx-utils](../README.md) › [Globals](../globals.md) › [Sheets](sheets.md)

# Class: Sheets

## Hierarchy

* [GoogleCore](googlecore.md)

  ↳ **Sheets**

## Index

### Properties

* [oAuth2Client](sheets.md#protected-oauth2client)
* [sheetsApi](sheets.md#private-sheetsapi)

### Methods

* [getSpreadsheetById](sheets.md#getspreadsheetbyid)
* [getSpreadsheetValuesById](sheets.md#getspreadsheetvaluesbyid)
* [login](sheets.md#login)
* [updateSpreadsheetValuesById](sheets.md#updatespreadsheetvaluesbyid)

## Properties

### `Protected` oAuth2Client

• **oAuth2Client**: *OAuth2Client*

*Inherited from [GoogleCore](googlecore.md).[oAuth2Client](googlecore.md#protected-oauth2client)*

Defined in extensions/google/core/api.ts:8

___

### `Private` sheetsApi

• **sheetsApi**: *Sheets*

Defined in extensions/google/sheets/api.ts:9

## Methods

###  getSpreadsheetById

▸ **getSpreadsheetById**(`spreadsheetId`: string): *Promise‹[Spreadsheet](../globals.md#spreadsheet)›*

Defined in extensions/google/sheets/api.ts:20

**Parameters:**

Name | Type |
------ | ------ |
`spreadsheetId` | string |

**Returns:** *Promise‹[Spreadsheet](../globals.md#spreadsheet)›*

___

###  getSpreadsheetValuesById

▸ **getSpreadsheetValuesById**(`spreadsheetId`: string, `range`: string): *Promise‹any[][]›*

Defined in extensions/google/sheets/api.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`spreadsheetId` | string |
`range` | string |

**Returns:** *Promise‹any[][]›*

___

###  login

▸ **login**(`oAuth2ClientOptions`: OAuth2ClientOptions, `credentials`: Credentials): *Promise‹void›*

*Overrides [GoogleCore](googlecore.md).[login](googlecore.md#login)*

Defined in extensions/google/sheets/api.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`oAuth2ClientOptions` | OAuth2ClientOptions |
`credentials` | Credentials |

**Returns:** *Promise‹void›*

___

###  updateSpreadsheetValuesById

▸ **updateSpreadsheetValuesById**(`spreadsheetId`: string, `values`: any[][], `range`: string): *Promise‹[UpdateValuesResponse](../globals.md#updatevaluesresponse)›*

Defined in extensions/google/sheets/api.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`spreadsheetId` | string |
`values` | any[][] |
`range` | string |

**Returns:** *Promise‹[UpdateValuesResponse](../globals.md#updatevaluesresponse)›*
