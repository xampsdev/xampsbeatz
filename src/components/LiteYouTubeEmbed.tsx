import { Play, X } from 'lucide-react';
import { useState } from 'react';
import { YouTubeIcon } from './icons/BrandIcons';

interface LiteYouTubeEmbedProps {
  videoId: string;
  playlistId?: string;
  title: string;
  clickLabel: string;
  closeLabel: string;
  fallbackImageUrl: string;
}

export function LiteYouTubeEmbed({
  videoId,
  playlistId,
  title,
  clickLabel,
  closeLabel,
  fallbackImageUrl,
}: LiteYouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(!videoId);

  const thumbnailSrc =
    !thumbFailed && videoId
      ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
      : fallbackImageUrl;

  const embedSrc = playlistId
    ? `https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(playlistId)}&autoplay=1&rel=0`
    : `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;

  if (isLoaded) {
    return (
      <div className="space-y-3">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setIsLoaded(false)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#262838] bg-[#181A26] px-3 py-1.5 text-xs font-medium text-zinc-200 hover:text-white cursor-pointer"
          >
            <X className="h-3.5 w-3.5" />
            <span>{closeLabel}</span>
          </button>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#262838] bg-black">
          <iframe
            title={title}
            src={embedSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#262838] bg-black">
      <button
        type="button"
        onClick={() => setIsLoaded(true)}
        aria-label={clickLabel}
        className="group relative block h-full w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-[#FF0000]"
      >
        <img
          src={thumbnailSrc}
          alt={title}
          referrerPolicy="no-referrer"
          onError={() => setThumbFailed(true)}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20 transition-opacity duration-200" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-xl transition-transform duration-150 group-hover:scale-110">
            <Play className="h-6 w-6 fill-current ml-0.5" />
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-zinc-100">
            <YouTubeIcon className="h-4 w-4 text-[#FF0000]" />
            <span>{clickLabel}</span>
          </span>
        </div>
      </button>
    </div>
  );
}
