import { useState, useEffect } from 'react';

// Define o tipo para a música que será curtida
type LikedTrack = {
  id: string; 
  title: string;
  artist: string;
  coverUrl: string;
  audioUrl: string;
};

// Nome do cache para as músicas curtidas
const LIKED_TRACKS_CACHE = 'liked-tracks-cache';

export const useLikedTracks = () => {
  const [likedTracks, setLikedTracks] = useState<LikedTrack[]>([]);

  // Efeito para carregar as músicas curtidas do cache
  useEffect(() => {
    const loadLikedTracks = async () => {
      try {
        const cache = await caches.open(LIKED_TRACKS_CACHE);
        // O Service Worker lida com a requisição de um arquivo que serve como nosso "banco de dados"
        const response = await cache.match('/liked-tracks-data');
        if (response) {
          const data = await response.json();
          setLikedTracks(data);
        }
      } catch (error) {
        console.error('Falha ao carregar músicas curtidas do cache:', error);
      }
    };
    if ('caches' in window) {
      loadLikedTracks();
    }
  }, []);

  // Função para salvar as músicas curtidas no cache
  const saveLikedTracksToCache = async (tracks: LikedTrack[]) => {
    try {
      if ('caches' in window) {
        const cache = await caches.open(LIKED_TRACKS_CACHE);
        const jsonResponse = new Response(JSON.stringify(tracks), {
          headers: { 'Content-Type': 'application/json' },
        });
        await cache.put('/liked-tracks-data', jsonResponse);
      }
    } catch (error) {
      console.error('Falha ao salvar músicas curtidas no cache:', error);
    }
  };

  // Função para curtir/descurtir uma música
  const toggleLike = (track: LikedTrack) => {
    const isLiked = likedTracks.some((t) => t.id === track.id);
    let newLikedTracks: LikedTrack[];

    if (isLiked) {
      newLikedTracks = likedTracks.filter((t) => t.id !== track.id);
    } else {
      newLikedTracks = [...likedTracks, track];
    }

    setLikedTracks(newLikedTracks);
    saveLikedTracksToCache(newLikedTracks);
  };

  return { likedTracks, toggleLike };
};