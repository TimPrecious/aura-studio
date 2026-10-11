import CopyrightYear from "./CopyrightYear";

export default function Footer() {
  return (
    <footer className="border-t border-accent/20 py-8 px-6 bg-tint-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-700">
        <p>&copy; <CopyrightYear /> Aura Studio</p>
        <a
          href="https://www.aurastudio.co"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accentdark transition-colors"
        >
          www.aurastudio.co
        </a>
      </div>
    </footer>
  );
}