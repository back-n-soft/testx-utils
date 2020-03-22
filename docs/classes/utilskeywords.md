[@nan-team/testx-utils](../README.md) › [Globals](../globals.md) › [UtilsKeywords](utilskeywords.md)

# Class: UtilsKeywords

## Hierarchy

* **UtilsKeywords**

## Index

### Methods

* [extractText](utilskeywords.md#extracttext)
* [getCurrentUrl](utilskeywords.md#getcurrenturl)
* [log](utilskeywords.md#log)
* [loopOverContextList](utilskeywords.md#loopovercontextlist)
* [loopOverItems](utilskeywords.md#loopoveritems)
* [runIfTrue](utilskeywords.md#runiftrue)
* [saveAll](utilskeywords.md#saveall)
* [scrollDown](utilskeywords.md#scrolldown)
* [scrollMiddle](utilskeywords.md#scrollmiddle)
* [scrollUp](utilskeywords.md#scrollup)

## Methods

###  extractText

▸ **extractText**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹void›*

Defined in utils/keywords.ts:122

Keyword `scroll down` will scroll down the web page

Usage example:
```yaml
- extract text:
     element: elementName
     name: variableName
     regex: '^(.*)'
     flags: gm
     fail: false
     defaultValue: 'default'

```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | any | The keyword arguments |
`context` | [TestxContext](../interfaces/testxcontext.md) | The Testx context  |

**Returns:** *Promise‹void›*

___

###  getCurrentUrl

▸ **getCurrentUrl**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹string›*

Defined in utils/keywords.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](../interfaces/testxcontext.md) |

**Returns:** *Promise‹string›*

___

###  log

▸ **log**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *void*

Defined in utils/keywords.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`context` | [TestxContext](../interfaces/testxcontext.md) |

**Returns:** *void*

___

###  loopOverContextList

▸ **loopOverContextList**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹void›*

Defined in utils/keywords.ts:181

Keyword `loop over context list` will loop over list in the context and
run a script file or a script text

Usage example:
```yaml
- loop over context list:
    listName: list                 # Optional, default: itemList
    itemName: item                 # Optional, default: item
    scriptFile: 'traitItem.testx'
    # or
    script: >
      - log:
         - item
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | any | The keyword arguments |
`context` | [TestxContext](../interfaces/testxcontext.md) | The Testx context  |

**Returns:** *Promise‹void›*

___

###  loopOverItems

▸ **loopOverItems**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹void›*

Defined in utils/keywords.ts:158

Keyword `loop over list` will loop over list of items in a web page
running a testx script for every item located using the paths passed
in `args`.

Usage example:
```yaml
- loop over items:
    loopPath: "//li/div[@class='box']"
    linkPath: "/a"
    pathType: "xpath"                    # Optional, default: 'xpath'
    linkAttr: "href"                     # Optional, default: 'href'
    baseUrl: "http://www.example.com"    # Optional, default: null
    script: storeVacancy.testx
    firstIndex: 1                        # Optional, default: 1
    stepSize: 2                          # Optional, default: 1
    max: 5                               # Optional, default: 50
    click: false                         # Optional, default: false
    aimToWork: true                      # Optional, default: true
    ifExists:                            # Optional, default: empty array
      - elemPath: "/a/span[1]"
      - elemPath: "/a/span[2]"
    preWork:                             # Optional, default: empty array
      - elemPath: "/a/span[1]"
        variable: "title"
        attribute: "name"                # Optional, default: null
        fail: false                      # Optional, default: true
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | any | The keyword arguments |
`context` | [TestxContext](../interfaces/testxcontext.md) | The Testx context  |

**Returns:** *Promise‹void›*

___

###  runIfTrue

▸ **runIfTrue**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹void›*

Defined in utils/keywords.ts:208

Keyword `run if true` will loop over list in the context and
run a script file or a script text

Usage example:
```yaml
- run if true:
    condition: '1 === 1'
    scriptFile: 'a.testx'
    # or
    script: >
       - log:
           - var
    else.scriptFile: 'b.testx'
    # or
    else.script: >
       - log:
           - var
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | any | The keyword arguments |
`context` | [TestxContext](../interfaces/testxcontext.md) | The Testx context  |

**Returns:** *Promise‹void›*

___

###  saveAll

▸ **saveAll**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹void›*

Defined in utils/keywords.ts:100

Keyword `save all` will save the html elements to the variable in the context

Usage example:
```yaml
- save all:
     - test : test.object

```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | any | The keyword arguments |
`context` | [TestxContext](../interfaces/testxcontext.md) | The Testx context  |

**Returns:** *Promise‹void›*

___

###  scrollDown

▸ **scrollDown**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹unknown›*

Defined in utils/keywords.ts:83

Keyword `scroll down` will scroll down the web page

Usage example:
```yaml
- scroll down

```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | any | The keyword arguments |
`context` | [TestxContext](../interfaces/testxcontext.md) | The Testx context  |

**Returns:** *Promise‹unknown›*

___

###  scrollMiddle

▸ **scrollMiddle**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹unknown›*

Defined in utils/keywords.ts:67

Keyword `scroll middle` will scroll to the middle of the web page

Usage example:
```yaml
- scroll middle

```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | any | The keyword arguments |
`context` | [TestxContext](../interfaces/testxcontext.md) | The Testx context  |

**Returns:** *Promise‹unknown›*

___

###  scrollUp

▸ **scrollUp**(`args`: any, `context`: [TestxContext](../interfaces/testxcontext.md)): *Promise‹unknown›*

Defined in utils/keywords.ts:51

Keyword `scroll up` will scroll up the web page

Usage example:
```yaml
- scroll up

```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | any | The keyword arguments |
`context` | [TestxContext](../interfaces/testxcontext.md) | The Testx context  |

**Returns:** *Promise‹unknown›*
