import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="flex-grow">
        <Hero />
        {/* Add your privacy policy content here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;