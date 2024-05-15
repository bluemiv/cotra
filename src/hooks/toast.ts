import { useToastUIStore } from '@/store';

export const useToast = () => {
  const { setToastMessage } = useToastUIStore();
  return (message: string) => {
    setToastMessage(message);
  };
};
