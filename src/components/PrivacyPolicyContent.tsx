import React from "react";

const PrivacyPolicyContent = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Einleitung */}
      <section className="bg-white/30 backdrop-blur-2xl shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Einleitung</h2>
        <p className="text-gray-700 mb-4">
          Diese Datenschutzrichtlinie informiert Sie darüber, wie wir Ihre persönlichen Daten erheben, verarbeiten und schützen. Ihre Privatsphäre hat bei uns höchste Priorität.
        </p>
        <p className="text-gray-700">
          Durch die Nutzung unserer Dienste erklären Sie sich mit den in dieser Richtlinie beschriebenen Verfahren einverstanden.
        </p>
      </section>

      {/* Datenverarbeitung */}
      <section className="bg-white/30 backdrop-blur-2xl shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Datenverarbeitung</h2>
        <p className="text-gray-700 mb-4">
          Wir erfassen und verarbeiten Ihre Daten, um Ihnen personalisierte Inhalte, eine optimale Nutzererfahrung und die Gewährleistung unserer Sicherheitsstandards zu bieten.
        </p>
        <p className="text-gray-700">
          Die Verarbeitung erfolgt im Einklang mit den geltenden Datenschutzbestimmungen und nur innerhalb der rechtlich zulässigen Rahmen.
        </p>
      </section>

      {/* Datensicherheit */}
      <section className="bg-white/30 backdrop-blur-2xl shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Datensicherheit</h2>
        <p className="text-gray-700 mb-4">
          Wir setzen moderne Technologien und organisatorische Maßnahmen ein, um Ihre Daten vor unbefugtem Zugriff, Verlust und Missbrauch zu schützen.
        </p>
        <p className="text-gray-700">
          Dazu zählen verschlüsselte Verbindungen, regelmäßige Sicherheitsupdates sowie interne Überprüfungen.
        </p>
      </section>

      {/* Rechte der Nutzer */}
      <section className="bg-white/30 backdrop-blur-2xl shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ihre Rechte</h2>
        <p className="text-gray-700 mb-4">
          Sie haben das Recht, Auskunft über die zu Ihrer Person verarbeiteten Daten zu erhalten, sowie deren Berichtigung, Sperrung oder Löschung zu verlangen.
        </p>
        <p className="text-gray-700">
          Bei der Wahrnehmung dieser Rechte unterstützen wir Sie gerne. Bitte kontaktieren Sie uns dazu unter den unten angegebenen Kontaktmöglichkeiten.
        </p>
      </section>

      {/* Kontakt und Support */}
      <section className="bg-white/30 backdrop-blur-2xl shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Kontakt und Support</h2>
        <p className="text-gray-700 mb-4">
          Bei Fragen, Anmerkungen oder Anliegen rund um den Datenschutz können Sie sich jederzeit an uns wenden.
        </p>
        <p className="text-gray-700">
          E-Mail:{" "}
          <a
            href="mailto:contact@zacklack.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            contact@zacklack.de
          </a>
        </p>
      </section>

      {/* Stand */}
      <section className="bg-white/30 backdrop-blur-2xl shadow-2xl rounded-2xl p-8">
        <p className="text-gray-700">
          <strong>Stand:</strong> 07.02.2025
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyContent;