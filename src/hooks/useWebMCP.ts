import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/content";
import { hasWebMCP } from "@/webmcp/detect";
import { registerWebMCPTools } from "@/webmcp/registerTools";

/**
 * Register WebMCP tools while mounted. Shows channel-ready when API exists.
 * Origin trial token (optional): set VITE_WEBMCP_ORIGIN_TRIAL before build.
 */
export function useWebMCP(opts: {
  getLocale: () => Locale;
  setLocale: (locale: Locale) => void;
}) {
  const [channelReady, setChannelReady] = useState(false);
  const [eggOpen, setEggOpen] = useState(false);
  const getLocaleRef = useRef(opts.getLocale);
  const setLocaleRef = useRef(opts.setLocale);
  getLocaleRef.current = opts.getLocale;
  setLocaleRef.current = opts.setLocale;

  useEffect(() => {
    const token = import.meta.env.VITE_WEBMCP_ORIGIN_TRIAL;
    if (token && !document.querySelector('meta[http-equiv="origin-trial"]')) {
      const meta = document.createElement("meta");
      meta.httpEquiv = "origin-trial";
      meta.content = token;
      document.head.append(meta);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    let registered = false;
    const controller = new AbortController();

    const tryRegister = async () => {
      if (cancelled || registered) return;
      if (!hasWebMCP()) {
        setChannelReady(false);
        return;
      }
      setChannelReady(true);

      const ok = await registerWebMCPTools(
        {
          getLocale: () => getLocaleRef.current(),
          setLocale: (locale) => setLocaleRef.current(locale),
          onEgg: () => {
            if (!cancelled) setEggOpen(true);
          },
        },
        controller.signal
      );
      if (ok) registered = true;
      else if (!cancelled) setChannelReady(false);
    };

    void tryRegister();
    const retry = window.setTimeout(() => void tryRegister(), 1500);

    return () => {
      cancelled = true;
      controller.abort();
      window.clearTimeout(retry);
    };
  }, []);

  useEffect(() => {
    if (!eggOpen) return;
    const t = window.setTimeout(() => setEggOpen(false), 6000);
    return () => window.clearTimeout(t);
  }, [eggOpen]);

  return {
    channelReady,
    eggOpen,
    dismissEgg: () => setEggOpen(false),
  };
}
