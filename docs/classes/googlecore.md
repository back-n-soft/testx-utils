[@nan-team/testx-utils](../README.md) › [Globals](../globals.md) › [GoogleCore](googlecore.md)

# Class: GoogleCore

## Hierarchy

* **GoogleCore**

  ↳ [Gmail](gmail.md)

  ↳ [Sheets](sheets.md)

## Index

### Properties

* [oAuth2Client](googlecore.md#protected-oauth2client)

### Methods

* [login](googlecore.md#login)

## Properties

### `Protected` oAuth2Client

• **oAuth2Client**: *OAuth2Client*

Defined in extensions/google/core/api.ts:8

## Methods

###  login

▸ **login**(`oAuth2ClientOptions`: OAuth2ClientOptions, `credentials`: Credentials): *Promise‹void›*

Defined in extensions/google/core/api.ts:17

Create to OAuth2 client to login to google products

**Parameters:**

Name | Type |
------ | ------ |
`oAuth2ClientOptions` | OAuth2ClientOptions |
`credentials` | Credentials |

**Returns:** *Promise‹void›*

Promise<void>
