import {
  defaultLang,
  LANGUAGE_STORAGE_KEY,
  languages,
  showDefaultLang,
  type Language,
  type TranslationKey,
  ui,
} from './ui';

const hasOwn = (value: string) => Object.prototype.hasOwnProperty.call(languages, value);

export function isValidLanguage(value: string | null | undefined): value is Language {
  return Boolean(value && hasOwn(value));
}

export function getLangFromUrl(url: URL): Language {
  const [, maybeLang] = url.pathname.split('/');

  if (isValidLanguage(maybeLang)) {
    return maybeLang;
  }

  return defaultLang;
}

export function getLangFromNavigator(): Language {
  if (typeof navigator === 'undefined') {
    return defaultLang;
  }

  const [browserLang] = navigator.language.toLowerCase().split('-');
  return isValidLanguage(browserLang) ? browserLang : defaultLang;
}

export function getLangFromStorage(): Language | null {
  if (typeof localStorage === 'undefined') {
    return null;
  }

  const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return isValidLanguage(savedLang) ? savedLang : null;
}

export function setLangToStorage(lang: Language): void {
  if (typeof localStorage === 'undefined') {
    return;
  }

  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
}

export function useTranslations(lang: Language) {
  return (key: TranslationKey): string => {
    const translation = ui[lang]?.[key];

    if (translation) {
      return translation;
    }

    return ui[defaultLang][key] ?? key;
  };
}

export function getBasePath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length > 0 && isValidLanguage(segments[0])) {
    segments.shift();
  }

  if (segments.length === 0) {
    return '/';
  }

  return `/${segments.join('/')}/`;
}

export function useTranslatedPath(currentLang: Language) {
  return (path: string, targetLang: Language = currentLang): string => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    if (!showDefaultLang && targetLang === defaultLang) {
      return normalizedPath;
    }

    if (normalizedPath === '/') {
      return `/${targetLang}/`;
    }

    return `/${targetLang}${normalizedPath}`.replace(/\/+/g, '/');
  };
}
