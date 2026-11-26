import { useLanguage } from '../context/LanguageContext';

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-30 bg-[#09090B]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-8 px-4">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 rounded-full focus-visible:outline-2 focus-visible:outline-white"
        >
          XAMPSBEATZ
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 font-display text-sm font-medium text-zinc-400"
        >
          <a
            href="#playlists"
            className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.playlists}
          </a>
          <a
            href="#about"
            className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.about}
          </a>
        </nav>
      </div>
    </header>
  );
}
