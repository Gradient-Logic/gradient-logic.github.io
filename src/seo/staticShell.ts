import { SITE, copy } from "../content";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * EN homepage markup placed inside #root at build time so crawlers
 * that skip JS still see real content and links. React replaces this on mount.
 */
export function buildStaticShell(): string {
  const t = copy.en;
  const year = new Date().getFullYear();

  const bring = t.bring.items.map((item) => `<li>${esc(item)}</li>`).join("");
  const services = t.services.items
    .map(
      (s) => `
      <article>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.desc)}</p>
        <ul>${s.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      </article>`
    )
    .join("");
  const previousClean = t.work.previous
    .map(
      (p) =>
        `<li><strong>${esc(p.title)}</strong>: ${esc(p.desc)}</li>`
    )
    .join("");

  const features = t.storemate.features
    .map(
      (f) =>
        `<article><h3>${esc(f.title)}</h3><p>${esc(f.desc)}</p></article>`
    )
    .join("");
  const steps = t.storemate.steps
    .map(
      (s) =>
        `<li><strong>${esc(s.label)}</strong>: ${esc(s.desc)}</li>`
    )
    .join("");
  const approach = t.approach.steps
    .map(
      (s) =>
        `<li><strong>${esc(s.title)}</strong>: ${esc(s.desc)}
        <p><em>${esc(t.approach.outputLabel)}:</em> ${esc(s.output)}</p>
        <ul>${s.focus.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
        </li>`
    )
    .join("");
  const aboutBullets = t.about.bullets
    .map((b) => `<li>${esc(b)}</li>`)
    .join("");
  const fits = t.contact.fits.map((f) => `<li>${esc(f)}</li>`).join("");
  const tech = t.about.tech
    .map(
      (row) =>
        `<li><strong>${esc(row.label)}</strong>: ${esc(row.value)}</li>`
    )
    .join("");

  return `
<a class="skip-link" href="#home">Skip to content</a>
<header>
  <a href="#home">${esc(SITE.name)}</a>
  <nav aria-label="Primary">
    <a href="#services">${esc(t.nav.services)}</a>
    <a href="#work">${esc(t.nav.work)}</a>
    <a href="#storemate">${esc(t.nav.storemate)}</a>
    <a href="#about">${esc(t.nav.about)}</a>
    <a href="#contact">${esc(t.nav.contact)}</a>
  </nav>
  <a href="#contact">${esc(t.nav.cta)}</a>
</header>
<main>
  <section id="home">
    <p>${esc(t.hero.brand)}</p>
    <h1>${esc(t.hero.headline)}</h1>
    <p>${esc(t.hero.sub)}</p>
    <p>
      <a href="${esc(SITE.calendly)}">${esc(t.hero.ctaPrimary)}</a>
      <a href="#storemate">${esc(t.hero.ctaSecondary)}</a>
    </p>
    <p>${esc(t.hero.location)}</p>
  </section>
  <section id="bring">
    <h2>${esc(t.bring.title)}</h2>
    <ul>${bring}</ul>
  </section>
  <section id="services">
    <h2>${esc(t.services.title)}</h2>
    <p>${esc(t.services.sub)}</p>
    ${services}
  </section>
  <section id="work">
    <h2>${esc(t.work.title)}</h2>
    <article>
      <p>${esc(t.work.enterpriseTag)}</p>
      <h3>${esc(t.work.enterpriseTitle)}</h3>
      <p>${esc(t.work.enterpriseDesc)}</p>
    </article>
    <article>
      <p>${esc(t.work.infraTag)}</p>
      <h3>${esc(t.work.infraTitle)}</h3>
      <p>${esc(t.work.infraDesc)}</p>
    </article>
    <article>
      <h3>${esc(t.work.storemateTitle)}</h3>
      <p>${esc(t.work.storemateDesc)}</p>
      <p><a href="#storemate">${esc(t.work.details)}</a></p>
    </article>
    <h3>${esc(t.work.previousTitle)}</h3>
    <ul>${previousClean}</ul>
  </section>
  <section id="storemate">
    <h2>${esc(t.storemate.title)}</h2>
    <p>${esc(t.storemate.sub)}</p>
    ${features}
    <h3>${esc(t.storemate.howTitle)}</h3>
    <ol>${steps}</ol>
    <p><a href="${esc(SITE.calendly)}">${esc(t.storemate.cta)}</a></p>
  </section>
  <section id="approach">
    <h2>${esc(t.approach.title)}</h2>
    <ol>${approach}</ol>
  </section>
  <section id="about">
    <h2>${esc(t.about.title)}</h2>
    <p>${esc(t.about.p1)}</p>
    <p>${esc(t.about.p2)}</p>
    <ul>${aboutBullets}</ul>
    <h3>${esc(t.about.techTitle)}</h3>
    <ul>${tech}</ul>
  </section>
  <section id="contact">
    <h2>${esc(t.contact.title)}</h2>
    <p>${esc(t.contact.sub)}</p>
    <h3>${esc(t.contact.getInTouch)}</h3>
    <ul>
      <li><a href="${esc(SITE.calendly)}">${esc(t.contact.bookCall)}</a></li>
      <li><a href="mailto:${esc(SITE.email)}">${esc(t.contact.emailUs)}: ${esc(SITE.email)}</a></li>
      <li><a href="${esc(SITE.linkedin)}">LinkedIn</a></li>
      <li><a href="${esc(SITE.github)}">GitHub</a></li>
    </ul>
    <h3>${esc(t.contact.goodFit)}</h3>
    <ul>${fits}</ul>
    <p><a href="mailto:${esc(SITE.email)}">${esc(t.contact.start)}</a></p>
  </section>
</main>
<footer>
  <p>© ${year} ${esc(SITE.name)}. ${esc(t.footer.rights)}</p>
  <p>${esc(t.footer.serving)}</p>
</footer>
`.trim();
}
