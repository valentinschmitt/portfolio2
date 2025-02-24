import 'server-only';
import type { Dictionary } from './types';
import { defaultLocale, type ValidLocale } from './config';

const dictionaries: Record<ValidLocale, () => Promise<Dictionary>> = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
};

export const getServerDictionary = async (locale: ValidLocale = defaultLocale): Promise<Dictionary> => {
  try {
    return await dictionaries[locale]();
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error);
    if (locale !== defaultLocale) {
      return getServerDictionary(defaultLocale);
    }
    throw error;
  }
}; 