import { useState } from "react";
import { ApproachPath } from "@/components/ApproachPath";
import { Analytics } from "@/components/Analytics";
import { HeroBackground } from "@/components/HeroBackground";
import { MetricCountUp } from "@/components/MetricCountUp";
import { MotionRoot } from "@/components/MotionRoot";
import { StoreMateSequence } from "@/components/StoreMateSequence";
import { SITE, type Locale } from "@/content";
import { useLocale } from "@/hooks/useLocale";
import { useWebGLOptional, type ViewId } from "@/webgl/WebGLContext";
import { ViewSlot } from "@/webgl/ViewSlot";

export default function App() {
  const { locale, setLocale, t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#storemate", label: t.nav.storemate },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <MotionRoot>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Analytics />
      <header className="site-header">
        <div className="shell site-header__inner">
          <a href="#home" className="brand">
            Gradient <span>Logic</span>
          </a>

          <nav className="nav" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <div className="lang-toggle" role="group" aria-label="Language">
              {(["en", "el"] as Locale[]).map((code) => (
                <button
                  key={code}
                  type="button"
                  aria-pressed={locale === code}
                  onClick={() => setLocale(code)}
                >
                  {code}
                </button>
              ))}
            </div>

            <a href="#contact" className="btn btn--primary header-cta">
              {t.nav.cta}
            </a>

            <button
              type="button"
              className="menu-btn"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        <div className={`mobile-nav${menuOpen ? " is-open" : ""}`}>
          <nav aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              {t.nav.cta}
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero" aria-labelledby="hero-headline">
          <HeroBackground />
          <div className="hero__inner">
            <p className="hero__brand" data-reveal>
              {t.hero.brand}
            </p>
            <div className="hero__copy" data-reveal data-reveal-delay="0.08">
              <h1 id="hero-headline">{t.hero.headline}</h1>
              <p>{t.hero.sub}</p>
              <div className="hero__actions" data-reveal data-reveal-delay="0.16">
                <a
                  className="btn btn--primary btn--lg"
                  href={SITE.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.hero.ctaPrimary} →
                </a>
                <a className="btn btn--ghost btn--lg" href="#storemate">
                  {t.hero.ctaSecondary}
                </a>
              </div>
              <p className="hero__location">{t.hero.location}</p>
            </div>
          </div>
        </section>

        <section
          id="bring"
          className="band section"
          aria-labelledby="bring-title"
        >
          <div className="shell" data-reveal>
            <div className="section-head">
              <p className="eyebrow">/00 · bring</p>
              <h2 id="bring-title">{t.bring.title}</h2>
            </div>
            <ul className="bring-list">
              {t.bring.items.map((item) => (
                <li key={item} className="bring-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="services"
          className="section"
          aria-labelledby="services-title"
        >
          <div className="shell">
            <div className="section-head" data-reveal>
              <p className="eyebrow">/01 · services</p>
              <h2 id="services-title">{t.services.title}</h2>
              <p>{t.services.sub}</p>
            </div>
            <div className="offer-grid">
              {t.services.items.map((s, i) => (
                <OfferCard key={s.title} index={i} title={s.title} desc={s.desc} bullets={s.bullets} />
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="band section" aria-labelledby="work-title">
          <div className="shell">
            <div className="section-head" data-reveal>
              <p className="eyebrow">{t.work.eyebrow}</p>
              <h2 id="work-title">{t.work.title}</h2>
            </div>

            <div className="work-grid">
              <article className="panel panel--signal panel--globe" data-reveal>
                <ViewSlot id="globe" className="globe-slot" />
                <p className="panel__tag">{t.work.enterpriseTag}</p>
                <h3>{t.work.enterpriseTitle}</h3>
                <p>{t.work.enterpriseDesc}</p>
                <dl className="meta-list">
                  <div>
                    <dt>{t.work.role}</dt>
                    <dd>{t.work.roleValue}</dd>
                  </div>
                  <div>
                    <dt>{t.work.scope}</dt>
                    <dd>{t.work.scopeValue}</dd>
                  </div>
                  <div>
                    <dt>{t.work.deliverables}</dt>
                    <dd>{t.work.deliverablesValue}</dd>
                  </div>
                </dl>
              </article>

              <div className="work-side">
                <article
                  className="panel"
                  data-reveal
                  data-reveal-delay="0.06"
                >
                  <div className="row" style={{ justifyContent: "space-between" }}>
                    <h3>{t.work.storemateTitle}</h3>
                    <a className="panel-link" href="#storemate">
                      {t.work.details}
                    </a>
                  </div>
                  <p>{t.work.storemateDesc}</p>
                </article>

                <article
                  className="panel"
                  data-reveal
                  data-reveal-delay="0.08"
                >
                  <h3>{t.work.previousTitle}</h3>
                  <ul className="work-list">
                    {t.work.previous.map((item) => (
                      <li key={item.title}>
                        <strong>{item.title}</strong>
                        <span>
                          {item.desc.includes("60%") ||
                          item.desc.includes("18%") ||
                          item.desc.includes("+18%") ? (
                            <MetricDesc text={item.desc} />
                          ) : (
                            item.desc
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          id="storemate"
          className="section section--storemate"
          aria-labelledby="storemate-title"
        >
          <div className="shell storemate-intro" data-reveal>
            <p className="eyebrow">/02 · product · {t.storemate.badge}</p>
            <h2
              id="storemate-title"
              className="display"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                marginTop: "0.75rem",
              }}
            >
              {t.storemate.title}
            </h2>
            <p
              className="muted"
              style={{ marginTop: "1rem", fontSize: "1.1rem", maxWidth: "36rem" }}
            >
              {t.storemate.sub}
            </p>

            <div className="feature-list feature-list--row">
              {t.storemate.features.map((f) => (
                <div key={f.title}>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2rem" }}>
              <a className="btn btn--primary btn--lg" href="#contact">
                {t.storemate.cta} →
              </a>
            </div>
          </div>

          <StoreMateSequence
            title={t.storemate.howTitle}
            steps={t.storemate.steps}
          />
        </section>

        <section
          id="approach"
          className="band section"
          aria-labelledby="approach-title"
        >
          <div className="shell">
            <ApproachPath approach={t.approach} />
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="shell about-grid">
            <div data-reveal>
              <p className="eyebrow">/04 · about</p>
              <h2
                id="about-title"
                className="display"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", marginTop: "0.75rem" }}
              >
                {t.about.title}
              </h2>
              <div className="about-copy" style={{ marginTop: "1.5rem" }}>
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
              <ul className="bullet-list">
                {t.about.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <aside className="panel" data-reveal data-reveal-delay="0.08">
              <h3>{t.about.techTitle}</h3>
              <dl className="tech-list">
                {t.about.tech.map((row) => (
                  <div key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section
          id="contact"
          className="band section section--contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-stage" aria-hidden="true">
            <ViewSlot id="contact" className="contact-view" />
          </div>
          <div className="shell contact-shell">
            <div className="section-head" data-reveal>
              <p className="eyebrow">/05 · contact</p>
              <h2 id="contact-title">{t.contact.title}</h2>
              <p>{t.contact.sub}</p>
            </div>

            <div className="contact-grid">
              <div className="panel panel--signal" data-reveal>
                <h3>{t.contact.getInTouch}</h3>
                <ul className="contact-links">
                  <li>
                    <a
                      href={SITE.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="label">Calendly</span>
                      <span>{t.contact.bookCall}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${SITE.email}`}>
                      <span className="label">{t.contact.emailUs}</span>
                      <span>{SITE.email}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="label">LinkedIn</span>
                      <span>pavlospolydoras</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="label">GitHub</span>
                      <span>gradient-logic</span>
                    </a>
                  </li>
                </ul>

                <div className="row" style={{ marginTop: "2rem" }}>
                  <a
                    className="btn btn--primary"
                    href={SITE.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.hero.ctaPrimary} →
                  </a>
                  <a
                    className="btn btn--ghost"
                    href={`mailto:${SITE.email}?subject=${encodeURIComponent(
                      locale === "el"
                        ? "Ενδιαφέρον από το website"
                        : "Project inquiry from website"
                    )}`}
                  >
                    {t.contact.start}
                  </a>
                </div>
              </div>

              <div className="panel" data-reveal data-reveal-delay="0.08">
                <h3>{t.contact.goodFit}</h3>
                <ul className="fit-list">
                  {t.contact.fits.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="mobile-cta">
        <a
          className="btn btn--primary"
          href={SITE.calendly}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.hero.ctaPrimary}
        </a>
        <a
          className="btn btn--ghost btn--icon"
          href={`mailto:${SITE.email}`}
          aria-label={t.contact.emailUs}
        >
          ✉
        </a>
      </div>

      <footer className="site-footer">
        <div className="shell site-footer__inner">
          <p>
            © {new Date().getFullYear()} Gradient Logic. {t.footer.rights}
          </p>
          <p>{t.footer.serving}</p>
        </div>
      </footer>
    </MotionRoot>
  );
}

function OfferCard({
  index,
  title,
  desc,
  bullets,
}: {
  index: number;
  title: string;
  desc: string;
  bullets: readonly string[];
}) {
  const ctx = useWebGLOptional();
  const glyphId = `glyph-${index}` as ViewId;

  return (
    <article
      className="offer-card"
      data-reveal
      data-reveal-delay={(index * 0.06).toFixed(2)}
      onMouseEnter={() => ctx?.setHoveredGlyph(index)}
      onMouseLeave={() => ctx?.setHoveredGlyph(null)}
      onFocus={() => ctx?.setHoveredGlyph(index)}
      onBlur={() => ctx?.setHoveredGlyph(null)}
    >
      <ViewSlot id={glyphId} className="offer-glyph" />
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

function MetricDesc({ text }: { text: string }) {
  // Split around percentage metrics so they can count up
  const parts = text.split(/(\+?\d+%)/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^(\+)?(\d+)%$/);
        if (m) {
          return (
            <MetricCountUp
              key={i}
              value={Number(m[2])}
              prefix={m[1] ?? ""}
              suffix="%"
            />
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
