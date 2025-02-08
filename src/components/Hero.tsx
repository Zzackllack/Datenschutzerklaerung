import React from "react";
import { Spotlight } from "./ui/spotlight";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white py-20">
      <Spotlight className="absolute inset-0" fill="#ffffff" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Site</h1>
        <p className="text-lg mb-8">
          Experience the blend of modern technology and elegant design.
        </p>
        <a
          href="#get-started"
          className="inline-block px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;