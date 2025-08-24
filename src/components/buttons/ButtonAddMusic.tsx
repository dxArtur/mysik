// components/AddMusicButton.tsx
import React, { useState } from "react";
import { Plus, Upload } from "lucide-react";

type Track = {
  title: string;
  artist: string;
  coverUrl: string;
  audioUrl: string;
};

type Props = {
  onAddTrack: (track: Track) => void;
};

const AddMusicButton: React.FC<Props> = ({ onAddTrack }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [coverUrl, setCoverUrl] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setTitle(selected.name.replace(/\.[^/.]+$/, ""));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const newTrack: Track = {
      title: title.trim(),
      artist: artist.trim() || "Artista desconhecido",
      coverUrl: coverUrl.trim() || "https://via.placeholder.com/80",
      audioUrl: URL.createObjectURL(file),
    };

    onAddTrack(newTrack); // envia para o MainContent

    // Reset
    setFile(null);
    setTitle("");
    setArtist("");
    setCoverUrl("");
    setIsVisible(false);
  };

  const handleCancel = () => {
    setFile(null);
    setTitle("");
    setArtist("");
    setCoverUrl("");
    setIsVisible(false);
  };

  const isValid = file && title.trim();

  return (
    <>
      {!isVisible ? (
        <button
          onClick={() => setIsVisible(true)}
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2 shadow hover:shadow-md"
        >
          <Plus className="w-5 h-5" />
          Adicionar Música
        </button>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-gray-900 p-6 rounded-xl border border-white/10 shadow-lg max-w-md w-full"
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Nova Música
          </h2>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Escolha um arquivo (.mp3)</label>
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-white bg-white/10 border border-white/20 rounded px-3 py-2 file:hidden focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {file && (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Título</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Artista</label>
                <input
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">URL da capa</label>
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
                    className="mt-2 w-20 h-20 object-cover rounded border border-white/20"
                    onError={(e) =>
                      ((e.target as HTMLImageElement).src = "https://via.placeholder.com/80")
                    }
                  />
                )}
              </div>
            </>
          )}

          <div className="flex gap-4 pt-2">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 px-4 py-2 border border-white/20 rounded text-white hover:bg-white/10 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={!isValid}
              className={`flex-1 px-4 py-2 rounded text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-600 ${
                isValid
                  ? "hover:from-purple-700 hover:to-pink-700"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              <Upload className="w-4 h-4 inline mr-2" />
              Adicionar
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default AddMusicButton;
