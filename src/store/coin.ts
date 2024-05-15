import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TState = {
  bookmarkList: string[];
};

type TActions = {
  setBookmarkList: (bookmarkList: string[]) => void;
};

type TStore = TState & TActions;

const storageOptions = {
  name: 'coinStore',
};

const useCoinStore = create(
  persist<TStore>(
    (set) => ({
      bookmarkList: [],
      setBookmarkList: (bookmarkList: string[]) =>
        set((_) => ({
          bookmarkList,
        })),
    }),
    storageOptions,
  ),
);

export const useBookmarkCoinStore = () =>
  useCoinStore(({ bookmarkList, setBookmarkList }) => ({ bookmarkList, setBookmarkList }));
