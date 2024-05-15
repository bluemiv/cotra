import React, { ChangeEventHandler, FocusEventHandler, forwardRef } from 'react';
import { TPropsWithClassName } from '@/types';
import { joinClassNames } from '@/utils';

interface TProps {
  name?: string;
  type?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
}

const Input = forwardRef<HTMLInputElement, TPropsWithClassName<TProps>>(
  ({ name, type = 'text', placeholder, className, onBlur, onChange }, ref) => {
    return (
      <input
        ref={ref}
        name={name}
        placeholder={placeholder}
        className={joinClassNames(
          'py-xs px-sm outline-none rounded-md bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 focus:border-brand-400',
          className,
        )}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
  },
);

export default Input;
