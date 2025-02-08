import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Hero />
      <Footer />
    </div>
  );
}

export default App;