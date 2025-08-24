import React, { useState } from "react";
import ButtonAddMusic from "../buttons/ButtonAddMusic";
import TrackCard from "../music/TrackCard";
import MusicPlayer from "../music/MusicPlayer";
import { Track } from "types/track";

const MainContent: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);

  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);


  const handleAddTrack = (track: Omit<Track, 'id'>) => {
    const newTrack = {
      ...track,
      id: `track-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
    };
    setTracks((prev) => [...prev, newTrack]);
  };

  return (
    <main className="flex-1 p-6 pb-32 overflow-y-auto mx-auto text-white">
      {/* Hero Section */}
      <section className="mb-8 mx-auto text-white">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-2">Bem-vindo de volta!</h2>
            <p className="text-lg opacity-90 mb-6">
              Descubra nova música baseada no que você ama
            </p>

            <ButtonAddMusic onAddTrack={handleAddTrack} />
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 translate-x-16" />
        </div>
      </section>

      {/* Lista de músicas */}
      <div className="mx-auto space-y-6">
      {tracks.length === 0 ? (
        <p className="text-white/70 text-center">Nenhuma música adicionada ainda.</p>
      ) : (
        tracks.map((track, index) => (
          <TrackCard
            key={index}
            track={track}
            onSelect={setCurrentTrack}
         />
        ))
      )}
    </div>
    {currentTrack && (
    <MusicPlayer
      trackId={currentTrack.id}
      src={currentTrack.audioUrl}
      title={currentTrack.title}
      artist={currentTrack.artist}
      coverUrl={currentTrack.coverUrl}
      autoPlay={true}
    />
  )}
    </main>
  );
};

export default MainContent;
