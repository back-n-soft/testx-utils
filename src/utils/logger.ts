import * as colors from 'colors';
import * as yaml from 'js-yaml';
import { truncateObject } from './index';
import { getTestx } from './keywords-utils';

const startScriptLogLine = (source) => `\

====================================================================================================
Executing ${source}
====================================================================================================

`;

let showArgsVar;
let truncateOutputVar;

const printable = (obj, delimiter = ', ') =>
  Object.entries(obj)
    .map(([k, v]) => `${k}: '${v}'`)
    .join(delimiter);

const logScriptStart = (script) => {
  const source = script.source
    ? `script in ${colors.bold(printable(script.source))}`
    : colors.bold('inline script');
  console.log(colors.cyan(startScriptLogLine(source)));

  if (getTestx().params.logScript) {
    console.log('SCRIPT:', JSON.stringify(script, null, 2));
  }
};

const logStepStart = (step, context) => {
  const fullName = step.meta['Full name'].cyan;
  const row = colors.yellow(`row ${step.meta.Row}`);
  let args = JSON.parse(JSON.stringify(step.arguments));
  args = truncateOutputVar ? truncateObject(args, 100) : args;
  if (Object.keys(args).length && showArgsVar) {
    console.log(`Executing step ${fullName} on ${row} with arguments:`);
    console.log(colors.grey(yaml.safeDump(args)));
  } else {
    console.log(`Executing step ${fullName} on ${row}.\n`);
  }
};

export function testxLogger(
  eventEmitter,
  showArgs = false,
  truncateOutput = false
) {
  showArgsVar = showArgs;
  truncateOutputVar = truncateOutput;

  eventEmitter.removeAllListeners('script/start');
  eventEmitter.on('script/start', logScriptStart);

  eventEmitter.removeAllListeners('step/start');
  eventEmitter.on('step/start', logStepStart);
}
