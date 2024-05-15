import { create } from 'zustand';

type TState = {
  toastMessage: string;
};

type TAction = {
  setToastMessage: (toastMessage: string) => void;
};

type TStore = TState & TAction;

const useUIStore = create<TStore>()((set) => ({
  toastMessage: '',
  setToastMessage: (toastMessage: string) => set((_) => ({ toastMessage })),
}));

export const useToastUIStore = () =>
  useUIStore(({ toastMessage, setToastMessage }) => ({
    toastMessage,
    setToastMessage,
  }));
