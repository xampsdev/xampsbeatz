export type Language = 'pt-BR' | 'en';

export interface StatItem {
  value: string;
  label: string;
}

export interface HighlightItem {
  label: string;
  value: string;
}

export interface TranslationDictionary {
  nav: {
    playlists: string;
    about: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subtitle: string;
    openPlaylists: string;
    stats: StatItem[];
  };
  playlists: {
    heading: string;
    subheading: string;
    soundcloudTitle: string;
    soundcloudDesc: string;
    youtubeTitle: string;
    youtubeDesc: string;
    loadSoundCloud: string;
    closeEmbed: string;
    watchChannel: string;
    liteClickToLoad: string;
  };
  about: {
    heading: string;
    lead: string;
    body: string;
    highlights: HighlightItem[];
  };
  footer: {
    rights: string;
  };
}
