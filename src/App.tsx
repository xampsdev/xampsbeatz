import { ArrowDownRight, X } from 'lucide-react';
import { useState } from 'react';
import { Header } from './components/Header';
import { LiteYouTubeEmbed } from './components/LiteYouTubeEmbed';
import { GitHubIcon, SoundCloudIcon, YouTubeIcon } from './components/icons/BrandIcons';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import {
  GITHUB_PROFILE_URL,
  SOUNDCLOUD_PLAYLIST_URL,
  SOUNDCLOUD_PROFILE_URL,
  YOUTUBE_FALLBACK_COVER,
  YOUTUBE_PLAYLIST_ID,
  YOUTUBE_PRIMARY_VIDEO_ID,
  YOUTUBE_PROFILE_URL,
} from './data/beats';
import { useScrollReveal } from './hooks/useScrollReveal';

function PortfolioContent() {
  const { language, setLanguage, t } = useLanguage();
  const [showSoundCloudEmbed, setShowSoundCloudEmbed] = useState(false);

  const soundcloudReveal = useScrollReveal<HTMLElement>();
  const aboutReveal = useScrollReveal<HTMLElement>();

  const currentYear = new Date().getFullYear();

  return (
    <div id="top" className="min-h-screen bg-[#09090B] font-sans text-zinc-100">
      <Header />

      <main className="flex flex-col gap-8">
        {/* SECTION 1: Hero / Header with Gooey Marquee at the top */}
        <section className="mx-auto w-full max-w-5xl px-4 pt-10 pb-8">
          {/* Bilingual Switcher Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-medium tracking-wide text-zinc-400">{t.hero.kicker}</p>
            <div
              role="group"
              aria-label="Language switcher"
              className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1"
            >
              <button
                type="button"
                onClick={() => setLanguage('pt-BR')}
                aria-pressed={language === 'pt-BR'}
                className={`rounded-full px-4 py-1.5 font-display text-xs font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  language === 'pt-BR'
                    ? 'bg-white text-[#09090B]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                PT-BR
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
                className={`rounded-full px-4 py-1.5 font-display text-xs font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  language === 'en'
                    ? 'bg-white text-[#09090B]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="w-full">
            <div className="marquee-wrapper" role="region" aria-label="XAMPSBEATZ">
              {/* Layer 1: The distorted/gooey liquid effect */}
              <div className="marquee-blur" aria-hidden="true">
                <p className="marquee-text tracking-wider">XAMPSBEATZ — XAMPSBEATZ — </p>
              </div>

              {/* Layer 2: The crisp readable text layered on top */}
              <div className="marquee-clear">
                <p className="marquee-text tracking-wider text-white">
                  XAMPSBEATZ — XAMPSBEATZ —{' '}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center text-center">
            <h1 className="max-w-2xl font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance] leading-[1.12]">
              {t.hero.headline}
            </h1>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-zinc-400 leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>
        </section>

        {/* SECTION 2: Main Visualizer / YouTube Highlight */}
        <section id="playlists" className="mx-auto w-full max-w-5xl px-4 py-12">
          <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out hover:-translate-y-1">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3">
                  <YouTubeIcon className="h-5 w-5 text-white" />
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {t.playlists.youtubeTitle}
                  </h2>
                </div>
                <p className="mt-2.5 max-w-2xl text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {t.playlists.youtubeDesc}
                </p>
              </div>

              <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-4">
                <a
                  href={YOUTUBE_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-full border border-white/20 w-full sm:w-72 h-14 flex items-center justify-center transition-all duration-300 ease-out hover:border-transparent whitespace-nowrap"
                >
                  <span className="absolute inset-0 translate-y-full bg-[#FF0000] transition-transform duration-300 ease-out group-hover:translate-y-0" />
                  <span className="relative z-10 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-white">
                    <span>{t.playlists.watchChannel}</span>
                    <ArrowDownRight className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-8 fluid-yt-frame">
              <LiteYouTubeEmbed
                videoId={YOUTUBE_PRIMARY_VIDEO_ID}
                playlistId={YOUTUBE_PLAYLIST_ID}
                title="XAMPSBEATZ YouTube Playlist"
                clickLabel={t.playlists.liteClickToLoad}
                closeLabel={t.playlists.closeEmbed}
                fallbackImageUrl={YOUTUBE_FALLBACK_COVER}
              />
            </div>
          </div>
        </section>

        {/* SECTION 3: Beat Catalog / SoundCloud Grid */}
        <section
          id="soundcloud"
          ref={soundcloudReveal.ref}
          className={`mx-auto w-full max-w-5xl px-4 py-12 transition-all duration-500 ${
            soundcloudReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex flex-col gap-12">
            {/* SoundCloud On-Demand Embed Fluid Container */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out hover:-translate-y-1">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <SoundCloudIcon className="h-5 w-5 text-white" />
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      {t.playlists.soundcloudTitle}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {t.playlists.soundcloudDesc}
                  </p>
                </div>

                <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-4">
                  <a
                    href={SOUNDCLOUD_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-full border border-white/20 w-full sm:w-72 h-14 flex items-center justify-center transition-all duration-300 ease-out hover:border-transparent whitespace-nowrap"
                  >
                    <span className="absolute inset-0 translate-y-full bg-[#FF5500] transition-transform duration-300 ease-out group-hover:translate-y-0" />
                    <span className="relative z-10 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-white">
                      <span>{language === 'pt-BR' ? 'Ouvir no SoundCloud' : 'Listen on SoundCloud'}</span>
                      <ArrowDownRight className="h-4 w-4" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-8">
                {showSoundCloudEmbed ? (
                  <div className="space-y-4">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setShowSoundCloudEmbed(false)}
                        className="group relative inline-flex items-center overflow-hidden rounded-full border border-white/20 px-6 py-2 transition-all duration-300 ease-out hover:border-transparent cursor-pointer"
                      >
                        <span className="absolute inset-0 translate-y-full bg-[#FF5500] transition-transform duration-300 ease-out group-hover:translate-y-0" />
                        <span className="relative z-10 inline-flex items-center gap-1.5 font-display text-xs font-bold text-white transition-colors duration-300 group-hover:text-white">
                          <X className="h-3.5 w-3.5" />
                          <span>{t.playlists.closeEmbed}</span>
                        </span>
                      </button>
                    </div>
                    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/5 bg-[#09090B]">
                      <iframe
                        title="SoundCloud Playlist Player"
                        loading="lazy"
                        allow="autoplay"
                        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                          SOUNDCLOUD_PLAYLIST_URL
                        )}&color=%23ff5500`}
                        className="h-full w-full border-0"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex aspect-video w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border border-white/5 bg-[#09090B] p-6 text-center">
                    <SoundCloudIcon className="h-12 w-12 text-zinc-200" />
                    <button
                      type="button"
                      onClick={() => setShowSoundCloudEmbed(true)}
                      className="group relative overflow-hidden rounded-full border border-white/20 w-full sm:w-72 h-14 flex items-center justify-center transition-all duration-300 ease-out hover:border-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5500] cursor-pointer whitespace-nowrap"
                    >
                      <span className="absolute inset-0 translate-y-full bg-[#FF5500] transition-transform duration-300 ease-out group-hover:translate-y-0" />
                      <span className="relative z-10 inline-flex items-center gap-2.5 font-display text-sm font-bold text-white transition-colors duration-300 group-hover:text-white">
                        <SoundCloudIcon className="h-4 w-4" />
                        <span>{t.playlists.loadSoundCloud}</span>
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 3-Column Studio Overview Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {t.hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/5 bg-white/[0.02] px-6 py-5 shadow-[0_0_30px_rgba(0,0,0,0.4)]"
                >
                  <p className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Producer Section */}
        <section
          id="about"
          ref={aboutReveal.ref}
          className={`bg-[#09090B] py-20 transition-all duration-500 ${
            aboutReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {t.about.heading}
              </h2>
              <p className="mt-3 font-display text-base font-semibold text-zinc-200">
                {t.about.lead}
              </p>
              <p className="mt-4 max-w-2xl text-sm sm:text-base text-zinc-400 leading-relaxed">
                {t.about.body}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
              {t.about.highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-4 shadow-[0_0_24px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out hover:-translate-y-0.5"
                >
                  <span className="text-xs font-medium text-zinc-400">{item.label}</span>
                  <span className="font-display text-sm font-bold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#09090B] py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          <p className="text-xs text-zinc-400">
            {t.footer.rights.replace('{year}', String(currentYear))}
          </p>

          <div className="flex items-center gap-5">
            <a
              href={SOUNDCLOUD_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SoundCloud"
              className="text-zinc-400 hover:text-[#FF5500] transition-colors duration-200"
            >
              <SoundCloudIcon className="h-5 w-5" />
            </a>
            <a
              href={YOUTUBE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-zinc-400 hover:text-[#FF0000] transition-colors duration-200"
            >
              <YouTubeIcon className="h-5 w-5" />
            </a>
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-400 hover:text-[#58A6FF] transition-colors duration-200"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
