import Footer from "./components/Footer";
import PrivacyPolicyContent from "./components/PrivacyPolicyContent";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Using imported HTML content */}
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;