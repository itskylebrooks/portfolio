import React, { useState } from 'react'
import { MotionDiv, Page } from '@/shared/components/Page'

export function ImprintPage() {
  const [lang, setLang] = useState<'de' | 'en'>('en')
  return (
    <Page className="mx-auto max-w-[820px] px-4 py-20">
      <MotionDiv animateKey={lang}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-[color:var(--color-text-primary)] text-2xl">{lang === 'de' ? 'Impressum' : 'Imprint'}</h1>
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
            <section className="mt-6">
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">Angaben gemäß § 5 DDG</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Kirill Bobrov
              <br />Volksdorfer Grenzweg 139
              <br />22359 Hamburg
              <br />Deutschland
              <br />(auch auftretend unter dem Namen „Kyle Brooks")
              </p>
            </section>

            <section className="mt-6">
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">Kontakt</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">E-Mail: <a href="mailto:itskylebrooks@icloud.com" className="underline hover:text-[color:var(--color-text-primary)]">itskylebrooks@icloud.com</a>
              </p>
            </section>

            <section className="mt-6">
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">Verantwortlich im Sinne des § 18 Abs. 2 MStV</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Kirill Bobrov, Volksdorfer Grenzweg 139, 22359 Hamburg</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">Geltungsbereich</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Dieses Impressum gilt für diesen Webauftritt sowie alle von mir betriebenen, öffentlich erreichbaren Projekte, Demos und Sub-Sites, insbesondere die von meiner Portfolio-Seite verlinkten Angebote sowie weitere von mir kontrollierte Domains/Subdomains und Vercel-Deployments, sofern von dort auf dieses Impressum verlinkt wird.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">Umsatzsteuer-Identifikationsnummer</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Nicht vorhanden.</p>

              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold mt-4">Handelsregister / Vereinsregister</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Nicht eingetragen / nicht zutreffend.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">Haftung für Inhalte</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Als Diensteanbieter bin ich nach den allgemeinen Gesetzen für eigene Inhalte verantwortlich. Nach §§ 7 ff. DDG besteht jedoch keine Pflicht, übermittelte oder gespeicherte fremde Informationen ständig zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>

              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold mt-4">Haftung für Links</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Externe Links wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße geprüft. Für Inhalte externer Seiten ist ausschließlich der jeweilige Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden entsprechende Links umgehend entfernt.</p>

              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold mt-4">Urheberrecht / Lizenzen</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Die durch den Seitenbetreiber erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Inhalte, die unter Creative-Commons- oder Open-Source-Lizenzen bereitgestellt werden, sind entsprechend gekennzeichnet — siehe <a href="/license" className="underline hover:text-[color:var(--color-text-primary)]">Lizenz</a>.</p>

              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold mt-4">Datenschutz</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Informationen zur Verarbeitung personenbezogener Daten, Rechtsgrundlagen und Betroffenenrechten finden Sie in der Datenschutzerklärung unter <a href="/privacy" className="underline hover:text-[color:var(--color-text-primary)]">Datenschutzerklärung</a>.</p>

              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold mt-4">Verbraucherstreitbeilegung</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Ich bin nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen und nehme daran nicht teil. Anfragen richten Sie bitte an: <a href="mailto:itskylebrooks@icloud.com" className="underline hover:text-[color:var(--color-text-primary)]">itskylebrooks@icloud.com</a></p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <p className="text-[color:var(--color-text-secondary)]">Stand: Oktober 2025</p>
            </section>
          </>
        ) : (
          <>
            <section className="mt-6">
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">Information according to § 5 DDG</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Kirill Bobrov
              <br />Volksdorfer Grenzweg 139
              <br />22359 Hamburg
              <br />Germany
              <br />(also appearing under the name “Kyle Brooks”)
              </p>
            </section>

            <section className="mt-6">
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">Contact</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Email: <a href="mailto:itskylebrooks@icloud.com" className="underline hover:text-[color:var(--color-text-primary)]">itskylebrooks@icloud.com</a>
              </p>
            </section>

            <section className="mt-6">
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">Responsible according to § 18 (2) MStV</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Kirill Bobrov, Volksdorfer Grenzweg 139, 22359 Hamburg</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">Scope</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">This imprint applies to this website as well as to all publicly accessible projects, demos, and sub-sites operated by me — in particular, the offerings linked from my portfolio website, as well as other domains, subdomains, and Vercel deployments under my control, provided they link to this imprint.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">VAT Identification Number</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Not available.</p>

              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold mt-4">Commercial / Association Register</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Not registered / not applicable.</p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">Liability for content</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">As a service provider, I am responsible for my own content in accordance with general laws. According to §§ 7 ff. DDG, however, I am not obliged to permanently monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected.</p>

              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold mt-4">Liability for links</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">External links were checked for possible legal violations at the time they were created. The respective provider is solely responsible for the content of linked pages. If I become aware of any legal infringement, I will remove such links immediately.</p>

              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold mt-4">Copyright / Licenses</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">All content and works created by the website operator are subject to German copyright law. Third-party contributions are identified as such. Content provided under Creative Commons or open-source licenses is marked accordingly — see <a href="/license" className="underline hover:text-[color:var(--color-text-primary)]">License</a>.</p>

              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold mt-4">Privacy</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Information on the processing of personal data, legal bases, and the rights of data subjects can be found in the <a href="/privacy" className="underline hover:text-[color:var(--color-text-primary)]">Privacy Policy</a>.</p>

              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold mt-4">Consumer Dispute Resolution</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">I am not obliged to participate in dispute resolution proceedings before a consumer arbitration board and do not participate in such proceedings. For inquiries, please contact: <a href="mailto:desk@itskylebrooks.tech" className="underline hover:text-[color:var(--color-text-primary)]">desk@itskylebrooks.tech</a></p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <p className="text-[color:var(--color-text-secondary)]"><strong>Last updated:</strong> October 2025</p>
            </section>
          </>
        )}
      </MotionDiv>
    </Page>
  )
}
