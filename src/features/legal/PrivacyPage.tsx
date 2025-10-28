import React, { useState } from 'react'
import { MotionDiv, Page } from '@/shared/components/Page'

export function PrivacyPage() {
  const [lang, setLang] = useState<'de' | 'en'>('en')
  return (
    <Page className="mx-auto max-w-[820px] px-4 py-20">
      <MotionDiv animateKey={lang}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-[color:var(--color-text-primary)] text-2xl">{lang === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}</h1>
            <p className="mt-2 text-[color:var(--color-text-secondary)] italic">{lang === 'de' ? '(zentral für Hauptseite & alle verlinkten Projekte)' : '(central for main website & all linked projects)'}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang('de')}
              className={`inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-[color:var(--color-border-muted)] transition font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-ring-offset)] ${lang === 'de' ? 'bg-[color:var(--color-surface-active)] text-[color:var(--color-text-primary)]' : 'text-[color:var(--color-text-secondary)] bg-transparent'}`}
            >
              DE
            </button>
            <button
              onClick={() => setLang('en')}
              className={`inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-[color:var(--color-border-muted)] transition font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-ring-offset)] ${lang === 'en' ? 'bg-[color:var(--color-surface-active)] text-[color:var(--color-text-primary)]' : 'text-[color:var(--color-text-secondary)] bg-transparent'}`}
            >
              EN
            </button>
          </div>
        </div>

        <hr className="my-6 border-[color:var(--color-border-muted)]" />

        {lang === 'de' ? (
          <>
            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">Verantwortlicher (Art. 4 Nr. 7 DSGVO)</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Kirill Bobrov (auch: „Kyle Brooks")
                <br />Volksdorfer Grenzweg 139
                <br />22359 Hamburg, Deutschland
                <br />E-Mail: <a href="mailto:itskylebrooks@icloud.com" className="underline hover:text-[color:var(--color-text-primary)]">itskylebrooks@icloud.com</a>
              </p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">1) Geltungsbereich</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Diese Datenschutzerklärung gilt für meine persönliche Website sowie alle von dort verlinkten, öffentlich zugänglichen Projekte und Demos (zusammen „Dienste'), sofern diese im Footer oder in der Projektbeschreibung auf diese Datenschutzerklärung verweisen. Sollte ein einzelnes Projekt zusätzliche Daten verarbeiten (z. B. Nutzerkonten, externe Analysen, Bezahlsysteme), wird dies projektbezogen auf der jeweiligen Seite ergänzend erläutert.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">2) Arten verarbeiteter Daten / Quellen</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">- <strong>Nutzungs- und Technikdaten:</strong> IP-Adresse, Zeitstempel, angeforderte Ressource/URL, Referrer, Browser, Betriebssystem (Server-Logs).<br />
              - <strong>Kommunikationsdaten:</strong> Inhalte einer E-Mail, Absenderadresse, Metadaten.<br />
              - <strong>Feedbackdaten (nur falls ein Projekt ein Formular anbietet):</strong> Freitext, optional Name/E-Mail; Übermittlung an GitHub (Issues).<br />
              - <strong>Inhalts- und Einbindungsdaten (nur bei eingebetteten Inhalten):</strong> Beim Laden externer Inhalte (z. B. YouTube) fallen technisch notwendige Daten beim jeweiligen Anbieter an.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">3) Zwecke und Rechtsgrundlagen (Art. 6 Abs. 1 DSGVO)</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">- <strong>Betrieb, Sicherheit, Fehleranalyse</strong> der Dienste (Server-Logs, Cron Jobs): berechtigtes Interesse (Art. 6 Abs. 1 lit. f).<br />
              - <strong>Kommunikation / Support</strong> per E-Mail oder Feedback: Vertrag / Anbahnung (Art. 6 Abs. 1 lit. b) und/oder berechtigtes Interesse (lit. f).<br />
              - <strong>Einbindungen / Komfortfunktionen</strong> (z. B. Videos): je nach Ausgestaltung berechtigtes Interesse (lit. f) oder Einwilligung (lit. a).<br />
              - <strong>Cookies / Tracking</strong> (nur falls künftig genutzt): Einwilligung (Art. 6 Abs. 1 lit. a); Widerruf jederzeit mit Wirkung für die Zukunft.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">4) Hosting & Server-Logfiles (Vercel)</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Die Dienste werden bei <strong>Vercel Inc.</strong> gehostet. Beim Aufruf werden automatisch Server-Logdaten verarbeitet (IP-Adresse, Datum/Uhrzeit, angeforderte Datei/URL, Referrer, Browser/OS). Zweck: Bereitstellung, Stabilität, Sicherheit, Missbrauchsabwehr (Art. 6 Abs. 1 lit. f DSGVO). Logdaten werden in der Regel kurzfristig gespeichert und danach gelöscht oder anonymisiert. Vercel speichert Daten in Rechenzentren innerhalb der EU und übermittelt sie nur bei Bedarf in Drittländer.</p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Datenschutzhinweise: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer" className="underline hover:text-[color:var(--color-text-primary)]">Vercel Privacy Policy</a></p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">5) Geplante Aufgaben (Vercel Cron Jobs)</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Zur Wartung und Automatisierung rufen Vercel Cron Jobs in definierten Intervallen serverseitige Endpunkte auf. Dabei können technische Logdaten wie IP, Zeitstempel und User-Agent anfallen; personenbezogene Inhalte werden nicht verarbeitet. Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">6) Kontakt per E-Mail</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Bei Kontaktaufnahme per E-Mail werden die mitgeteilten Daten (Adresse, Inhalte, Metadaten) zur Bearbeitung des Anliegens verarbeitet (Art. 6 Abs. 1 lit. b/f DSGVO). Die Löschung erfolgt nach Abschluss der Kommunikation, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">7) Feedback-Formulare → GitHub Issues (projektabhängig)</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Wenn ein Projekt ein Feedback-Formular anbietet, werden die eingegebenen Inhalte serverseitig an <strong>GitHub</strong> übermittelt, um ein Issue im jeweiligen Repository zu erstellen.</p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">- <strong>Empfänger / Verantwortlicher:</strong> GitHub, Inc. / GitHub B.V. (eigenständiger Verantwortlicher).<br />
              - <strong>Sichtbarkeit:</strong> Bei öffentlichen Repositories sind Issues weltweit einsehbar – bitte keine sensiblen Daten eingeben.<br />
              - <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b (betreffende Anfrage) und lit. f (Qualitätssicherung, Missbrauchsabwehr).<br />
              - <strong>Löschung:</strong> Auf Anfrage lösche oder archiviere ich das Issue; Sicherungen bei GitHub können unabhängig fortbestehen.</p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Datenschutzhinweise: <a href="https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noreferrer" className="underline hover:text-[color:var(--color-text-primary)]">GitHub Privacy Statement</a></p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">8) Cookies, lokale Speicherung & Analyse</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Standardmäßig setzen die Dienste <strong>keine Tracking-Cookies</strong> und kein Drittanbieter-Tracking; Schriften und Skripte werden lokal ausgeliefert. Sollten einzelne Projekte künftig Cookies oder ähnliche Technologien verwenden (z. B. Analysefunktionen), informiere ich darüber vorab und hole – soweit erforderlich – Einwilligungen ein.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">9) Eingebettete Inhalte (z. B. YouTube) & externe Links</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Einige Seiten können externe Inhalte einbetten (z. B. Videos). Beim Laden solcher Inhalte erhält der jeweilige Anbieter Nutzungsdaten (z. B. IP, User-Agent). Ich versuche, datenschutzfreundliche Einbindungen zu nutzen (z. B. „Zum Laden klicken“). Für verlinkte externe Seiten gilt die dortige Datenschutzerklärung; ich habe keinen Einfluss auf deren Inhalte oder Verarbeitung.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">10) Empfänger / Kategorien von Empfängern</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">- <strong>Hosting / Operations:</strong> Vercel (Server, Logs, Cron).<br />
              - <strong>Issue-Management (optional, projektabhängig):</strong> GitHub (Issues als Feedbackkanal).<br />
              - <strong>Weitere Empfänger:</strong> nur, wenn im jeweiligen Projekt ausdrücklich benannt.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">11) Drittlandübermittlungen</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Vercel und GitHub sind Anbieter mit Sitz in den USA. Bei Verarbeitung oder Übermittlung in Drittländer werden geeignete Garantien (z. B. EU-US Data Privacy Framework, Standardvertragsklauseln oder gleichwertige Instrumente) verwendet. Details finden sich in den Datenschutzhinweisen der jeweiligen Anbieter.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">12) Speicherdauer</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Daten werden nur solange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Pflichten dies verlangen. Danach erfolgt Löschung oder Anonymisierung. Beispiele:<br />
              - Server-Logs: kurzfristig, zweckgebunden.<br />
              - E-Mails: bis Abschluss des Vorgangs; ggf. gesetzliche Aufbewahrungsfristen.<br />
              - GitHub-Issues: bis zur Erledigung bzw. auf Anfrage; Sicherungen bei GitHub unabhängig.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">13) Pflicht zur Bereitstellung / Automatisierte Entscheidungen</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Es besteht keine gesetzliche Pflicht, personenbezogene Daten bereitzustellen, sofern dies nicht im Einzelfall erforderlich ist (z. B. für eine Antwort). Es werden <strong>keine automatisierten Entscheidungen</strong> im Einzelfall einschließlich Profiling vorgenommen (Art. 22 DSGVO).</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">14) Sicherheit</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Ich treffe technische und organisatorische Maßnahmen (TOM), um Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen, einschließlich TLS-Verschlüsselung (HTTPS). Absolute Sicherheit kann jedoch nicht garantiert werden.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">15) Betroffenenrechte (Art. 15–21 DSGVO)</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Ihnen stehen insbesondere folgende Rechte zu:<br />
              - Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f.<br />
              Zur Ausübung genügt eine formlose E-Mail an: <a href="mailto:itskylebrooks@icloud.com" className="underline hover:text-[color:var(--color-text-primary)]">itskylebrooks@icloud.com</a></p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]"><strong>Beschwerderecht:</strong> Sie können sich bei einer Aufsichtsbehörde beschweren, z. B. beim <em>Hamburgischen Beauftragten für Datenschutz und Informationsfreiheit (HmbBfDI)</em>.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">16) Änderungen dieser Datenschutzerklärung</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Ich passe diese Erklärung an, wenn Dienste, Rechtslage oder Anbieter sich ändern. Die aktuelle Fassung ist stets hier abrufbar; bei wesentlichen Änderungen informiere ich zusätzlich.</p>
            </section>

            <p className="mt-6 text-[color:var(--color-text-secondary)]"><strong>Stand:</strong> Oktober 2025</p>
          </>
        ) : (
          <>
            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">Controller (Art. 4 No. 7 GDPR)</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Kirill Bobrov (also: “Kyle Brooks”)
                <br />Volksdorfer Grenzweg 139
                <br />22359 Hamburg, Germany
                <br />Email: <a href="mailto:itskylebrooks@icloud.com" className="underline hover:text-[color:var(--color-text-primary)]">itskylebrooks@icloud.com</a>
              </p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">1) Scope</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">This privacy policy applies to my personal website as well as to all publicly accessible projects and demos linked from it (collectively referred to as “Services”), provided these projects reference this policy in their footer or description. If an individual project processes additional data (e.g. user accounts, analytics, payment systems), it will be specifically explained on that project’s page.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">2) Types of Data Processed / Sources</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">- <strong>Usage and technical data:</strong> IP address, timestamp, requested resource/URL, referrer, browser, operating system (server logs).<br />
              - <strong>Communication data:</strong> contents of an email, sender address, metadata.<br />
              - <strong>Feedback data (only if a project provides a form):</strong> free text, optional name/email; transmitted to GitHub (issues).<br />
              - <strong>Content and embedding data (only for embedded content):</strong> when loading external content (e.g. YouTube), technically required data is transmitted to the respective provider.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">3) Purposes and Legal Bases (Art. 6(1) GDPR)</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">- <strong>Operation, security, and error analysis</strong> of the services (server logs, cron jobs): legitimate interest (Art. 6(1)(f)).<br />
              - <strong>Communication / support</strong> by email or feedback: contract / initiation (Art. 6(1)(b)) and/or legitimate interest (Art. 6(1)(f)).<br />
              - <strong>Embeddings / convenience functions</strong> (e.g. videos): depending on configuration, legitimate interest (Art. 6(1)(f)) or consent (Art. 6(1)(a)).<br />
              - <strong>Cookies / tracking</strong> (if used in the future): consent (Art. 6(1)(a)); revocable at any time with effect for the future.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">4) Hosting & Server Log Files (Vercel)</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">The services are hosted by <strong>Vercel Inc.</strong> When accessed, server log data is automatically processed (IP address, date/time, requested file/URL, referrer, browser/OS). Purpose: service delivery, stability, security, and prevention of misuse (Art. 6(1)(f) GDPR). Log data is generally stored only briefly and then deleted or anonymized. Vercel stores data in EU data centers and only transfers data to third countries when necessary.</p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Privacy policy: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer" className="underline hover:text-[color:var(--color-text-primary)]">Vercel Privacy Policy</a></p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">5) Scheduled Tasks (Vercel Cron Jobs)</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">For maintenance and automation, Vercel Cron Jobs call server-side endpoints at defined intervals. Technical log data such as IP, timestamp, and user-agent may be recorded; personal content is not processed. Legal basis: legitimate interest (Art. 6(1)(f) GDPR).</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">6) Contact by Email</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">When contacting me by email, the provided data (address, content, metadata) is processed to handle your inquiry (Art. 6(1)(b/f) GDPR). The data will be deleted after the communication is completed unless legal retention obligations require otherwise.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">7) Feedback Forms → GitHub Issues (project-dependent)</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">If a project provides a feedback form, the entered data is transmitted server-side to <strong>GitHub</strong> to create an issue in the respective repository.</p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">- <strong>Recipient / controller:</strong> GitHub, Inc. / GitHub B.V. (independent controller).<br />
              - <strong>Visibility:</strong> Issues in public repositories are visible worldwide – please do not include sensitive data.<br />
              - <strong>Legal basis:</strong> Art. 6(1)(b) (handling of request) and Art. 6(1)(f) (quality assurance, prevention of misuse).<br />
              - <strong>Deletion:</strong> Upon request, I delete or archive the issue; GitHub backups may persist independently.</p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Privacy policy: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noreferrer" className="underline hover:text-[color:var(--color-text-primary)]">GitHub Privacy Statement</a></p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">8) Cookies, Local Storage & Analytics</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">By default, the services <strong>do not use tracking cookies</strong> or any third-party tracking; fonts and scripts are served locally. If individual projects later use cookies or similar technologies (e.g. analytics), I will inform users in advance and obtain consent where required.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">9) Embedded Content (e.g. YouTube) & External Links</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Some pages may embed external content (e.g. videos). When loading such content, the provider receives usage data (e.g. IP, user agent). I strive to use privacy-friendly embedding methods (e.g. “Click to Load”). For external links, the respective site’s privacy policy applies; I have no influence over their content or data handling.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">10) Recipients / Categories of Recipients</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">- <strong>Hosting / operations:</strong> Vercel (servers, logs, cron).<br />
              - <strong>Issue management (optional, project-dependent):</strong> GitHub (issues as feedback channel).<br />
              - <strong>Other recipients:</strong> only if explicitly named in a specific project.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">11) Data Transfers to Third Countries</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Vercel and GitHub are providers based in the USA. When data is processed or transferred to third countries, appropriate safeguards are used (e.g. EU–US Data Privacy Framework, Standard Contractual Clauses, or equivalent mechanisms). Details can be found in the providers’ privacy policies.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">12) Storage Duration</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Data is stored only as long as necessary for the respective purposes or as required by law. Afterwards, data is deleted or anonymized. Examples:<br />
              - Server logs: short-term, purpose-bound.<br />
              - Emails: until the request is resolved; subject to statutory retention periods.<br />
              - GitHub issues: until resolved or upon request; GitHub backups remain independent.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">13) Obligation to Provide Data / Automated Decisions</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">There is no legal obligation to provide personal data unless necessary in a specific case (e.g. to respond). No <strong>automated decision-making</strong> including profiling takes place (Art. 22 GDPR).</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">14) Security</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">I implement technical and organizational measures (TOMs) to protect data from loss, misuse, and unauthorized access, including TLS encryption (HTTPS). However, absolute security cannot be guaranteed.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">15) Data Subject Rights (Art. 15–21 GDPR)</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">You have, in particular, the following rights:<br />
              - Access, rectification, erasure, restriction, data portability, and objection to processing based on Art. 6(1)(f).<br />
              To exercise these rights, simply send an informal email to: <a href="mailto:itskylebrooks@icloud.com" className="underline hover:text-[color:var(--color-text-primary)]">itskylebrooks@icloud.com</a></p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]"><strong>Right to lodge a complaint:</strong><br />You may contact a supervisory authority, for example, the <em>Hamburg Commissioner for Data Protection and Freedom of Information (HmbBfDI).</em></p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">16) Changes to this Privacy Policy</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">I update this policy when services, legal requirements, or providers change. The current version is always available here; in case of significant changes, I will provide additional notice.</p>
            </section>

            <p className="mt-6 text-[color:var(--color-text-secondary)]"><strong>Last updated:</strong> October 2025</p>
          </>
        )}
      </MotionDiv>
    </Page>
  )
}
