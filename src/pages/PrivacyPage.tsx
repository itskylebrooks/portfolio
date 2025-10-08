import React from 'react'

export function PrivacyPage() {
  return (
    <main className="mx-auto max-w-[820px] px-4 py-20">
      <h1 className="text-white text-2xl">Datenschutzerklärung</h1>
      <p className="mt-2 text-white/80 italic">(zentral für Hauptseite & alle verlinkten Projekte)</p>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">Verantwortlicher (Art. 4 Nr. 7 DSGVO)</h3>
        <p className="mt-2 text-white/80">Kirill Bobrov (auch: „Kyle Brooks")
          <br />Volksdorfer Grenzweg 139
          <br />22359 Hamburg, Deutschland
          <br />E-Mail: <a href="mailto:itskylebrooks@icloud.com" className="underline hover:text-white">itskylebrooks@icloud.com</a>
        </p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">1) Geltungsbereich</h3>
        <p className="mt-2 text-white/80">Diese Datenschutzerklärung gilt für meine persönliche Website sowie alle von dort verlinkten, öffentlich zugänglichen Projekte und Demos (zusammen „Dienste"), sofern diese im Footer oder in der Projektbeschreibung auf diese Datenschutzerklärung verweisen. Sollte ein einzelnes Projekt zusätzliche Daten verarbeiten (z. B. Nutzerkonten, externe Analysen, Bezahlsysteme), wird dies projektbezogen auf der jeweiligen Seite ergänzend erläutert.</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">2) Arten verarbeiteter Daten / Quellen</h3>
        <p className="mt-2 text-white/80">- <strong>Nutzungs- und Technikdaten:</strong> IP-Adresse, Zeitstempel, angeforderte Ressource/URL, Referrer, Browser, Betriebssystem (Server-Logs).<br />
        - <strong>Kommunikationsdaten:</strong> Inhalte einer E-Mail, Absenderadresse, Metadaten.<br />
        - <strong>Feedbackdaten (nur falls ein Projekt ein Formular anbietet):</strong> Freitext, optional Name/E-Mail; Übermittlung an GitHub (Issues).<br />
        - <strong>Inhalts- und Einbindungsdaten (nur bei eingebetteten Inhalten):</strong> Beim Laden externer Inhalte (z. B. YouTube) fallen technisch notwendige Daten beim jeweiligen Anbieter an.</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">3) Zwecke und Rechtsgrundlagen (Art. 6 Abs. 1 DSGVO)</h3>
        <p className="mt-2 text-white/80">- <strong>Betrieb, Sicherheit, Fehleranalyse</strong> der Dienste (Server-Logs, Cron Jobs): berechtigtes Interesse (Art. 6 Abs. 1 lit. f).<br />
        - <strong>Kommunikation / Support</strong> per E-Mail oder Feedback: Vertrag / Anbahnung (Art. 6 Abs. 1 lit. b) und/oder berechtigtes Interesse (lit. f).<br />
        - <strong>Einbindungen / Komfortfunktionen</strong> (z. B. Videos): je nach Ausgestaltung berechtigtes Interesse (lit. f) oder Einwilligung (lit. a).<br />
        - <strong>Cookies / Tracking</strong> (nur falls künftig genutzt): Einwilligung (Art. 6 Abs. 1 lit. a); Widerruf jederzeit mit Wirkung für die Zukunft.</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">4) Hosting & Server-Logfiles (Vercel)</h3>
        <p className="mt-2 text-white/80">Die Dienste werden bei <strong>Vercel Inc.</strong> gehostet. Beim Aufruf werden automatisch Server-Logdaten verarbeitet (IP-Adresse, Datum/Uhrzeit, angeforderte Datei/URL, Referrer, Browser/OS). Zweck: Bereitstellung, Stabilität, Sicherheit, Missbrauchsabwehr (Art. 6 Abs. 1 lit. f DSGVO). Logdaten werden in der Regel kurzfristig gespeichert und danach gelöscht oder anonymisiert. Vercel speichert Daten in Rechenzentren innerhalb der EU und übermittelt sie nur bei Bedarf in Drittländer.</p>
        <p className="mt-2 text-white/80">Datenschutzhinweise: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer" className="underline hover:text-white">Vercel Privacy Policy</a></p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">5) Geplante Aufgaben (Vercel Cron Jobs)</h3>
        <p className="mt-2 text-white/80">Zur Wartung und Automatisierung rufen Vercel Cron Jobs in definierten Intervallen serverseitige Endpunkte auf. Dabei können technische Logdaten wie IP, Zeitstempel und User-Agent anfallen; personenbezogene Inhalte werden nicht verarbeitet. Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">6) Kontakt per E-Mail</h3>
        <p className="mt-2 text-white/80">Bei Kontaktaufnahme per E-Mail werden die mitgeteilten Daten (Adresse, Inhalte, Metadaten) zur Bearbeitung des Anliegens verarbeitet (Art. 6 Abs. 1 lit. b/f DSGVO). Die Löschung erfolgt nach Abschluss der Kommunikation, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">7) Feedback-Formulare → GitHub Issues (projektabhängig)</h3>
        <p className="mt-2 text-white/80">Wenn ein Projekt ein Feedback-Formular anbietet, werden die eingegebenen Inhalte serverseitig an <strong>GitHub</strong> übermittelt, um ein Issue im jeweiligen Repository zu erstellen.</p>
        <p className="mt-2 text-white/80">- <strong>Empfänger / Verantwortlicher:</strong> GitHub, Inc. / GitHub B.V. (eigenständiger Verantwortlicher).<br />
        - <strong>Sichtbarkeit:</strong> Bei öffentlichen Repositories sind Issues weltweit einsehbar – bitte keine sensiblen Daten eingeben.<br />
        - <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b (betreffende Anfrage) und lit. f (Qualitätssicherung, Missbrauchsabwehr).<br />
        - <strong>Löschung:</strong> Auf Anfrage lösche oder archiviere ich das Issue; Sicherungen bei GitHub können unabhängig fortbestehen.</p>
        <p className="mt-2 text-white/80">Datenschutzhinweise: <a href="https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noreferrer" className="underline hover:text-white">GitHub Privacy Statement</a></p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">8) Cookies, lokale Speicherung & Analyse</h3>
        <p className="mt-2 text-white/80">Standardmäßig setzen die Dienste <strong>keine Tracking-Cookies</strong> und kein Drittanbieter-Tracking; Schriften und Skripte werden lokal ausgeliefert. Sollten einzelne Projekte künftig Cookies oder ähnliche Technologien verwenden (z. B. Analysefunktionen), informiere ich darüber vorab und hole – soweit erforderlich – Einwilligungen ein.</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">9) Eingebettete Inhalte (z. B. YouTube) & externe Links</h3>
        <p className="mt-2 text-white/80">Einige Seiten können externe Inhalte einbetten (z. B. Videos). Beim Laden solcher Inhalte erhält der jeweilige Anbieter Nutzungsdaten (z. B. IP, User-Agent). Ich versuche, datenschutzfreundliche Einbindungen zu nutzen (z. B. „Zum Laden klicken“). Für verlinkte externe Seiten gilt die dortige Datenschutzerklärung; ich habe keinen Einfluss auf deren Inhalte oder Verarbeitung.</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">10) Empfänger / Kategorien von Empfängern</h3>
        <p className="mt-2 text-white/80">- <strong>Hosting / Operations:</strong> Vercel (Server, Logs, Cron).<br />
        - <strong>Issue-Management (optional, projektabhängig):</strong> GitHub (Issues als Feedbackkanal).<br />
        - <strong>Weitere Empfänger:</strong> nur, wenn im jeweiligen Projekt ausdrücklich benannt.</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">11) Drittlandübermittlungen</h3>
        <p className="mt-2 text-white/80">Vercel und GitHub sind Anbieter mit Sitz in den USA. Bei Verarbeitung oder Übermittlung in Drittländer werden geeignete Garantien (z. B. EU-US Data Privacy Framework, Standardvertragsklauseln oder gleichwertige Instrumente) verwendet. Details finden sich in den Datenschutzhinweisen der jeweiligen Anbieter.</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">12) Speicherdauer</h3>
        <p className="mt-2 text-white/80">Daten werden nur solange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Pflichten dies verlangen. Danach erfolgt Löschung oder Anonymisierung. Beispiele:<br />
        - Server-Logs: kurzfristig, zweckgebunden.<br />
        - E-Mails: bis Abschluss des Vorgangs; ggf. gesetzliche Aufbewahrungsfristen.<br />
        - GitHub-Issues: bis zur Erledigung bzw. auf Anfrage; Sicherungen bei GitHub unabhängig.</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">13) Pflicht zur Bereitstellung / Automatisierte Entscheidungen</h3>
        <p className="mt-2 text-white/80">Es besteht keine gesetzliche Pflicht, personenbezogene Daten bereitzustellen, sofern dies nicht im Einzelfall erforderlich ist (z. B. für eine Antwort). Es werden <strong>keine automatisierten Entscheidungen</strong> im Einzelfall einschließlich Profiling vorgenommen (Art. 22 DSGVO).</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">14) Sicherheit</h3>
        <p className="mt-2 text-white/80">Ich treffe technische und organisatorische Maßnahmen (TOM), um Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen, einschließlich TLS-Verschlüsselung (HTTPS). Absolute Sicherheit kann jedoch nicht garantiert werden.</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">15) Betroffenenrechte (Art. 15–21 DSGVO)</h3>
        <p className="mt-2 text-white/80">Ihnen stehen insbesondere folgende Rechte zu:<br />
        - Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f.<br />
        Zur Ausübung genügt eine formlose E-Mail an: <a href="mailto:itskylebrooks@icloud.com" className="underline hover:text-white">itskylebrooks@icloud.com</a></p>
        <p className="mt-2 text-white/80"><strong>Beschwerderecht:</strong> Sie können sich bei einer Aufsichtsbehörde beschweren, z. B. beim <em>Hamburgischen Beauftragten für Datenschutz und Informationsfreiheit (HmbBfDI)</em>.</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">16) Änderungen dieser Datenschutzerklärung</h3>
        <p className="mt-2 text-white/80">Ich passe diese Erklärung an, wenn Dienste, Rechtslage oder Anbieter sich ändern. Die aktuelle Fassung ist stets hier abrufbar; bei wesentlichen Änderungen informiere ich zusätzlich.</p>
      </section>

      <p className="mt-6 text-white/80"><strong>Stand:</strong> Oktober 2025</p>
    </main>
  )
}

