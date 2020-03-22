[@nan-team/testx-utils](../README.md) › [Globals](../globals.md) › [FileService](fileservice.md)

# Class: FileService

## Hierarchy

* **FileService**

## Index

### Constructors

* [constructor](fileservice.md#constructor)

### Properties

* [baseDir](fileservice.md#private-basedir)

### Methods

* [createFile](fileservice.md#createfile)
* [createFolder](fileservice.md#createfolder)
* [createReadFileStream](fileservice.md#createreadfilestream)
* [isFile](fileservice.md#isfile)
* [isFileExists](fileservice.md#isfileexists)
* [isFolder](fileservice.md#isfolder)
* [isFolderExists](fileservice.md#isfolderexists)
* [readFile](fileservice.md#readfile)
* [removeFile](fileservice.md#removefile)
* [removeFolder](fileservice.md#removefolder)

## Constructors

###  constructor

\+ **new FileService**(): *[FileService](fileservice.md)*

Defined in service/file.service.ts:5

**Returns:** *[FileService](fileservice.md)*

## Properties

### `Private` baseDir

• **baseDir**: *string* = `${process.cwd()}/tmp`

Defined in service/file.service.ts:5

## Methods

###  createFile

▸ **createFile**(`fileName`: string, `fileData`: string | Buffer | Stream, `encoding`: string, `flag`: string): *Promise‹void›*

Defined in service/file.service.ts:25

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`fileName` | string | - |
`fileData` | string &#124; Buffer &#124; Stream | - |
`encoding` | string | "utf8" |
`flag` | string | "w" |

**Returns:** *Promise‹void›*

___

###  createFolder

▸ **createFolder**(`folderPath`: string): *Promise‹void›*

Defined in service/file.service.ts:86

**Parameters:**

Name | Type |
------ | ------ |
`folderPath` | string |

**Returns:** *Promise‹void›*

___

###  createReadFileStream

▸ **createReadFileStream**(`fileName`: string): *Promise‹ReadStream›*

Defined in service/file.service.ts:67

**Parameters:**

Name | Type |
------ | ------ |
`fileName` | string |

**Returns:** *Promise‹ReadStream›*

___

###  isFile

▸ **isFile**(`path`: string): *Promise‹boolean›*

Defined in service/file.service.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹boolean›*

___

###  isFileExists

▸ **isFileExists**(`fileName`: string): *Promise‹boolean›*

Defined in service/file.service.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`fileName` | string |

**Returns:** *Promise‹boolean›*

___

###  isFolder

▸ **isFolder**(`path`: string): *Promise‹boolean›*

Defined in service/file.service.ts:19

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹boolean›*

___

###  isFolderExists

▸ **isFolderExists**(`folderPath`: string): *Promise‹boolean›*

Defined in service/file.service.ts:93

**Parameters:**

Name | Type |
------ | ------ |
`folderPath` | string |

**Returns:** *Promise‹boolean›*

___

###  readFile

▸ **readFile**(`fileName`: string): *Promise‹Buffer›*

Defined in service/file.service.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`fileName` | string |

**Returns:** *Promise‹Buffer›*

___

###  removeFile

▸ **removeFile**(`fileName`: string): *Promise‹void›*

Defined in service/file.service.ts:79

**Parameters:**

Name | Type |
------ | ------ |
`fileName` | string |

**Returns:** *Promise‹void›*

___

###  removeFolder

▸ **removeFolder**(`folderPath`: string): *Promise‹void›*

Defined in service/file.service.ts:97

**Parameters:**

Name | Type |
------ | ------ |
`folderPath` | string |

**Returns:** *Promise‹void›*
