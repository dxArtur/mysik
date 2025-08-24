import { Track } from "types/track";

  interface TrackCardProps {
    track: Track;
    onSelect: (track: Track | null) => void;
  }
  
  const TrackCard: React.FC<TrackCardProps> = ({ track, onSelect }) => {
    return (
      <div
        onClick={() => onSelect(track)}
        className="cursor-pointer flex items-center gap-6 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-md rounded-xl border border-white/10 shadow-md hover:shadow-lg hover:brightness-110 transition"
      >
        <img
          src={track.coverUrl}
          alt={track.title}
          className="w-20 h-20 rounded-lg object-cover shadow-sm border border-white/10"
          onError={(e) =>
            ((e.target as HTMLImageElement).src = "https://via.placeholder.com/80")
          }
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">{track.title}</h3>
          <p className="text-sm text-white/60">{track.artist}</p>
        </div>
      </div>
    );
  };
  
  export default TrackCard;
  