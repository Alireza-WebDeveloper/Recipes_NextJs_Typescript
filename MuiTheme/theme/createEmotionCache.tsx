import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

const isBrowser = typeof document !== 'undefined';
export default function createEmotionCache() {
  let insertionPoint: any;
  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }
  return createCache({
    key: 'mui-style-rtl',
    stylisPlugins: [prefixer, rtlPlugin],
    insertionPoint,
  });
}

// createEmotionCache
