import { NextResponse } from 'next/server';
import { getServerDictionary } from '@/app/i18n/server-dictionary';
import { defaultLocale, type ValidLocale } from '@/app/i18n/config';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') as ValidLocale || defaultLocale;
    
    const dictionary = await getServerDictionary(locale);
    return NextResponse.json(dictionary);
  } catch (error) {
    console.error('Dictionary API error:', error);
    return NextResponse.json(
      { error: 'Failed to load dictionary' },
      { status: 500 }
    );
  }
} 