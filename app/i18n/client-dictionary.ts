import type { Dictionary } from './types';
import { defaultLocale, type ValidLocale } from './config';

let cachedDictionaries: Partial<Record<ValidLocale, Dictionary>> = {};

export const getClientDictionary = async (locale: ValidLocale = defaultLocale): Promise<Dictionary> => {
  // If we have a cached version, return it
  if (cachedDictionaries[locale]) {
    return cachedDictionaries[locale] as Dictionary;
  }

  try {
    // Load the dictionary
    const response = await fetch(`/api/dictionary?locale=${locale}`);
    if (!response.ok) throw new Error('Failed to fetch dictionary');
    
    const dictionary = await response.json();
    // Cache it
    cachedDictionaries[locale] = dictionary;
    return dictionary;
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error);
    // Fallback to default locale if the requested one fails
    if (locale !== defaultLocale) {
      return getClientDictionary(defaultLocale);
    }
    // If even the default locale fails, return an empty dictionary structure
    return {
      navigation: { work: '', about: '', contact: '' },
      hero: { title: '', viewWork: '', contactMe: '', scrollToExplore: '' },
      about: {
        title: '',
        intro: '',
        background: '',
        passion: '',
        skillsTitle: '',
        ctaTitle: '',
        ctaButton: '',
      },
      contact: {
        title: '',
        subtitle: '',
        form: { name: '', email: '', message: '', submit: '' },
        directContact: '',
      },
      cta: { audit: '', claim: '' },
    };
  }
}; 