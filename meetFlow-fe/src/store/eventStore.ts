import { create } from "zustand";

interface EventState {
  selectedTimes: string[]; // Set 대신 배열 사용
  toggleTime: (time: string) => void;
}

export const useEventStore = create<EventState>((set) => ({
  selectedTimes: [], // 배열로 초기화
  toggleTime: (time) =>
    set((state) => {
      const newTimes = state.selectedTimes.includes(time)
        ? state.selectedTimes.filter((t) => t !== time) // 선택 해제
        : [...state.selectedTimes, time]; // 선택 추가

      return { selectedTimes: newTimes };
    }),
}));
