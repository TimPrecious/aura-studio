"use client"; // needed because the text changes over time

import { useState, useEffect } from "react";

// The phrases we want to type, one after another
const phrases = [
  "Bringing Ideas to Life",
  "Branding with Purpose",
  "Design that Stands Out",
];

export default function Hero() {
  const [text, setText] = useState("");               // the letters showing now
  const [phraseIndex, setPhraseIndex] = useState(0);  // which phrase we are on
  const [isDeleting, setIsDeleting] = useState(false); // typing or deleting?

  // This runs every time text, phraseIndex, or isDeleting changes
  useEffect(() => {
    const current = phrases[phraseIndex];

    // How long to wait before the next step (in milliseconds)
    let delay = isDeleting ? 40 : 80;
    if (!isDeleting && text === current) delay = 1500; // pause when fully typed
    if (isDeleting && text === "") delay = 400;        // pause before next phrase

    const timer = setTimeout(() => {
      if (!isDeleting && text === current) {
        setIsDeleting(true); // finished typing, start deleting
      } else if (isDeleting && text === "") {
        setIsDeleting(false); // finished deleting, go to the next phrase
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      } else if (isDeleting) {
        setText(current.substring(0, text.length - 1)); // remove one letter
      } else {
        setText(current.substring(0, text.length + 1)); // add one letter
      }
    }, delay);

    // Clean up the timer so we never run two at once
    return () => clearTimeout(timer);
  }, [text, phraseIndex, isDeleting]);

  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center justify-center text-center px-6 bg-tint-200"
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
          Aura Studio
        </h1>

        <p className="mt-6 text-xl sm:text-3xl text-gray-700 min-h-[2.5rem]">
          <span>{text}</span>
          <span className="typing-cursor" aria-hidden="true"></span>
        </p>

        <a
          href="#contact"
          className="inline-block mt-10 px-8 py-3 rounded-full bg-accentdark text-white font-semibold
                     hover:bg-accent hover:-translate-y-0.5 transition-all shadow-sm"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}