import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import '../globals.css';
import { routing } from '@/src/i18n/routing';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

// Static generation configuration
export const dynamicParams = false;

// Generate static params for all supported locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!['en', 'ar', 'he'].includes(locale)) {
    notFound();
  }
  
  // Provide all messages to the client
  const messages = await getMessages();
  
  return (
    <html lang={locale} dir={['ar', 'he'].includes(locale) ? 'rtl' : 'ltr'}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
