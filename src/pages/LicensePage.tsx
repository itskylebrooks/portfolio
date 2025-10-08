import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export function LicensePage() {
  const [copied, setCopied] = useState(false)

  const mit = `MIT License

Copyright (c) 2025 Kyle Brooks

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`

  function handleCopy() {
    if (typeof navigator !== 'undefined' && navigator.clipboard && mit) {
      navigator.clipboard.writeText(mit).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
      })
    }
  }

  return (
    <main className="mx-auto max-w-[820px] px-4 py-20">
      <h1 className="text-white text-2xl">Lizenz</h1>
      <p className="mt-2 text-white/80 italic">(zentral für Hauptseite & alle verlinkten Projekte)</p>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">Allgemeines</h3>
        <p className="mt-2 text-white/80">Diese Seite fasst die Lizenzbedingungen für meine Software- und Kreativarbeiten zusammen. Sie dient der Transparenz und Information, ersetzt jedoch <strong>nicht</strong> die vollständigen Lizenztexte der unten verlinkten Lizenzen.</p>
        <p className="mt-2 text-white/80"><strong>Öffentlicher Name:</strong> Kyle Brooks<br />
        <strong>Rechtlicher Name (Impressum):</strong> Kirill Bobrov<br />(„Kyle Brooks" ist der kreative Name von Kirill Bobrov.)</p>
        <p className="mt-2 text-white/80">Diese Lizenzseite gilt für meine Hauptwebsite und alle verlinkten Projekte oder Demos, die in ihrem Footer auf diese Seite verweisen. Sofern ein einzelnes Projekt eigene Lizenzdateien oder -hinweise enthält, haben diese Vorrang.</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">1) Code-Lizenz — MIT License</h3>
        <p className="mt-2 text-white/80">Sofern in einem Repository nichts anderes angegeben ist, steht sämtlicher Quellcode meiner Projekte unter der <strong>MIT License</strong>.</p>
        <p className="mt-2 text-white/80"><strong>Kurzfassung (unverbindlich):</strong><br />Sie dürfen den Code verwenden, kopieren, verändern, zusammenführen, veröffentlichen, verbreiten, unterlizenzieren und/oder verkaufen – unter der Bedingung, dass der Copyright- und Lizenzvermerk erhalten bleibt.</p>
        <p className="mt-2 text-white/80">Volltext der Lizenz: <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer" className="underline hover:text-white">MIT License (englisch)</a></p>
        <p className="mt-2 text-white/80"><strong>Beispiel-Hinweis für eigene Verwendungen:</strong></p>
  <div className="mt-2">
    <div className="relative max-w-[680px] mx-auto">
      <div className="absolute right-3 top-3 z-10">
        <button
          type="button"
          onClick={handleCopy}
          aria-pressed={copied}
          aria-label={copied ? 'Copied' : 'Copy license text'}
          className="inline-flex items-center justify-center w-8 h-8 rounded bg-white/3 hover:bg-white/6 text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>

      <div className="p-3 bg-black/40 rounded text-sm text-white/80 overflow-x-auto font-mono w-full">
        {mit.split('\n\n').map((para, i) => (
          <p key={i} className="mb-3 whitespace-pre-line">{para}</p>
        ))}
      </div>
    </div>
  </div>
        <p className="mt-2 text-white/80">Wenn ein bestimmtes Repository eine eigene LICENSE-Datei enthält, gilt ausschließlich diese.</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">2) Inhalts-Lizenz — Creative Commons BY-NC 4.0</h3>
        <p className="mt-2 text-white/80">Sofern nicht anders angegeben, stehen alle nicht-programmatischen Inhalte (Texte, Artikel, von mir erstellte Bilder, Diagramme, Screenshots, Seitentexte usw.) unter der <strong>Creative Commons Attribution–NonCommercial 4.0 International (CC BY-NC 4.0)</strong>. Diese Lizenz gilt weltweit.</p>
        <p className="mt-2 text-white/80"><strong>Kurzfassung (unverbindlich):</strong><br />- ✅ Sie dürfen Inhalte teilen und bearbeiten, solange eine Namensnennung erfolgt.<br />- ❌ Keine kommerzielle Nutzung ohne meine vorherige Zustimmung.<br />- ✅ Wenn Sie Inhalte verändern oder adaptieren, müssen Sie dies kenntlich machen.</p>
        <p className="mt-2 text-white/80">Volltext: <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noreferrer" className="underline hover:text-white">creativecommons.org/licenses/by-nc/4.0/</a></p>
        <p className="mt-2 text-white/80"><strong>Beispiel für korrekte Attribution:</strong><br />“Text oder Diagramm von <em>Kyle Brooks (Kirill Bobrov)</em> — CC BY-NC 4.0 — Quelle: Projekt / URL”</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">3) Nicht von der CC-Lizenz erfasst</h3>
        <p className="mt-2 text-white/80">Von der CC BY-NC-Lizenz ausgenommen sind – sofern nicht ausdrücklich anders angegeben –:</p>
        <ul className="mt-2 text-white/80 list-disc ml-6">
          <li>Logos, Wortmarken und visuelle Markenkennzeichen (eigene oder fremde) – keine Markenlizenz.</li>
          <li>Drittanbieter-Assets (z. B. Schriftarten, Icons, Fotos, Illustrationen, Bibliotheken) – unterliegen ihren eigenen Lizenzen.</li>
          <li>Eingebettete Medien (z. B. YouTube-Videos) – verbleiben unter den Nutzungsbedingungen der jeweiligen Anbieter.</li>
          <li>Namen, Abbildungen oder personenbezogene Daten von Individuen – Persönlichkeitsrechte bleiben unberührt.</li>
        </ul>
        <p className="mt-2 text-white/80">Für Anfragen zur kommerziellen Nutzung eigener Inhalte: <a href="mailto:itskylebrooks@icloud.com" className="underline hover:text-white">itskylebrooks@icloud.com</a></p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">4) Drittanbieter-Komponenten & Attributionen</h3>
        <p className="mt-2 text-white/80">Einzelne Projekte können Bibliotheken, Schriftarten, Icons oder andere Komponenten Dritter enthalten. Deren jeweiligen Lizenzen gelten weiterhin und können zusätzliche Hinweise oder Namensnennungen erfordern.</p>
        <p className="mt-2 text-white/80">- Eine konsolidierte Übersicht befindet sich in der Datei <strong>NOTICE / Credits</strong> des jeweiligen Repositories oder auf der Projektseite.<br />- Beispiele für verwendete Komponenten: Icon-Sammlungen, Schriftfamilien, Hilfsbibliotheken, UI-Snippets.</p>
        <p className="mt-2 text-white/80">Wenn Sie ein Build oder eine Distribution weitergeben, die Drittanbieter-Assets enthält, müssen alle entsprechenden Lizenz- und Urheberhinweise beibehalten werden. Falls Sie eine fehlerhafte oder fehlende Attribution feststellen, kontaktieren Sie mich bitte zur Korrektur.</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">5) Praktische Hinweise zur Wiederverwendung</h3>
        <p className="mt-2 text-white/80"><strong>Code weiterverwenden:</strong><br />Behalten Sie den MIT-Lizenzheader und fügen Sie einen Link zum Repository oder zu dieser Seite hinzu.</p>
        <p className="mt-2 text-white/80"><strong>Texte oder Artikel zitieren / übersetzen:</strong><br />Fügen Sie eine CC BY-NC-Attribution hinzu, z. B.:<br />“Auszug basierend auf Inhalten von <em>Kyle Brooks (Kirill Bobrov)</em> — CC BY-NC 4.0 — Quelle: URL”</p>
        <p className="mt-2 text-white/80"><strong>Screenshots oder Diagramme verwenden:</strong><br />Nennen Sie die Quelle analog; für kommerzielle Zwecke ist vorherige Zustimmung erforderlich.</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">6) Marken</h3>
        <p className="mt-2 text-white/80">Alle Marken, Dienstleistungsmarken und Handelsnamen sind Eigentum ihrer jeweiligen Inhaber. Diese Seite gewährt keinerlei Marken- oder Namenslizenz.</p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">7) Fragen & Genehmigungen</h3>
        <p className="mt-2 text-white/80">Für Anfragen zu kommerzieller Nutzung, Sondergenehmigungen oder Lizenz-Klarstellungen: <a href="mailto:itskylebrooks@icloud.com" className="underline hover:text-white">itskylebrooks@icloud.com</a></p>
      </section>

      <hr className="my-6 border-white/10" />

      <section>
        <h3 className="text-white text-lg font-semibold">8) Rechtlicher Hinweis</h3>
        <p className="mt-2 text-white/80">Diese Seite dient ausschließlich der Informations- und Transparenzpflicht. Sie stellt <strong>keinen Verzicht auf Rechte</strong> dar, die nicht ausdrücklich gewährt wurden. Sofern Übersetzungen existieren, gilt die englische Fassung dieser Lizenzseite als maßgeblich.</p>
      </section>

      <p className="mt-6 text-white/80"><strong>Stand:</strong> Oktober 2025<br /><strong>Geltungsbereich:</strong> Hauptwebsite sowie alle Projekte und Demos, die in ihrem Footer auf diese Seite verlinken.</p>
    </main>
  )
}

