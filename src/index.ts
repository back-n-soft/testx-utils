import { keywords as extensionKeywords } from './extensions';
import { keywords as utilsKeywords } from './utils/keywords';
import { TestxKeywords } from './utils/keywords-utils';

export const keywords: TestxKeywords = {
  ...extensionKeywords,
  ...utilsKeywords,
};

export * from './service';
export * from './extensions';
export * from './utils';
