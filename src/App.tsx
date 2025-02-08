import Footer from "./components/Footer";
import PrivacyPolicyEnhanced from "./components/PrivacyPolicy";
import privacyContent from "./content/privacyPolicy.html?raw";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Using imported HTML content */}
        <PrivacyPolicyEnhanced htmlContent={privacyContent} />
      </main>
      <Footer />
    </div>
  );
}

export default App;