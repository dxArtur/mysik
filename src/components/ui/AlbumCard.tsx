import React from 'react';
import { Play } from 'lucide-react';

interface AlbumCardProps {
  title: string;
  artist: string;
  image: string;
  type?: 'album' | 'playlist' | 'artist';
}

const AlbumCard: React.FC<AlbumCardProps> = ({ title, artist, image, type = 'album' }) => {
  return (
    <div className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer">
      <div className="relative mb-4">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover rounded-lg shadow-lg"
        />
        <button className="absolute bottom-2 right-2 bg-green-500 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 hover:scale-110 transform transition-all duration-300 shadow-lg">
          <Play className="w-5 h-5 ml-0.5" />
        </button>
      </div>
      <h3 className="text-white font-semibold mb-1 line-clamp-1">{title}</h3>
      <p className="text-white/60 text-sm line-clamp-2">{artist}</p>
    </div>
  );
};

export default AlbumCard;