import { keywords as googleCoreKeywords } from './core/keywords';
import { keywords as gmailKeywords } from './gmail/keywords';
import { keywords as sheetsKeywords } from './sheets/keywords';
import { TestxKeywords } from '../../utils/keywords-utils';

export const keywords: TestxKeywords = {
  ...googleCoreKeywords,
  ...gmailKeywords,
  ...sheetsKeywords,
};

export * from './core';
export * from './gmail';
export * from './sheets';
