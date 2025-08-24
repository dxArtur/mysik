import React, { useState } from 'react';
import { Plus, Upload } from 'lucide-react';

type Track = {
  title: string;
  artist: string;
  coverUrl: string;
  audioUrl: string;
};

type Props = {
  onAddTrack: (track: Track) => void;
};

const AddMusicPanel: React.FC<Props> = ({ onAddTrack }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setTitle(selected.name.replace(/\.[^/.]+$/, ''));
      setPreviewUrl(URL.createObjectURL(selected));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const audioUrl = URL.createObjectURL(file);

    onAddTrack({
      title: title.trim(),
      artist: artist.trim() || 'Artista desconhecido',
      coverUrl: coverUrl.trim() || 'https://via.placeholder.com/80',
      audioUrl,
    });

    // Reset
    setFile(null);
    setTitle('');
    setArtist('');
    setCoverUrl('');
    setPreviewUrl(null);
    setIsVisible(false);
  };

  const isValid = file && title.trim();

  return (
    <div className="p-4 rounded-md text-white max-w-xl mx-auto">
      {!isVisible ? (
        <button
          onClick={() => setIsVisible(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded text-white font-medium hover:from-purple-700 hover:to-pink-700 transition"
        >
          <Plus className="w-4 h-4" />
          Adicionar Música
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Nova Música
          </h2>

          <div>
            <label className="block mb-1 text-sm">Arquivo de áudio (.mp3)</label>
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="block w-full text-white/80 file:bg-transparent file:border-0 file:text-sm"
            />
          </div>

          {file && (
            <>
              <div>
                <label className="block mb-1 text-sm">Título</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Artista</label>
                <input
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">URL da capa</label>
                <input
                  type="url"
                  value={coverUrl}
                  onChange={(e) => setCoverUrl(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white"
                  placeholder="https://..."
                />
                {coverUrl && (
                  <img
                    src={coverUrl}
                    alt="Preview da capa"
                    className="mt-2 max-w-[80px] rounded border border-white/20"
                    onError={(e) =>
                      ((e.target as HTMLImageElement).src = 'https://via.placeholder.com/80')
                    }
                  />
                )}
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsVisible(false)}
                  className="flex-1 px-4 py-2 border border-white/20 rounded text-white hover:bg-white/10"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`flex-1 px-4 py-2 rounded text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-600 ${
                    isValid
                      ? 'hover:from-purple-700 hover:to-pink-700'
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                >
                  <Upload className="w-4 h-4 inline mr-2" />
                  Adicionar
                </button>
              </div>
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default AddMusicPanel;
