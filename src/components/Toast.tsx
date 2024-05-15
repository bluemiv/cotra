import React, { useEffect, useState } from 'react';
import { useToastUIStore } from '@/store';
import { joinClassNames } from '@/utils';
import { Icons } from '@/components';

const Toast = () => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const { toastMessage, setToastMessage } = useToastUIStore();

  useEffect(() => {
    if (!toastMessage) return;

    setShowToast(true);
    const timer = setTimeout(() => {
      setShowToast(false);
      setToastMessage('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [toastMessage]);

  const visible = showToast && toastMessage;
  return (
    <div
      className={joinClassNames(
        'fixed left-[calc(50%-150px)] bg-zinc-100 px-lg py-md max-w-[320px] leading-8 break-all line-clamp-4 overflow-y-hidden max-h-[150px] rounded-md z-10 shadow-md',
        'transition-all duration-200 ease-in-out flex items-center gap-sm text-sm',
        visible ? ' top-[80px]' : 'top-[-300px]',
      )}
    >
      <Icons.InfoCircle />
      {toastMessage}
    </div>
  );
};

export default Toast;
