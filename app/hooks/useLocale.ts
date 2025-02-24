'use client';

import { useEffect, useState } from 'react';
import { defaultLocale, type ValidLocale } from '../i18n/config';
import { getClientDictionary } from '../i18n/client-dictionary';
import type { Dictionary } from '../i18n/types';

export function useLocale() {
  const [locale, setLocale] = useState<ValidLocale>(defaultLocale);
  const [dictionary, setDictionary] = useState<Dictionary | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDictionary = async () => {
      try {
        // Get locale from cookie
        const storedLocale = document.cookie
          .split('; ')
          .find(row => row.startsWith('NEXT_LOCALE='))
          ?.split('=')[1] as ValidLocale | undefined;

        const currentLocale = storedLocale || defaultLocale;
        setLocale(currentLocale);

        // Load dictionary
        const dict = await getClientDictionary(currentLocale);
        setDictionary(dict);
        setError(null);
      } catch (err) {
        console.error('Failed to load dictionary:', err);
        setError('Failed to load language settings');
        // Ensure we have at least the default dictionary
        const defaultDict = await getClientDictionary(defaultLocale);
        setDictionary(defaultDict);
      }
    };

    loadDictionary();
  }, []);

  const changeLocale = async (newLocale: ValidLocale) => {
    try {
      // Set cookie
      document.cookie = `NEXT_LOCALE=${newLocale};path=/;`;
      setLocale(newLocale);
      
      // Load new dictionary
      const dict = await getClientDictionary(newLocale);
      setDictionary(dict);
      setError(null);
    } catch (err) {
      console.error('Failed to change locale:', err);
      setError('Failed to change language');
    }
  };

  return {
    locale,
    dictionary,
    isLoading: !dictionary,
    error,
    changeLocale,
  };
} 