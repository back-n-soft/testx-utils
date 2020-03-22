import * as stringify from 'json-stringify-safe';
import {
  browser,
  By,
  element,
  ElementArrayFinder,
  ElementFinder,
  ExpectedConditions,
  Locator,
} from 'protractor';
import { isNotNullOrUndefined, isNullOrUndefined } from './api-utils';

export type TestxKeywordFunction = (args, context) => any;

export interface TestxKeywords {
  [keyword: string]: TestxKeywordFunction;
}

export interface TestxContext {
  [key: string]: any;
}

/**
 * A decorator to add a testx keyword function to a testx keywords object
 * @param keyword   The keyword string
 * @param keywords  The keywords object
 * @method
 */
export function Keyword(keyword: string, keywords: TestxKeywords) {
  return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
    keywords[keyword] = descriptor.value as TestxKeywordFunction;
  };
}

export function getTestx() {
  return global['testx'];
}

export function waitForLocator(locator: Locator, waitSeconds: number = 10) {
  browser.wait(
    ExpectedConditions.visibilityOf(getTestx().element(locator)),
    waitSeconds * 1000,
    `Element ${locator} did not appear in ${waitSeconds} seconds.`
  );
}

export function waitForElement(
  locator: ElementFinder,
  waitSeconds: number = 10
) {
  browser.wait(
    ExpectedConditions.visibilityOf(locator),
    waitSeconds * 1000,
    `Element ${locator} did not appear in ${waitSeconds} seconds.`
  );
}

export function waitForPresenceOfElement(
  locator: ElementFinder,
  waitSeconds: number = 10
) {
  browser.wait(
    ExpectedConditions.presenceOf(locator),
    waitSeconds * 1000,
    `Element ${locator} did not appear in ${waitSeconds} seconds.`
  );
}

export function waitForDisappearanceOfElement(
  locator: ElementFinder,
  waitSeconds: number = 10
) {
  browser.wait(
    ExpectedConditions.invisibilityOf(locator),
    waitSeconds * 1000,
    `Element ${locator} did not disappear in ${waitSeconds} seconds.`
  );
}

export function waitForUrl(url: string, waitSeconds: number = 10) {
  browser.wait(
    ExpectedConditions.urlIs(url),
    waitSeconds * 1000,
    `Url ${url} did not disappear in ${waitSeconds} seconds.`
  );
}

export async function loopOverList(args: any, context: TestxContext) {
  const { loopPath, linkPath, script, scriptFile, firstIndex } = args;
  let {
    pathType,
    linkAttr,
    baseUrl,
    index,
    stepSize,
    max,
    click,
    preWork,
    ifExists,
    aimToWork,
  } = args;
  linkAttr = linkAttr || 'href';
  baseUrl = baseUrl || '';
  pathType = pathType || 'xpath';
  index = firstIndex || 1;
  stepSize = stepSize || 1;
  max = max || 50;
  click = click || false;
  preWork = preWork || [];
  ifExists = ifExists || [];
  aimToWork = aimToWork != null ? aimToWork : true;
  console.log(
    `Starting looping over items:\n\tpathType: ${pathType}\n\tloopPath: ${loopPath}\n\tlinkPath: ${linkPath}\n\tscript: ${script}`
  );
  const elementArrayFinder: ElementArrayFinder = element.all(
    By[pathType](`${loopPath}${linkPath}`)
  );
  const elementsNbr = await elementArrayFinder.count();
  if (elementsNbr === 0) {
    return console.log('There is no items!!');
  }
  const traitElem = (pre: any, i: number) => {
    return new Promise(async (resolve, reject) => {
      let { fail } = pre;
      fail = fail != null ? fail : true;
      const elem =
        pathType === 'xpath'
          ? element(By.xpath(`(${loopPath})[${i}]${pre.elemPath}`))
          : element(By.css(`${loopPath}:nth-child(${i})${pre.elemPath}`));
      try {
        context[pre.variable] =
          pre.attribute != null
            ? await elem.getAttribute(pre.attribute)
            : await elem.getText();
      } catch (error) {
        context[pre.variable] = null;
        if (fail) {
          reject(error);
        }
      }
      return resolve();
    });
  };
  for (let i = 0; i < elementsNbr && i < max; i++) {
    let canWork = true;
    for (const ie of ifExists) {
      const linkElem: ElementFinder = element(
        pathType === 'xpath'
          ? By.xpath(`(${loopPath})[${index}]${ie.elemPath}`)
          : By.css(`${loopPath}:nth-child(${index})${ie.elemPath}`)
      );
      canWork = canWork && (await linkElem.isPresent());
    }
    if (!canWork) {
      continue;
    }
    const promises: any[] = [];
    for (const pre of preWork) {
      promises.push(traitElem(pre, index));
    }
    await Promise.all(promises)
      .then(() => {
        const linkElem: ElementFinder = element(
          pathType === 'xpath'
            ? By.xpath(`(${loopPath})[${index}]${linkPath}`)
            : By.css(`${loopPath}:nth-child(${index})${linkPath}`)
        );
        index += stepSize;
        return linkElem.isPresent().then(async () => {
          if (aimToWork) {
            if (click) {
              linkElem.click();
              await runTestxScript(context)(scriptFile, script);
            } else {
              let url = await linkElem.getAttribute(linkAttr);
              if (url !== null && url !== '') {
                url = baseUrl + url;
                browser.get(url);
                await runTestxScript(context)(scriptFile, script);
              } else {
                console.log('No url, ignore..');
              }
            }
          } else {
            await runTestxScript(context)(scriptFile, script);
          }
          return waitForPresenceOfElement(linkElem, 60);
        });
      })
      .catch((error) => {
        throw error;
      });
  }
}

