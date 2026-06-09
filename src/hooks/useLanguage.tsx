import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { translations, type Lang } from '../i18n/translations';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('pl');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'pl' ? 'en' : 'pl'));
  }, []);

  const t = useCallback(
    (key: string): string => {
      const keys = key.split('.');
      let current: unknown = translations;
      for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
          current = (current as Record<string, unknown>)[k];
        } else {
          return key;
        }
      }
      if (current && typeof current === 'object' && lang in current) {
        return (current as Record<string, string>)[lang];
      }
      return typeof current === 'string' ? current : key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
