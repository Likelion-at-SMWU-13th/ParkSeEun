import { create } from "zustand";

const useMusicStore = create((set) => ({
  songs: [],
  addSong: (song) => {
    const title = song.title.trim();
    if (!title) return;
    set((state) => ({
      songs: [...state.songs, { id: Date.now(), song, liked: false }],
    }));
  },
  removeSong: (id) =>
    set((state) => ({
      songs: state.songs.filter((song) => song.id !== id),
    })),
  likeSong: (id) =>
    set((state) => ({
      songs: state.songs.map((song) =>
        song.id === id ? { ...song, liked: !song.liked } : song
      ),
    })),
}));

export default useMusicStore;
