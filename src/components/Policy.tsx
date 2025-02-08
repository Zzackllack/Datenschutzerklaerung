import React from "react";

const Policy: React.FC = () => {
    return (
        <section id="policy-details" className="container mx-auto px-4 py-12 text-gray-200">
            <h1 className="text-4xl font-bold mb-6">Datenschutzerklärung</h1>
            <p className="mb-4">
                Diese Datenschutzerklärung informiert in umfassender und detaillierter Weise über Art, Umfang und Zweck der Erhebung, Verarbeitung und Nutzung personenbezogener Daten im Rahmen der Bereitstellung und Nutzung sämtlicher Webseiten, die unter der Second-Level-Domain{" "}
                <strong>zacklack.de</strong> betrieben werden. Die nachfolgenden Bestimmungen sind in der gebotenen Formulierung verfasst, um den Anforderungen der geltenden Datenschutz-Grundverordnung (DSGVO) sowie weiterer einschlägiger datenschutzrechtlicher Bestimmungen in ihrer Gesamtheit zu genügen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Allgemeine Hinweise und Pflichtinformationen</h2>
            <p className="mb-4">
                Personenbezogene Daten im Sinne dieser Erklärung sind alle Informationen, welche sich auf eine identifizierte oder identifizierbare natürliche Person beziehen – hierzu zählen insbesondere Name, Anschrift, E-Mail-Adresse, Telefonnummer, IP-Adresse sowie sämtliche weitere Daten, die unter Berücksichtigung der Umstände der Verarbeitung eine Identifizierung der betroffenen Person ermöglichen.
                <br /><br />
                <strong>Verantwortlicher im Sinne der DSGVO:</strong>
                <br />
                [Ihr Name/Firmenname]
                <br />
                [Ihre Anschrift]
                <br />
                E-Mail:{" "}
                <a href="mailto:[Ihre E-Mail-Adresse]" className="text-blue-400 underline">
                    [Ihre E-Mail-Adresse]
                </a>
                <br />
                Telefon: [Ihre Telefonnummer]
                <br /><br />
                Diese Datenschutzerklärung gilt für sämtliche Datenverarbeitungen im Zusammenhang mit der Nutzung unserer Webangebote unter der Domain{" "}
                <strong>zacklack.de</strong>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Erfassung und Speicherung personenbezogener Daten</h2>
            <p className="mb-4">
                Beim Aufrufen unserer Webseiten werden automatisch bestimmte Informationen durch den von Ihnen verwendeten Browser an den Server übermittelt. Hierzu zählen insbesondere:
                <br /><br />
                - Browsertyp und Browserversion
                <br />
                - Betriebssystem
                <br />
                - Referrer URL (zuvor besuchte Seite)
                <br />
                - Hostname des zugreifenden Rechners
                <br />
                - Datum und Uhrzeit des Zugriffs
                <br /><br />
                Diese Daten werden in sogenannten Server-Logfiles gespeichert und dienen primär der Sicherstellung eines störungsfreien Betriebs unserer Webangebote sowie der Verbesserung unseres Angebots. Eine Identifizierung einzelner Nutzer erfolgt hierbei nicht.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Verwendung von Cookies und ähnlichen Technologien</h2>
            <p className="mb-4">
                Unsere Webseiten verwenden Cookies, um die Benutzerfreundlichkeit zu erhöhen und eine reibungslose Nutzung der angebotenen Inhalte zu gewährleisten. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Es werden sowohl temporäre (Session-) als auch dauerhafte Cookies eingesetzt. Über die individuellen Einstellungen Ihres Browsers können Sie die Verwendung von Cookies steuern oder verhindern, was jedoch in einzelnen Fällen zu Funktionseinschränkungen führen kann.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Einsatz von Cloudflare</h2>
            <p className="mb-4">
                Zur Optimierung der Auslieferung unserer Inhalte sowie zur Absicherung unserer Webpräsenz greifen wir auf die Dienste des Anbieters Cloudflare zurück. Cloudflare fungiert als Content Delivery Network (CDN) und stellt darüber hinaus verschiedene Sicherheitsfunktionen bereit, um etwaigen Cyberangriffen, DDoS-Attacken und sonstigen unberechtigten Zugriffen effektiv entgegenzuwirken.
                <br /><br />
                Im Rahmen der Inanspruchnahme der Cloudflare-Dienste werden technische Daten, namentlich Ihre IP-Adresse, Zugriffszeiten sowie spezifische Informationen zu Ihrem Endgerät, an Server von Cloudflare übermittelt und dort verarbeitet. Diese Datenübertragung erfolgt unter Zuhilfenahme von SSL/TLS-Verschlüsselung und basiert auf berechtigten Interessen im Sinne von Art. 6 Abs. 1 lit. f DSGVO. Eine Übermittlung in Drittstaaten, insbesondere in die Vereinigten Staaten, erfolgt unter Einhaltung vertraglicher Garantien, die ein adäquates Datenschutzniveau sicherstellen.
                <br /><br />
                Weitere Einzelheiten entnehmen Sie bitte der Datenschutzerklärung von Cloudflare unter:{" "}
                <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                >
                    https://www.cloudflare.com/privacypolicy/
                </a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Einsatz von Umami</h2>
            <p className="mb-4">
                Zur Erfassung und Auswertung anonymisierter Nutzungsstatistiken unserer Webseiten kommt das Analyse-Tool Umami zum Einsatz. Dieses Werkzeug erhebt ausschließlich aggregierte und anonymisierte Daten, um die Performance sowie die Benutzerfreundlichkeit unserer Webangebote zu optimieren. Eine Identifizierung einzelner Nutzer erfolgt hierbei nicht, da sämtliche erhobenen Daten in anonymisierter Form verarbeitet werden.
                <br /><br />
                Die Datenverarbeitung mittels Umami erfolgt unter strikter Beachtung der datenschutzrechtlichen Vorschriften und dient ausschließlich der internen statistischen Auswertung. Weitere Informationen zur Funktionsweise und zu datenschutzrechtlichen Aspekten von Umami finden Sie unter:{" "}
                <a
                    href="https://umami.is/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                >
                    https://umami.is/
                </a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Einbindung von Google Fonts</h2>
            <p className="mb-4">
                Zur einheitlichen Darstellung typografischer Elemente wird auf unserer Webseite der Dienst Google Fonts verwendet. Hierbei werden Schriftarten von den Servern der Google Inc. geladen. Durch diese Einbindung werden technische Daten wie Ihre IP-Adresse und weitere für die Darstellung notwendige Informationen an Google übermittelt. Diese Datenübertragung erfolgt ausschließlich zur Sicherstellung einer konsistenten und ansprechenden visuellen Darstellung unserer Inhalte.
                <br /><br />
                Die Nutzung von Google Fonts basiert auf der Grundlage berechtigter Interessen, ohne dass eine weitergehende Profilerstellung erfolgt. Es besteht kein Vertrag zur Auftragsverarbeitung mit Google. Weitere Informationen entnehmen Sie bitte der Datenschutzerklärung von Google unter:{" "}
                <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                >
                    https://policies.google.com/privacy
                </a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Einsatz der Google Search Console</h2>
            <p className="mb-4">
                Die Google Search Console wird eingesetzt, um die Auffindbarkeit und Leistung unserer Webseiten in den organischen Suchergebnissen zu überwachen und zu analysieren. Im Rahmen der Nutzung werden technische Daten wie Zugriffszeiten, Seitenaufrufe sowie etwaige Fehlermeldungen erfasst. Die Verarbeitung dieser Daten erfolgt auf Grundlage berechtigter Interessen im Sinne des Art. 6 Abs. 1 lit. f DSGVO.
                <br /><br />
                Eine Zusammenführung der erhobenen Daten mit anderen personenbezogenen Informationen findet nicht statt. Weitere detaillierte Informationen entnehmen Sie bitte der Datenschutzerklärung von Google unter:{" "}
                <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                >
                    https://policies.google.com/privacy
                </a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Einsatz von Google Analytics</h2>
            <p className="mb-4">
                Zur umfassenden statistischen Analyse der Nutzung unserer Webseiten wird Google Analytics, ein Dienst der Google Inc., eingesetzt. Hierbei werden durch den Einsatz von Cookies Daten über Ihr Nutzungsverhalten, wie z. B. besuchte Seiten, Verweildauer und Herkunft der Nutzer, erfasst. Die Erhebung und Verarbeitung dieser Daten erfolgt auf Grundlage berechtigter Interessen im Sinne des Art. 6 Abs. 1 lit. f DSGVO. Soweit technisch möglich, wird eine Anonymisierung der IP-Adresse vorgenommen.
                <br /><br />
                Es findet keine Zusammenführung der über Google Analytics erhobenen Daten mit anderen personenbezogenen Daten statt, sofern nicht eine ausdrückliche Einwilligung Ihrerseits vorliegt. Weitergehende Informationen entnehmen Sie bitte der Datenschutzerklärung von Google unter:{" "}
                <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                >
                    https://policies.google.com/privacy
                </a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Hosting</h2>
            <p className="mb-4">
                Die Bereitstellung und Verwaltung der Serverinfrastruktur, die den Betrieb unserer Webangebote ermöglicht, erfolgt in eigenverantwortlicher Durchführung unter Zuhilfenahme einer Synology NAS (Modell DS220+) in Verbindung mit der Web Station, welche ihren operativen Standort in Berlin, Deutschland, unterhält. Ergänzend dazu umfasst unser technisches Repertoire einen weiteren Server, ausgestattet mit einer Intel CPU sowie NVMe SSD, der ergänzend zum primären System zur Anwendung kommt.
                <br /><br />
                Es wird darauf hingewiesen, dass sämtliche Datenverarbeitungsprozesse unter strikter Einhaltung der geltenden gesetzlichen Bestimmungen sowie interner Richtlinien durchgeführt werden. Die eingesetzte technische Infrastruktur unterliegt einem kontinuierlichen Überwachungs- und Wartungsprozess, der in den Rahmen eines umfassenden, internen IT-Betriebskonzepts eingebettet ist. Dieses Konzept berücksichtigt alle sicherheitsrelevanten und datenschutzrechtlichen Aspekte, ohne dass hierüber im Detail Auskunft gegeben wird.
                <br /><br />
                Zur Gewährleistung der Systemintegrität und Datensicherheit werden fortlaufend technische und organisatorische Maßnahmen implementiert, deren konkrete Ausgestaltung aus Gründen der Betriebssicherheit und zum Schutz betrieblicher Geheimhaltungsinteressen in ihrer Detailtiefe nicht offengelegt wird. Sämtliche Datenübertragungen und -verarbeitungen erfolgen unter Anwendung aktueller Verschlüsselungs- und Sicherheitsprotokolle, welche den Anforderungen eines rechtssicheren Betriebs vollumfänglich gerecht werden. Die hier vorgenommene Infrastruktur wird in regelmäßigen Abständen einer internen Evaluierung unterzogen und entsprechend an veränderte technische sowie rechtliche Rahmenbedingungen angepasst.
                <br /><br />
                Es wird ausdrücklich darauf hingewiesen, dass die operative Verwaltung der Hostinginfrastruktur als integraler Bestandteil eines ganzheitlichen IT-Betriebskonzepts zu verstehen ist, welches alle relevanten Prozesse und Kontrollmechanismen umfasst, die der Erfüllung der datenschutzrechtlichen Verpflichtungen dienen. Alle Maßnahmen und Verfahren erfolgen vorbeugend und werden kontinuierlich optimiert, um einen reibungslosen sowie datenschutzkonformen Betrieb unserer Webangebote sicherzustellen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Rechtliche Grundlagen und einschlägige Gesetzesverweise</h2>
            <p className="mb-4">
                Diese Datenschutzerklärung basiert auf und stützt sich insbesondere auf die folgenden gesetzlichen Grundlagen und Regelwerke:
                <br /><br />
                <strong>EU-Datenschutz-Grundverordnung (DSGVO):</strong>
                <br />
                - <em>Art. 4 DSGVO</em> – Begriffsbestimmungen
                <br />
                - <em>Art. 5 DSGVO</em> – Grundsätze der Verarbeitung personenbezogener Daten
                <br />
                - <em>Art. 6 DSGVO</em> – Rechtmäßigkeit der Verarbeitung
                <br />
                - <em>Art. 7 DSGVO</em> – Bedingungen für die Einwilligung
                <br />
                - <em>Art. 12 DSGVO</em> – Transparente Information, Kommunikation und Modalitäten zur Ausübung der Rechte der betroffenen Person
                <br />
                - <em>Art. 13 DSGVO</em> – Informationspflicht bei Erhebung von personenbezogenen Daten bei der betroffenen Person
                <br />
                - <em>Art. 14 DSGVO</em> – Informationspflicht, wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben wurden
                <br />
                - <em>Art. 15 DSGVO</em> – Auskunftsrecht der betroffenen Person
                <br />
                - <em>Art. 16 DSGVO</em> – Recht auf Berichtigung
                <br />
                - <em>Art. 17 DSGVO</em> – Recht auf Löschung (Recht auf Vergessenwerden)
                <br />
                - <em>Art. 18 DSGVO</em> – Recht auf Einschränkung der Verarbeitung
                <br />
                - <em>Art. 20 DSGVO</em> – Recht auf Datenübertragbarkeit
                <br />
                - <em>Art. 21 DSGVO</em> – Widerspruchsrecht
                <br />
                - <em>Art. 22 DSGVO</em> – Automatisierte Entscheidungen im Einzelfall, einschließlich Profiling
                <br />
                - <em>Art. 32 DSGVO</em> – Sicherheit der Verarbeitung
                <br />
                - <em>Art. 33 DSGVO</em> – Meldung von Verletzungen des Schutzes personenbezogener Daten an die Aufsichtsbehörde
                <br />
                - <em>Art. 34 DSGVO</em> – Benachrichtigung der betroffenen Person im Falle einer Datenschutzverletzung
                <br />
                - <em>Art. 35 DSGVO</em> – Datenschutz-Folgenabschätzung
                <br />
                - <em>Art. 37 bis 39 DSGVO</em> – Regelungen zur Bestellung, Stellung und Aufgaben des Datenschutzbeauftragten
                <br /><br />
                <strong>Bundesdatenschutzgesetz (BDSG):</strong>
                <br />
                - Insbesondere <em>§ 26 BDSG</em> – Regelungen zum Beschäftigtendatenschutz
                <br /><br />
                <strong>Telemediengesetz (TMG):</strong>
                <br />
                - <em>§ 13 TMG</em> – Allgemeine Informationspflichten
                <br /><br />
                <strong>Telekommunikation-Telemedien-Datenschutz-Gesetz (TTDSG):</strong>
                <br />
                - Enthält ergänzende Regelungen zum Datenschutz in den Bereichen Telekommunikation und Telemedien
                <br /><br />
                <strong>ePrivacy-Richtlinie (2002/58/EG) und zukünftig die ePrivacy-Verordnung:</strong>
                <br />
                - Ergänzende Bestimmungen zum Schutz der Vertraulichkeit der elektronischen Kommunikation sowie zum Umgang mit Cookies und ähnlichen Technologien.
            </p>

            <p className="mt-8 text-sm text-gray-400">
                Stand: 08.02.2025
            </p>
        </section>
    );
};

export default Policy;
