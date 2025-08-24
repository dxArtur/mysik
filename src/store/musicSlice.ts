import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Track } from "../types/track";

interface MusicState {
  songs: Track[];
  currentSong: Track | null;
  isPlaying: boolean;
  volume: number;
  liked: string[];
}

const initialState: MusicState = {
  songs: [],
  currentSong: null,
  isPlaying: false,
  volume: 75,
  liked: [],
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setSongs: (state, action: PayloadAction<Track[]>) => {
      state.songs = action.payload;
    },
    addSong: (state, action: PayloadAction<Track>) => {
      state.songs.push(action.payload);
    },
    playSong: (state, action: PayloadAction<Track>) => {
      state.currentSong = action.payload;
      state.isPlaying = true;
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    toggleLike: (state, action: PayloadAction<string>) => {
      const songId = action.payload;
      if (state.liked.includes(songId)) {
        state.liked = state.liked.filter((id) => id !== songId);
      } else {
        state.liked.push(songId);
      }
    },
  },
});

export const { setSongs, addSong, playSong, togglePlay, setVolume, toggleLike } =
  musicSlice.actions;

export default musicSlice.reducer;
