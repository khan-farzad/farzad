import { create } from "zustand";

interface IndexProps {
  idx: number;
  setIdx: (newIdx: number) => void;
}

const useIndex = create<IndexProps>((set) => ({
  idx: 0,
  setIdx: (newIdx: number) => set(() => ({ idx: newIdx })),
}));

export default useIndex;