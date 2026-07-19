import { useEffect, useState } from "react";
import { copy, type Locale } from "@/content";

const LOCALE_KEY = "gl-locale";

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(LOCALE_KEY) as Locale | null;
    if (saved === "el" || saved === "en") {
      setLocale(saved);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(LOCALE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale, ready]);

  return { locale, setLocale, t: copy[locale] };
}
