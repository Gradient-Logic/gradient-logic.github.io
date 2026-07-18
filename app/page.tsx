"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Bot,
  Calendar,
  CheckCircle2,
  Github,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Search,
  Store,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, copy, type Locale } from "@/lib/content";

const LOCALE_KEY = "gl-locale";

function useLocale() {
  const [locale, setLocale] = useState<Locale>("el");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(LOCALE_KEY) as Locale | null;
    if (saved === "el" || saved === "en") setLocale(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(LOCALE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale, ready]);

  return { locale, setLocale, t: copy[locale] };
}

export default function GradientLogicPage() {
  const { locale, setLocale, t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const hasPhone = Boolean(SITE.phone);

  const nav = [
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#storemate", label: t.nav.storemate },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  const fade = reduceMotion
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <div className="min-h-screen overflow-x-hidden bg-mist text-ink">
      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 border-b border-line/70 bg-mist/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a
            href="#home"
            className="font-display text-lg font-semibold tracking-tight sm:text-xl"
          >
            Gradient <span className="text-teal">Logic</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-teal-deep"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div
              className="flex rounded-sm border border-line bg-white/70 p-0.5 text-xs font-semibold"
              role="group"
              aria-label="Language"
            >
              {(["el", "en"] as Locale[]).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLocale(code)}
                  className={`px-2.5 py-1.5 uppercase transition-colors ${
                    locale === code
                      ? "bg-ink text-white"
                      : "text-ink-soft hover:text-ink"
                  }`}
                  aria-pressed={locale === code}
                >
                  {code}
                </button>
              ))}
            </div>

            <Button asChild className="hidden rounded-sm sm:inline-flex">
              <a href="#contact">{t.nav.cta}</a>
            </Button>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line bg-white/70 md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-line bg-mist-elevated px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-3 text-sm">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-1 text-ink-soft hover:text-teal-deep"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="pt-2 font-semibold text-teal-deep"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.cta}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-[88vh] overflow-hidden">
        <div className="hero-plane absolute inset-0" aria-hidden />
        <div
          className="pointer-events-none absolute -left-24 top-16 h-72 w-72 animate-drift rounded-full bg-teal-glow/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 animate-soft-pulse rounded-full bg-sand/50 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[88vh] max-w-content flex-col justify-end px-4 pb-16 pt-24 sm:px-6 sm:pb-20 lg:justify-center lg:pb-24 lg:pt-20">
          <motion.p
            {...fade}
            className="font-display text-[clamp(2.75rem,12vw,8.5rem)] font-bold leading-[0.9] tracking-tight text-ink"
          >
            {t.hero.brand}
          </motion.p>

          <motion.div
            {...fade}
            transition={
              reduceMotion
                ? undefined
                : { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay: 0.12 }
            }
            className="mt-8 max-w-2xl"
          >
            <h1 className="font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl md:text-4xl text-balance">
              {t.hero.headline}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {t.hero.sub}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-sm">
                <a href={SITE.calendly} target="_blank" rel="noopener noreferrer">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              {hasPhone ? (
                <Button asChild size="lg" variant="outline" className="rounded-sm">
                  <a href={`tel:${SITE.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {t.contact.callUs}
                  </a>
                </Button>
              ) : (
                <Button asChild size="lg" variant="outline" className="rounded-sm">
                  <a href="#storemate">{t.hero.ctaSecondary}</a>
                </Button>
              )}
            </div>

            <p className="mt-8 text-sm text-muted">{t.hero.location}</p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="border-y border-line bg-mist-elevated">
        <div className="mx-auto max-w-content px-4 py-20 sm:px-6">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">{t.services.sub}</p>

          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {t.services.items.map((s, i) => {
              const Icon = [Brain, Layers, Store][i];
              return (
                <article key={s.title} className="border-t border-ink/15 pt-6">
                  <Icon className="mb-4 h-6 w-6 text-teal" strokeWidth={1.75} />
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {s.desc}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-ink">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {t.work.title}
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <article className="border border-line bg-teal-soft/40 p-6 sm:p-8 lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-deep">
              {t.work.enterpriseTag}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold leading-snug">
              {t.work.enterpriseTitle}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {t.work.enterpriseDesc}
            </p>
            <dl className="mt-6 space-y-4 text-sm">
              {[
                [t.work.role, t.work.roleValue],
                [t.work.scope, t.work.scopeValue],
                [t.work.deliverables, t.work.deliverablesValue],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="font-semibold text-ink">{label}</dt>
                  <dd className="mt-1 text-ink-soft">{value}</dd>
                </div>
              ))}
            </dl>
          </article>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <article className="border border-line bg-white/60 p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold">
                  {t.work.storemateTitle}
                </h3>
                <a
                  href="#storemate"
                  className="text-sm font-medium text-teal-deep hover:underline"
                >
                  {t.work.details}
                </a>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {t.work.storemateDesc}
              </p>
            </article>

            <article className="border border-line bg-white/60 p-6">
              <h3 className="font-display text-xl font-semibold">
                {t.work.previousTitle}
              </h3>
              <ul className="mt-4 space-y-4">
                {t.work.previous.map((item) => (
                  <li key={item.title} className="flex gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <span>
                      <strong className="font-semibold text-ink">
                        {item.title}
                      </strong>
                      <span className="text-ink-soft"> — {item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ── STOREMATE ── */}
      <section id="storemate" className="border-y border-line section-wash">
        <div className="mx-auto grid max-w-content items-start gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-teal-deep">
              <Store className="h-3.5 w-3.5" />
              {t.storemate.badge}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
              {t.storemate.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {t.storemate.sub}
            </p>

            <div className="mt-8 space-y-6">
              {t.storemate.features.map((f, i) => {
                const Icon = [Search, Brain, Bot][i];
                return (
                  <div key={f.title} className="flex gap-4">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <div>
                      <h3 className="font-semibold">{f.title}</h3>
                      <p className="mt-1 text-sm text-ink-soft">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <Button asChild size="lg" className="rounded-sm">
                <a href="#contact">
                  {t.storemate.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="border border-line bg-white/70 p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold">
              {t.storemate.howTitle}
            </h3>
            <ol className="mt-6 space-y-5">
              {t.storemate.steps.map((s, i) => (
                <li key={s.label} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-teal font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-semibold">{s.label}</div>
                    <p className="mt-1 text-sm text-ink-soft">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {t.approach.title}
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.approach.steps.map((a, i) => (
            <article key={a.title} className="border-t border-ink/15 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                0{i + 1}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {a.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="border-y border-line bg-mist-elevated">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              {t.about.title}
            </h2>
            <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-ink">
              {t.about.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <aside className="border border-line bg-white/70 p-6 lg:col-span-5">
            <h3 className="font-display text-lg font-semibold">
              {t.about.techTitle}
            </h3>
            <dl className="mt-5 space-y-4 text-sm">
              {t.about.tech.map((row) => (
                <div key={row.label}>
                  <dt className="font-semibold text-ink">{row.label}</dt>
                  <dd className="mt-1 text-ink-soft">{row.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {t.contact.title}
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft">{t.contact.sub}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="border border-line bg-teal-soft/35 p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold">
              {t.contact.getInTouch}
            </h3>
            <ul className="mt-6 space-y-4 text-sm">
              {hasPhone && (
                <li>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="group flex items-center gap-3 font-medium text-ink hover:text-teal-deep"
                  >
                    <Phone className="h-4 w-4 text-teal" />
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-muted">
                        {t.contact.callUs}
                      </span>
                      {SITE.phone}
                    </span>
                  </a>
                </li>
              )}
              <li>
                <a
                  href={SITE.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-medium text-ink hover:text-teal-deep"
                >
                  <Calendar className="h-4 w-4 text-teal" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted">
                      Calendly
                    </span>
                    {t.contact.bookCall}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center gap-3 font-medium text-ink hover:text-teal-deep"
                >
                  <Mail className="h-4 w-4 text-teal" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted">
                      {t.contact.emailUs}
                    </span>
                    {SITE.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ink hover:text-teal-deep"
                >
                  <Linkedin className="h-4 w-4 text-teal" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ink hover:text-teal-deep"
                >
                  <Github className="h-4 w-4 text-teal" />
                  GitHub
                </a>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-sm">
                <a href={SITE.calendly} target="_blank" rel="noopener noreferrer">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-sm">
                <a
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent(
                    locale === "el"
                      ? "Ενδιαφέρον από το website"
                      : "Project inquiry from website"
                  )}`}
                >
                  {t.contact.start}
                </a>
              </Button>
            </div>
          </div>

          <div className="border border-line bg-white/60 p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold">
              {t.contact.goodFit}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              {t.contact.fits.map((f) => (
                <li key={f} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-mist/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-content gap-2">
          <Button asChild className="flex-1 rounded-sm">
            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer">
              {t.hero.ctaPrimary}
            </a>
          </Button>
          {hasPhone ? (
            <Button asChild variant="outline" className="rounded-sm">
              <a href={`tel:${SITE.phone}`} aria-label={t.contact.callUs}>
                <Phone className="h-4 w-4" />
              </a>
            </Button>
          ) : (
            <Button asChild variant="outline" className="rounded-sm">
              <a href={`mailto:${SITE.email}`} aria-label={t.contact.emailUs}>
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      <footer className="border-t border-line pb-24 pt-8 text-sm text-muted md:pb-8">
        <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-3 px-4 sm:px-6 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Gradient Logic. {t.footer.rights}
          </p>
          <p>{t.footer.serving}</p>
        </div>
      </footer>
    </div>
  );
}
