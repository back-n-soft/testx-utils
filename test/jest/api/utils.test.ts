import {
  isNotNullOrUndefined,
  isNullOrUndefined,
  objectKeysToLowerCase,
  truncateObject,
} from '../../../src';

test('Testing "isNullOrUndefined" method', () => {
  expect<boolean>(isNullOrUndefined(undefined)).toBe(true);
  expect<boolean>(isNullOrUndefined(null)).toBe(true);
  expect<boolean>(isNullOrUndefined({})).toBe(false);
});

test('Testing "isNotNullOrUndefined" method', () => {
  expect<boolean>(isNotNullOrUndefined(undefined)).toBe(false);
  expect<boolean>(isNotNullOrUndefined(null)).toBe(false);
  expect<boolean>(isNotNullOrUndefined({})).toBe(true);
});

test('Testing "truncateObject" method', () => {
  expect<{ [key: string]: any }>(
    truncateObject(
      {
        string: 'A long string',
        array: ['A long string'],
        object: { key: 'A long string' },
        null: null,
        undefined: undefined,
      },
      6
    )
  ).toStrictEqual({
    string: 'A long...',
    array: ['A long...'],
    object: { key: 'A long...' },
    null: null,
    undefined: undefined,
  });
});

test('Testing "objectKeysToLowerCase" method', () => {
  expect<{ [key: string]: any }>(
    objectKeysToLowerCase({
      camelCase: 'any',
      ALL_UPPER_CASE: 'any',
      'snake-case': 'any',
    })
  ).toStrictEqual({
    camelcase: 'any',
    all_upper_case: 'any',
    'snake-case': 'any',
  });
});
