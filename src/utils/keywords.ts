import {
  Keyword,
  loopOverContextList,
  loopOverList,
  runTestxScript,
  scrollDown,
  scrollUp,
  scrollMiddle,
  saveAll,
  extractText,
  TestxContext,
  TestxKeywords,
} from './keywords-utils';
import { browser } from 'protractor';

const keywords: TestxKeywords = {};

export { keywords };

export class UtilsKeywords {
  @Keyword('get current url', keywords)
  async getCurrentUrl(args: any, context: TestxContext) {
    return (context['currentUrl'] = await browser.getCurrentUrl());
  }

  @Keyword('log', keywords)
  log(args: any, context: TestxContext) {
    for (const arg of args) {
      const keys = arg.split('.');
      let value = context[keys[0]];
      keys.splice(0, 1);
      for (const key of keys) {
        value = value[key];
      }
      console.log(`${arg}: ${JSON.stringify(value, null, 2)}`);
    }
  }

  /**
   * Keyword `scroll up` will scroll up the web page
   *
   * Usage example:
   * ```yaml
   * - scroll up
   *
   * ```
   * @param args      The keyword arguments
   * @param context   The Testx context
   */
  @Keyword('scroll up', keywords)
  scrollUp(args: any, context: TestxContext) {
    return scrollUp();
  }

  /**
   * Keyword `scroll middle` will scroll to the middle of the web page
   *
   * Usage example:
   * ```yaml
   * - scroll middle
   *
   * ```
   * @param args      The keyword arguments
   * @param context   The Testx context
   */
  @Keyword('scroll middle', keywords)
  scrollMiddle(args: any, context: TestxContext) {
    return scrollMiddle();
  }

  /**
   * Keyword `scroll down` will scroll down the web page
   *
   * Usage example:
   * ```yaml
   * - scroll down
   *
   * ```
   * @param args      The keyword arguments
   * @param context   The Testx context
   */
  @Keyword('scroll down', keywords)
  scrollDown(args: any, context: TestxContext) {
    return scrollDown();
  }

  /**
   * Keyword `save all` will save the html elements to the variable in the context
   *
   * Usage example:
   * ```yaml
   * - save all:
   *      - test : test.object
   *
   * ```
   * @param args      The keyword arguments
   * @param context   The Testx context
   */
  @Keyword('save all', keywords)
  saveAll(args: any, context: TestxContext) {
    return saveAll(args, context);
  }

  /**
   * Keyword `scroll down` will scroll down the web page
   *
   * Usage example:
   * ```yaml
   * - extract text:
   *      element: elementName
   *      name: variableName
   *      regex: '^(.*)'
   *      flags: gm
   *      fail: false
   *      defaultValue: 'default'
   *
   * ```
   * @param args      The keyword arguments
   * @param context   The Testx context
   */
  @Keyword('extract text', keywords)
  extractText(args: any, context: TestxContext) {
    return extractText(args, context);
  }

  /**
   * Keyword `loop over list` will loop over list of items in a web page
   * running a testx script for every item located using the paths passed
   * in `args`.
   *
   * Usage example:
   * ```yaml
   * - loop over items:
   *     loopPath: "//li/div[@class='box']"
   *     linkPath: "/a"
   *     pathType: "xpath"                    # Optional, default: 'xpath'
   *     linkAttr: "href"                     # Optional, default: 'href'
   *     baseUrl: "http://www.example.com"    # Optional, default: null
   *     script: storeVacancy.testx
   *     firstIndex: 1                        # Optional, default: 1
   *     stepSize: 2                          # Optional, default: 1
   *     max: 5                               # Optional, default: 50
   *     click: false                         # Optional, default: false
   *     aimToWork: true                      # Optional, default: true
   *     ifExists:                            # Optional, default: empty array
   *       - elemPath: "/a/span[1]"
   *       - elemPath: "/a/span[2]"
   *     preWork:                             # Optional, default: empty array
   *       - elemPath: "/a/span[1]"
   *         variable: "title"
   *         attribute: "name"                # Optional, default: null
   *         fail: false                      # Optional, default: true
   * ```
   * @param args      The keyword arguments
   * @param context   The Testx context
   */
  @Keyword('loop over list', keywords)
  loopOverItems(args: any, context: TestxContext) {
    return loopOverList(args, context);
  }

  /**
   * Keyword `loop over context list` will loop over list in the context and
   * run a script file or a script text
   *
   * Usage example:
   * ```yaml
   * - loop over context list:
   *     listName: list                 # Optional, default: itemList
   *     itemName: item                 # Optional, default: item
   *     scriptFile: 'traitItem.testx'
   *     # or
   *     script: >
   *       - log:
   *          - item
   * ```
   * @param args      The keyword arguments
   * @param context   The Testx context
   */
  @Keyword('loop over context list', keywords)
  loopOverContextList(args: any, context: TestxContext) {
    return loopOverContextList(args, context);
  }

  /**
   * Keyword `run if true` will loop over list in the context and
   * run a script file or a script text
   *
   * Usage example:
   * ```yaml
   * - run if true:
   *     condition: '1 === 1'
   *     scriptFile: 'a.testx'
   *     # or
   *     script: >
   *        - log:
   *            - var
   *     else.scriptFile: 'b.testx'
   *     # or
   *     else.script: >
   *        - log:
   *            - var
   * ```
   * @param args      The keyword arguments
   * @param context   The Testx context
   */
  @Keyword('run if true', keywords)
  async runIfTrue(args: any, context: TestxContext) {
    const condition: string = args.condition || 'false';
    if (eval(condition)) {
      await runTestxScript(context)(args.scriptFile, args.script);
    } else {
      await runTestxScript(context)(
        args['else.scriptFile'],
        args['else.script']
      );
    }
  }
}
