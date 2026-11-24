import type { Language, TranslationDictionary } from '../types';

export const translations: Record<Language, TranslationDictionary> = {
  'pt-BR': {
    nav: {
      playlists: 'Playlists',
      about: 'Sobre',
    },
    hero: {
      kicker: 'São Paulo · Trap, Hip Hop & Rap · FL Studio',
      headline: 'Beats originais com peso, textura e identidade.',
      subtitle: 'Mais de 10 anos transformando ideias em instrumentais autorais.',
      openPlaylists: 'Ouvir Playlists',
      stats: [
        { value: '10+ Anos', label: 'Produção em FL Studio' },
        { value: 'Trap & Boom Bap', label: 'Subgêneros autorais' },
        { value: 'SoundCloud & YouTube', label: 'Streaming integrado' },
      ],
    },
    playlists: {
      heading: 'Playlists & Vídeos Oficiais',
      subheading:
        'Reprodutores oficiais incorporados sob demanda para manter a navegação leve e sem travamentos.',
      soundcloudTitle: 'Playlist SoundCloud',
      soundcloudDesc: 'Catálogo contínuo de beats de Trap, Hip Hop e Rap no perfil oficial.',
      youtubeTitle: 'Playlist YouTube',
      youtubeDesc: 'Beats oficiais acompanhados de visualizers originais. Assista no YouTube.',
      loadSoundCloud: 'Carregar Player SoundCloud',
      closeEmbed: 'Fechar Player',
      watchChannel: 'Abrir Canal no YouTube',
      liteClickToLoad: 'Clique para reproduzir a playlist no YouTube',
    },
    about: {
      heading: 'Quem é xampsbeatz?',
      lead: 'Criatividade, técnica e mais de uma década dedicada à música urbana.',
      body: 'Beatmaker com mais de 10 anos de experiência, XAMPSBEATZ transforma seu hobby favorito — produzir música e dar vida a ideias — em beats que unem criatividade e técnica. Utilizando o FL Studio, dedica-se principalmente a rap, hip-hop e trap, explorando novas texturas e sonoridades para entregar produções autênticas e impactantes.',
      highlights: [
        { label: 'DAW Principal', value: 'FL Studio' },
        { label: 'Estilos', value: 'Trap · Hip Hop · Rap' },
        { label: 'Contato Direto', value: 'xampsbeatz@gmail.com' },
      ],
    },
    footer: {
      rights: '© {year} XAMPSBEATZ — Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      playlists: 'Playlists',
      about: 'About',
    },
    hero: {
      kicker: 'São Paulo · Trap, Hip Hop & Rap · FL Studio',
      headline: 'Original beats built with weight, texture, and identity.',
      subtitle: 'Over 10 years turning ideas into original instrumentals.',
      openPlaylists: 'Stream Playlists',
      stats: [
        { value: '10+ Years', label: 'FL Studio production' },
        { value: 'Trap & Boom Bap', label: 'Signature subgenres' },
        { value: 'SoundCloud & YouTube', label: 'Synced streaming' },
      ],
    },
    playlists: {
      heading: 'Official Playlists & Videos',
      subheading:
        'On-demand official embeds engineered to keep initial page load fast and responsive.',
      soundcloudTitle: 'SoundCloud Playlist',
      soundcloudDesc:
        'Continuous Trap, Hip Hop, and Rap instrumental rotation from the official profile.',
      youtubeTitle: 'YouTube Playlist',
      youtubeDesc: 'Official beats paired with original visualizers. Watch on YouTube.',
      loadSoundCloud: 'Load SoundCloud Player',
      closeEmbed: 'Close Player',
      watchChannel: 'Open YouTube Channel',
      liteClickToLoad: 'Click to load YouTube playlist player',
    },
    about: {
      heading: 'Who is xampsbeatz?',
      lead: 'Creativity, technique, and over a decade dedicated to urban music.',
      body: 'With over 10 years of experience, XAMPSBEATZ turns his favorite hobby — producing music and bringing ideas to life — into beats that blend creativity and technical skill. Using FL Studio, he focuses mainly on rap, hip-hop, and trap, exploring new textures and sounds to deliver authentic and impactful productions.',
      highlights: [
        { label: 'Primary DAW', value: 'FL Studio' },
        { label: 'Genres', value: 'Trap · Hip Hop · Rap' },
        { label: 'Direct Booking', value: 'xampsbeatz@gmail.com' },
      ],
    },
    footer: {
      rights: '© {year} XAMPSBEATZ — All rights reserved.',
    },
  },
};
