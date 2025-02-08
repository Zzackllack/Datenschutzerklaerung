import React from "react";
import { Spotlight } from "./ui/spotlight";
import { Icons } from "./ui/icons";

const Hero = () => {
  return (
    <div className="w-full h-[40rem] relative flex flex-col items-center justify-center overflow-hidden bg-black antialiased">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="relative z-10 flex flex-col items-center">
          <Icons.logo className="h-12 w-12 text-blue-500 mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4">
            Privacy Policy
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            We take your privacy seriously. Learn how we collect, use, and protect your personal information.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#policy-details"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
            >
              Read More
            </a>
            <a
              href="mailto:contact@zacklack.de"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-neutral-500 text-neutral-200 hover:bg-neutral-900 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};

export default Hero;