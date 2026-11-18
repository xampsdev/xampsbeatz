import { ArrowDownRight, X } from 'lucide-react';
import { useState } from 'react';
import { Header } from './components/Header';
import { LiteYouTubeEmbed } from './components/LiteYouTubeEmbed';
import { SoundCloudIcon, YouTubeIcon } from './components/icons/BrandIcons';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import {
  SOUNDCLOUD_PLAYLIST_URL,
  SOUNDCLOUD_PROFILE_URL,
  YOUTUBE_FALLBACK_COVER,
  YOUTUBE_PLAYLIST_ID,
  YOUTUBE_PRIMARY_VIDEO_ID,
  YOUTUBE_PROFILE_URL,
} from './data/beats';
import { useScrollReveal } from './hooks/useScrollReveal';

const STAT_ACCENT_COLORS = ['text-[#FFD600]', 'text-[#FF0099]', 'text-[#00E5FF]'] as const;

function PortfolioContent() {
  const { language, setLanguage, t } = useLanguage();
  const [showSoundCloudEmbed, setShowSoundCloudEmbed] = useState(false);

  const playlistsReveal = useScrollReveal<HTMLElement>();
  const aboutReveal = useScrollReveal<HTMLElement>();

  const currentYear = new Date().getFullYear();
  const artworkBgUrl = `${import.meta.env.BASE_URL}imagem/abstract-rainbow-glitch.webp`;

  return (
    <div id="top" className="min-h-screen bg-[#07070B] text-zinc-100">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-[1200px] px-4 pt-10 pb-14 sm:px-6 lg:px-8 lg:pt-14">
          {/* Bilingual Switcher Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-medium text-zinc-400 tracking-wide">{t.hero.kicker}</p>
            <div
              role="group"
              aria-label="Language switcher"
              className="inline-flex items-center gap-1 rounded-lg border border-[#262838] bg-[#11121A] p-1"
            >
              <button
                type="button"
                onClick={() => setLanguage('pt-BR')}
                aria-pressed={language === 'pt-BR'}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  language === 'pt-BR'
                    ? 'bg-gradient-to-r from-[#FF0099] to-[#7C2AE8] text-white font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                PT-BR
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-[#FF0099] to-[#7C2AE8] text-white font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between text-center">
            <div>
              <div
                className="masked-wordmark font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none select-none"
                style={{ backgroundImage: `url(${artworkBgUrl})` }}
              >
                XAMPSBEATZ
              </div>

              <h1 className="mx-auto mt-6 max-w-2xl font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance] leading-[1.12]">
                {t.hero.headline}
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-sm sm:text-base text-zinc-400 leading-relaxed">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#playlists"
                className="inline-flex items-center gap-2 rounded-lg border border-[#262838] bg-[#11121A] px-5 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-[#00E5FF]/60 hover:text-white focus-visible:outline-2 focus-visible:outline-[#00E5FF] whitespace-nowrap"
              >
                <span>{t.hero.openPlaylists}</span>
                <ArrowDownRight className="h-4 w-4 text-[#00E5FF]" />
              </a>
            </div>
          </div>

          {/* 3-Column Studio Overview Row */}
          <div className="mt-10 grid grid-cols-1 gap-4 border-y border-[#262838] py-6 sm:grid-cols-3">
            {t.hero.stats.map((stat, idx) => (
              <div key={stat.label}>
                <p
                  className={`font-display text-lg sm:text-xl font-semibold ${
                    STAT_ACCENT_COLORS[idx % STAT_ACCENT_COLORS.length]
                  }`}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Official Playlists & Lite YouTube Showcase */}
        <section
          id="playlists"
          ref={playlistsReveal.ref}
          className={`border-t border-[#262838] py-20 transition-all duration-500 ${
            playlistsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {t.playlists.heading}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-400 leading-relaxed">
                {t.playlists.subheading}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* SoundCloud On-Demand Embed */}
              <div className="flex flex-col justify-between rounded-2xl border border-[#262838] bg-[#11121A] p-6">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <SoundCloudIcon className="h-5 w-5 text-[#FF5500]" />
                      <h3 className="font-display text-lg font-semibold text-white">
                        {t.playlists.soundcloudTitle}
                      </h3>
                    </div>
                    <a
                      href={SOUNDCLOUD_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-zinc-400 hover:text-[#FF5500] transition-colors whitespace-nowrap"
                    >
                      @xampsbeatz
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {t.playlists.soundcloudDesc}
                  </p>
                </div>

                <div className="mt-5">
                  {showSoundCloudEmbed ? (
                    <div className="space-y-3">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() => setShowSoundCloudEmbed(false)}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[#262838] bg-[#181A26] px-3 py-1.5 text-xs font-medium text-zinc-200 hover:text-white cursor-pointer"
                        >
                          <X className="h-3.5 w-3.5" />
                          <span>{t.playlists.closeEmbed}</span>
                        </button>
                      </div>
                      <div className="aspect-video w-full overflow-hidden rounded-xl border border-[#262838] bg-black">
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
                    <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-xl border border-[#262838] bg-[#0A0B10] p-6 text-center">
                      <SoundCloudIcon className="h-10 w-10 text-[#FF5500]" />
                      <button
                        type="button"
                        onClick={() => setShowSoundCloudEmbed(true)}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#FF5500] px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-150 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5500] cursor-pointer whitespace-nowrap"
                      >
                        <SoundCloudIcon className="h-4 w-4" />
                        <span>{t.playlists.loadSoundCloud}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* YouTube Lite Embed */}
              <div className="flex flex-col justify-between rounded-2xl border border-[#262838] bg-[#11121A] p-6">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <YouTubeIcon className="h-5 w-5 text-[#FF0000]" />
                      <h3 className="font-display text-lg font-semibold text-white">
                        {t.playlists.youtubeTitle}
                      </h3>
                    </div>
                    <a
                      href={YOUTUBE_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-zinc-400 hover:text-[#FF0000] transition-colors whitespace-nowrap"
                    >
                      {t.playlists.watchChannel}
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {t.playlists.youtubeDesc}
                  </p>
                </div>

                <div className="mt-5">
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
            </div>
          </div>
        </section>

        {/* About Producer Section */}
        <section
          id="about"
          ref={aboutReveal.ref}
          className={`border-t border-[#262838] py-20 transition-all duration-500 ${
            aboutReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-7">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {t.about.heading}
              </h2>
              <p className="mt-3 text-base font-medium text-[#00E5FF]">{t.about.lead}</p>
              <p className="mt-4 max-w-2xl text-sm sm:text-base text-zinc-300 leading-relaxed">
                {t.about.body}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
              {t.about.highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-[#262838] bg-[#11121A] px-5 py-4"
                >
                  <span className="text-xs text-zinc-400">{item.label}</span>
                  <span className="text-sm font-semibold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#262838] py-10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-zinc-400">
            {t.footer.rights.replace('{year}', String(currentYear))}
          </p>

          <div className="flex items-center gap-5">
            <a
              href={SOUNDCLOUD_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SoundCloud"
              className="text-zinc-400 hover:text-[#FF5500] transition-colors"
            >
              <SoundCloudIcon className="h-5 w-5" />
            </a>
            <a
              href={YOUTUBE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-zinc-400 hover:text-[#FF0000] transition-colors"
            >
              <YouTubeIcon className="h-5 w-5" />
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
