export const defaultLocale = 'en';
export const locales = ['en', 'fr'] as const;
export type ValidLocale = typeof locales[number];

export const languageNames = {
  en: 'English',
  fr: 'Français',
} as const; 