export async function loopOverContextList(args: any, context: TestxContext) {
  const itemsList: any[] = context[args.listName || 'itemsList'];
  const itemName: string = args.itemName || 'item';
  const scriptFile: string = args.scriptFile;
  const script: string = args.script;
  for (const item of itemsList) {
    context[itemName] = item;
    await runTestxScript(context)(scriptFile, script);
  }
}

export function stringifyAndThrowError(error) {
  throw Error(stringify(error));
}

export function runTestxScript(context: TestxContext) {
  return async (scriptFile?: string, script?: string) => {
    if (isNotNullOrUndefined(scriptFile)) {
      await getTestx().run(scriptFile, context);
    } else if (isNotNullOrUndefined(script)) {
      await getTestx().runScript(
        getTestx().parsers.get('testx').parse(script),
        context
      );
    }
  };
}

export function scrollDown() {
  return browser.executeScript(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
}

export function scrollUp() {
  return browser.executeScript(() => {
    window.scrollTo(0, 0);
  });
}

export function scrollMiddle() {
  return browser.executeScript(() => {
    window.scrollTo(0, document.body.scrollHeight / 2);
  });
}

export async function extractText(args: any, context: TestxContext) {
  const condition: string = args.condition;
  const name: string = args.name;
  let flags: string = args.flags;
  let fail: boolean = args.fail;
  let index: number = args.index;
  let regex: string = args.regex;
  if (isNullOrUndefined(condition)) {
    console.warn('condition: not given, no where to check condition');
  } else {
    if (!eval(condition)) {
      console.warn('condition: not verified');
      return;
    }
  }
  if (isNullOrUndefined(name)) {
    throw new Error(`name: not given, no where to check name`);
  }
  if (isNullOrUndefined(index)) {
    index = 1;
  }
  if (isNullOrUndefined(flags)) {
    flags = '';
  }
  if (isNullOrUndefined(fail)) {
    console.log('no `fail`: found');
    fail = true;
  }
  if (isNullOrUndefined(args.regex)) {
    console.warn('ignoring `index:` since no `regex:` was given');
    index = 0;
    regex = '.*';
  }

  function traitError(error) {
    if (fail) {
      throw error;
    } else {
      context[args.name] = args.default || null;
    }
  }

  function traitText(text) {
    const re = new RegExp(regex, flags);
    const result = re.exec(text);
    if (isNotNullOrUndefined(result) && isNotNullOrUndefined(result[index])) {
      context[name] = result[index].trim();
    } else {
      traitError(Error(`text did not match regex ${args.regex}`));
    }
  }

  if (isNotNullOrUndefined(args.element)) {
    const textElement = getTestx().objects.get()[args.element];
    await element(By[textElement.locator](textElement.value))
      .getText()
      .then((text) => {
        traitText(text);
      })
      .catch((err) => traitError(err));
  } else if (
    isNotNullOrUndefined(args.text) &&
    isNotNullOrUndefined(context[args.text])
  ) {
    traitText(context[args.text].trim());
  }
}

export async function saveAll(args, context) {
  for (const [key, value] of Object.entries(args)) {
    context[key] = await getTestx().elements(value);
  }
}
