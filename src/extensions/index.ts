import { keywords as googleKeywords } from './google';

import { TestxKeywords } from '../utils/keywords-utils';

export const keywords: TestxKeywords = {
  ...googleKeywords,
};

export * from './google';
