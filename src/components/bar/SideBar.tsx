import React from 'react';
import { Home, Search, Library, Plus, Heart, Music, Radio, Headphones } from 'lucide-react';
import { useLikedTracks } from '../../hooks/userLikedTracks';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Início', active: true },
    { icon: Search, label: 'Buscar' },
    { icon: Library, label: 'Sua Biblioteca' },
  ];

  const { likedTracks, toggleLike } = useLikedTracks();

  return (
    <aside className="w-64 bg-black/40 backdrop-blur-md border-r border-white/10 p-6 overflow-y-auto">
      <nav className="space-y-2 mb-8">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all hover:bg-white/10 ${
              item.active ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="border-t border-white/10 pt-4">
        <h3 className="text-white/50 text-sm font-medium mb-3 px-3">Músicas que você curtiu</h3>
        <div className="space-y-1">
          {likedTracks.length === 0 ? (
            <p className="px-3 text-white/50 text-sm">Nenhuma música curtida ainda.</p>
          ) : (
            likedTracks.map((track) => (
              <div
                key={track.id}
                className="flex items-center justify-between px-3 py-2 text-white/70 rounded-lg transition-all text-sm truncate"
              >
                <div className="flex-1 truncate">
                  <span className="truncate">{track.title}</span>
                </div>
                {/* Botão para descurtir a música, maior e mais visível */}
                <button
                  onClick={() => toggleLike(track)}
                  className="p-1 rounded-full text-red-500 hover:text-red-400 transition-colors"
                >
                  <Heart className="w-5 h-5 fill-current" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="border-t border-white/10 pt-4">
        <h3 className="text-white/50 text-sm font-medium mb-3 px-3">Outras Playlists</h3>
        <div className="space-y-1">
          {['Descobertas da Semana', 'Chill Vibes', 'Workout Mix'].map((playlist) => (
            <a
              key={playlist}
              href="#"
              className="block px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all text-sm"
            >
              {playlist}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;