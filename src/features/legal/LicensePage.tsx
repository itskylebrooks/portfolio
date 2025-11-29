import React, { useState } from 'react'
import { MotionDiv, Page } from '@/shared/components/Page'

export function LicensePage() {
  const [lang, setLang] = useState<'de' | 'en'>('en')

  return (
    <Page className="mx-auto max-w-[820px] px-4 py-20">
      <MotionDiv animateKey={lang}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-[color:var(--color-text-primary)] text-2xl">
              {lang === 'de' ? 'Lizenz' : 'License'}
            </h1>
            <p className="mt-2 text-[color:var(--color-text-secondary)] italic">
              {lang === 'de'
                ? '(zentral für Hauptseite & alle verlinkten Projekte)'
                : '(central for main site & all linked projects)'}
            </p>
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
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">0. Allgemeines</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Diese Seite erklärt, wie meine Software und kreativen Arbeiten genutzt werden dürfen. Sie gilt für meine
                Hauptwebsite sowie für alle Projekte oder Demos, die in ihrem Footer auf diese Seite verlinken. Wenn ein
                konkretes Projekt eine eigene LICENSE-Datei oder besondere Bedingungen enthält, haben diese Vorrang.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Öffentlicher Name: <strong>Kyle Brooks</strong>
                <br />
                Rechtlicher Name (Impressum): <strong>Kirill Bobrov</strong>
                <br />
                („Kyle Brooks“ ist der kreative Name von Kirill Bobrov.)
              </p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">1. Code-Lizenz – MIT</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Sofern in einem Repository nicht ausdrücklich etwas anderes angegeben ist, steht sämtlicher Quellcode in
                meinen Projekten unter der <strong>MIT-Lizenz</strong>.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Praktisch bedeutet das: Du darfst den Code verwenden, kopieren, verändern, zusammenführen, veröffentlichen,
                verbreiten, unterlizenzieren und verkaufen, solange der ursprüngliche Copyright- und Lizenzhinweis im Code
                oder in der Dokumentation erhalten bleibt.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Der vollständige Rechtstext ist die Standard-MIT-Lizenz.
                <br />
                Link (Englisch):{' '}
                <a
                  href="https://opensource.org/license/mit"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-[color:var(--color-text-primary)]"
                >
                  https://opensource.org/license/mit
                </a>
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Wenn ein Repository eine eigene LICENSE-Datei enthält, ist diese Datei die verbindliche Lizenz für dieses
                Projekt.
              </p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">
                2. Inhaltslizenz – Creative Commons BY-NC 4.0
              </h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Sofern nicht anders vermerkt, stehen alle nicht-codebasierten Inhalte, die von mir erstellt wurden – zum
                Beispiel Texte, Essays, Artikel, Diagramme, selbst erstellte Bilder, Screenshots meiner eigenen Apps und die
                Texte auf dieser Seite – unter der Lizenz{' '}
                <strong>Creative Commons Attribution–NonCommercial 4.0 International (CC BY-NC 4.0)</strong>.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Du darfst diese Inhalte teilen und bearbeiten, solange du eine angemessene Namensnennung vornimmst, Änderungen
                (falls relevant) kenntlich machst und sie nicht ohne meine schriftliche Erlaubnis für kommerzielle Zwecke
                nutzt.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Vollständiger Rechtstext:{' '}
                <a
                  href="https://creativecommons.org/licenses/by-nc/4.0/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-[color:var(--color-text-primary)]"
                >
                  https://creativecommons.org/licenses/by-nc/4.0/
                </a>
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Eine typische Namensnennung könnte so aussehen:
                <br />
                „Text (oder Diagramm) von Kyle Brooks (Kirill Bobrov) — CC BY-NC 4.0 — Quelle: URL“
              </p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">
                3. Was nicht unter CC BY-NC fällt
              </h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Folgendes ist nicht durch die Creative-Commons-Lizenz abgedeckt, sofern nicht ausdrücklich anders angegeben:
              </p>
              <ul className="mt-2 text-[color:var(--color-text-secondary)] list-disc ml-6">
                <li>
                  Logos, Wortmarken und andere visuelle Marken-Elemente (meine oder die Dritter). Es werden keine Marken- oder
                  Kennzeichenrechte übertragen.
                </li>
                <li>
                  Drittanbieter-Assets wie Schriftarten, Icons, Fotos, Illustrationen und Bibliotheken. Sie unterliegen
                  weiterhin ihren eigenen Lizenzen.
                </li>
                <li>
                  Eingebettete Inhalte Dritter (zum Beispiel YouTube-Videos). Diese verbleiben unter den Bedingungen des
                  jeweiligen Anbieters oder Urhebers.
                </li>
                <li>
                  Namen, Abbildungen oder personenbezogene Daten von Personen. Persönlichkeitsrechte bleiben unberührt.
                </li>
              </ul>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Für kommerzielle Nutzung meiner Texte, Diagramme, Screenshots oder anderer von mir erstellter Inhalte
                kontaktiere mich bitte unter:{' '}
                <a
                  href="mailto:desk@itskylebrooks.tech"
                  className="underline hover:text-[color:var(--color-text-primary)]"
                >
                  desk@itskylebrooks.tech
                </a>
              </p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">4. Komponenten Dritter</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Einige Projekte verwenden Bibliotheken, Schriftarten, Icons oder andere Komponenten von Drittanbietern. Deren
                Lizenzen bleiben vollständig in Kraft und können eine gesonderte Kennzeichnung erfordern.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Wo möglich, sammle ich diese Hinweise in einer NOTICE- oder Credits-Datei im Repository oder auf der
                Projektseite. Wenn du ein Build weiterverbreitest, das solche Komponenten enthält, bist du dafür verantwortlich,
                alle erforderlichen Lizenz- und Copyright-Hinweise beizubehalten.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Wenn dir eine fehlende oder fehlerhafte Kennzeichnung auffällt, melde dich gern bei mir, damit ich sie
                korrigieren kann.
              </p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">5. Marken und Projektnamen</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Alle Marken, Dienstleistungsmarken und Handelsnamen verbleiben im Eigentum ihrer jeweiligen Inhaber.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Insbesondere darfst du meine Projektnamen (zum Beispiel „Ritus“, „Enso“), mein Logo, meine visuelle Identität
                oder den Namen „Kyle Brooks“ nicht so verwenden, dass der Eindruck entsteht, dein Fork oder Produkt sei die
                Originalversion oder offiziell von mir unterstützt – außer du hast meine ausdrückliche schriftliche Erlaubnis.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Die MIT-Lizenz gilt für den Code, nicht für die Marke.
              </p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">6. Fragen und Genehmigungen</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Für kommerzielle Nutzung, Sondergenehmigungen oder Lizenzfragen erreichst du mich unter:{' '}
                <a
                  href="mailto:desk@itskylebrooks.tech"
                  className="underline hover:text-[color:var(--color-text-primary)]"
                >
                  desk@itskylebrooks.tech
                </a>
              </p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">7. Rechtlicher Hinweis</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Diese Seite dient der Transparenz und Orientierung. Sie ersetzt nicht die vollständigen Texte der
                referenzierten Lizenzen und verzichtet nicht auf Rechte, die hier nicht ausdrücklich eingeräumt werden. Wo
                Übersetzungen existieren, ist die englische Version dieser Lizenzseite die maßgebliche Fassung.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                <strong>Zuletzt aktualisiert:</strong> Oktober 2025.
              </p>
            </section>
          </>
        ) : (
          <>
            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">0. General</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                This page explains how my software and creative work may be used. It applies to my main website and to all
                projects or demos that link to this page in their footer. If a specific project contains its own LICENSE file
                or special terms, those terms take precedence.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Public name: <strong>Kyle Brooks</strong>
                <br />
                Legal name (Impressum): <strong>Kirill Bobrov</strong>
                <br />
                (“Kyle Brooks” is the creative name of Kirill Bobrov.)
              </p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">1. Code License – MIT</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Unless explicitly stated otherwise in a repository, all source code in my projects is licensed under the{' '}
                <strong>MIT License</strong>.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                In practical terms: you may use, copy, modify, merge, publish, distribute, sublicense and sell copies of the
                code, as long as the original copyright and license notice remain in the code or in the documentation.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                The full legal text is the standard MIT License.
                <br />
                Link (English):{' '}
                <a
                  href="https://opensource.org/license/mit"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-[color:var(--color-text-primary)]"
                >
                  https://opensource.org/license/mit
                </a>
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                If a repository includes its own LICENSE file, that file is the binding license for that project.
              </p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">
                2. Content License – Creative Commons BY-NC 4.0
              </h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Unless otherwise noted, all non-code content created by me – for example texts, essays, articles, diagrams,
                self-made images, screenshots of my own apps and the copy on this site – is licensed under{' '}
                <strong>Creative Commons Attribution–NonCommercial 4.0 International (CC BY-NC 4.0)</strong>.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                You may share and adapt this content as long as you give proper credit, indicate changes where relevant and do
                not use it for commercial purposes without my written permission.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Full legal text:{' '}
                <a
                  href="https://creativecommons.org/licenses/by-nc/4.0/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-[color:var(--color-text-primary)]"
                >
                  https://creativecommons.org/licenses/by-nc/4.0/
                </a>
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                A typical attribution could look like this:
                <br />
                “Text (or diagram) by Kyle Brooks (Kirill Bobrov) — CC BY-NC 4.0 — source: URL”
              </p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">
                3. What is not covered by CC BY-NC
              </h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                The following are not covered by the Creative Commons license unless explicitly stated otherwise:
              </p>
              <ul className="mt-2 text-[color:var(--color-text-secondary)] list-disc ml-6">
                <li>
                  Logos, wordmarks and other visual brand elements (mine or third parties). No trademark or brand rights are
                  granted.
                </li>
                <li>
                  Third-party assets such as fonts, icons, photos, illustrations and libraries. They remain under their own
                  licenses.
                </li>
                <li>
                  Embedded third-party media (for example YouTube videos). These remain under the terms of the original
                  provider or author.
                </li>
                <li>
                  Names, likenesses or personal data of individuals. Personality rights remain unaffected.
                </li>
              </ul>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                For commercial use of my texts, diagrams, screenshots or other content created by me, please contact:{' '}
                <a
                  href="mailto:itskylebrooks@icloud.com"
                  className="underline hover:text-[color:var(--color-text-primary)]"
                >
                  itskylebrooks@icloud.com
                </a>
              </p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">4. Third-party components</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Some projects use third-party libraries, fonts, icons or other components. Their licenses remain fully in force
                and may require separate attribution.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                Where possible, I collect these notices in a NOTICE or Credits file in the repository or on the project page.
                If you redistribute a build that includes such components, you are responsible for keeping all required license
                and copyright
                notices.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                If you find a missing or incorrect attribution, feel free to contact me so I can fix it.
              </p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">
                5. Trademarks and project names
              </h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                All trademarks, service marks and trade names remain the property of their respective owners.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                In particular, you may not use my project names (for example “Ritus”, “Enso”), my logo, my visual identity or
                the name “Kyle Brooks” in a way that suggests your fork or product is the original or officially endorsed
                version, unless you have my explicit written permission.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                MIT applies to the code, not to the brand.
              </p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">
                6. Questions and permissions
              </h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                For commercial use, special permissions or licensing questions, you can reach me at:{' '}
                <a
                  href="mailto:desk@itskylebrooks.tech"
                  className="underline hover:text-[color:var(--color-text-primary)]"
                >
                  desk@itskylebrooks.tech
                </a>
              </p>
            </section>

            <hr className="my-6 border-[color:var(--color-border-muted)]" />

            <section>
              <h3 className="text-[color:var(--color-text-primary)] text-lg font-semibold">7. Legal note</h3>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                This page is for transparency and orientation. It does not replace the full texts of the referenced licenses
                and does not waive any rights that are not expressly granted here. Where translations exist, the English
                version of this license page is the controlling version.
              </p>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">
                <strong>Last updated:</strong> October 2025.
              </p>
            </section>
          </>
        )}
      </MotionDiv>
    </Page>
  )
}
