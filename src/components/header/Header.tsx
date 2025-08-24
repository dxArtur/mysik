import React from 'react';
import { Search, User, Bell } from 'lucide-react';
import AddMusicPanel from '../music/AddMusicPanel';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mysic
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Sobre</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar músicas, artistas..."
              className="bg-white/10 border border-white/20 rounded-full pl-10 pr-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
            />
          </div>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Bell className="w-5 h-5 text-white/80" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <User className="w-5 h-5 text-white/80" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
