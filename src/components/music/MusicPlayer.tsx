import React, { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Shuffle,
  Repeat,
  Heart,
} from "lucide-react";
import { useLikedTracks } from "../../hooks/userLikedTracks";
import { Track } from "types/track";

type MusicPlayerProps = {
  src: string;
  title?: string;
  artist?: string;
  coverUrl?: string;
  autoPlay?: boolean;
  trackId: string;
};

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  src,
  title = "Título da Música",
  artist = "Artista",
  coverUrl = "https://via.placeholder.com/60",
  autoPlay = false,
  trackId,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(75);
  const [isSeeking, setIsSeeking] = useState(false);

  const { likedTracks, toggleLike } = useLikedTracks();
  const isLiked = likedTracks.some((t) => t.id === trackId);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onTimeUpdate = () => {
      if (!isSeeking) setCurrentTime(audio.currentTime);
    };
    audio.volume = volume / 100;
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [volume, isSeeking]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (autoPlay) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.warn("Autoplay falhou:", e));
    } else {
      setIsPlaying(false);
    }
  }, [src, autoPlay]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Erro ao reproduzir:", err);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
    setCurrentTime(newTime);
  };

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newVolume = (clickX / rect.width) * 100;
    setVolume(Math.max(0, Math.min(100, newVolume)));
  };

  const formatTime = (time: number) =>
    isNaN(time) ? "00:00" : new Date(time * 1000).toISOString().substring(14, 19);

  const likedTrackObject: Track = {
    id: trackId,
    title,
    artist,
    audioUrl: src,
    coverUrl,
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10 px-6 py-4 z-50">
      <audio ref={audioRef} src={src} />
      <div className="flex items-center justify-between">
        {/* Song Info */}
        <div className="flex items-center space-x-4 flex-1">
          <img src={coverUrl} alt="Album Cover" className="w-14 h-14 rounded-lg" />
          <div>
            <h4 className="text-white font-medium">{title}</h4>
            <p className="text-white/60 text-sm">{artist}</p>
          </div>
          <button
            onClick={() => toggleLike(likedTrackObject)}
            data-cy="player-heart-button" // Adicionado para o teste 1 e 2
            className={`p-2 rounded-full transition-colors ${
              isLiked ? "text-red-500 hover:text-red-400" : "text-white/60 hover:text-white"
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
          </button>
        </div>
        {/* Controls */}
        <div className="flex flex-col items-center space-y-2 flex-2">
          <div className="flex items-center space-x-4">
            <button className="text-white/60 hover:text-white">
              <Shuffle className="w-5 h-5" />
            </button>
            <button className="text-white/60 hover:text-white">
              <SkipBack className="w-6 h-6" />
            </button>
            <button
              onClick={togglePlay}
              data-cy="player-play-button" // Adicionado para o teste 3 e 4
              className="bg-white text-black p-3 rounded-full hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>
            <button className="text-white/60 hover:text-white">
              <SkipForward className="w-6 h-6" />
            </button>
            <button className="text-white/60 hover:text-white">
              <Repeat className="w-5 h-5" />
            </button>
          </div>
          {/* Progress Bar */}
          <div className="flex items-center space-x-3 w-full max-w-md">
            <span data-cy="player-current-time" className="text-white/60 text-xs">{formatTime(currentTime)}</span> {/* Adicionado para o teste 4 */}
            <div
              className="flex-1 bg-white/20 rounded-full h-1 cursor-pointer"
              onClick={handleProgressClick}
            >
              <div
                className="bg-white rounded-full h-1 transition-all"
                style={{
                  width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                }}
              />
            </div>
            <span className="text-white/60 text-xs">{formatTime(duration)}</span>
          </div>
        </div>
        {/* Volume */}
        <div className="flex items-center space-x-3 flex-1 justify-end">
          <Volume2 className="w-5 h-5 text-white/60" />
          <div
            data-cy="player-volume-bar" // Adicionado para o teste 5
            className="w-24 bg-white/20 rounded-full h-1 cursor-pointer"
            onClick={handleVolumeClick}
          >
            <div
              className="bg-white rounded-full h-1 transition-all"
              style={{ width: `${volume}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;