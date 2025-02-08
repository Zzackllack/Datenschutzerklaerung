import React from "react";

const Policy: React.FC = () => {
    return (
        <section id="policy-details" className="container mx-auto px-4 py-12 text-gray-200">
            <h1 className="text-4xl font-bold mb-6">Datenschutzerklärung</h1>
            <p className="mb-4">
                Wir nehmen den Schutz Ihrer Daten sehr ernst. Diese Datenschutzerklärung informiert Sie darüber,
                welche personenbezogenen Daten wir erheben, wie wir diese verwenden und welche Rechte Sie in Bezug auf
                Ihre Daten haben.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Verantwortliche Stelle</h2>
            <p className="mb-4">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mb-4">
                Cédric<br />
                Musterstraße 1<br />
                12345 Musterstadt<br />
                Deutschland<br />
                E-Mail: contact@zacklack.de
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="mb-4">
                Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese
                Informationen (Server-Logfiles) beinhalten etwa den Typ des Webbrowsers, das verwendete
                Betriebssystem, den Domainnamen Ihres Internet Service Providers und ähnliches.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Nutzung und Weitergabe personenbezogener Daten</h2>
            <p className="mb-4">
                Ihre personenbezogenen Daten werden nur zu den in dieser Datenschutzerklärung genannten Zwecken verwendet.
                Eine Weitergabe an Dritte erfolgt nur, wenn dies zur Erfüllung unserer vertraglichen Pflichten notwendig ist
                oder Sie ausdrücklich eingewilligt haben.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Ihre Rechte</h2>
            <p className="mb-4">
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer bei uns gespeicherten
                personenbezogenen Daten sowie auf Einschränkung der Verarbeitung und Widerspruch gegen die
                Verarbeitung. Bitte kontaktieren Sie uns hierzu unter der oben genannten E-Mail-Adresse.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Änderungen der Datenschutzerklärung</h2>
            <p className="mb-4">
                Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den
                aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der
                Datenschutzerklärung umzusetzen.
            </p>
            <p className="mt-8 text-sm text-gray-400">
                Stand: 08.02.2025
            </p>
        </section>
    );
};

export default Policy;