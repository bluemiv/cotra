import React, { ChangeEvent, useEffect, useState } from 'react';
import { TPropsWithClassName } from '@/types';
import { joinClassNames } from '@/utils';
import { Icons } from '@/components';

interface TProps {
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number;
  options?: { label: string; value: string | number }[];
}

const Select = ({ value, options, className, onChange }: TPropsWithClassName<TProps>) => {
  const [selected, setSelected] = useState<string | number | null | undefined>(
    value ?? options?.[0]?.value,
  );

  useEffect(() => {
    if (!value) return;
    setSelected(value);
  }, [value]);

  return (
    <div className="relative text-sm sm:text-base">
      <select
        value={selected || ''}
        className={joinClassNames(
          'appearance-none outline-none block pl-sm pr-[2rem] py-xs rounded-md hover:bg-zinc-100 active:bg-zinc-200 cursor-pointer transition duration-200 ease-in-out',
          className,
        )}
        onChange={(e) => {
          setSelected(e.target.value);
          onChange?.(e);
        }}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Icons.ChevronDown className="absolute right-[0.5rem] top-[calc(50%-0.5rem)] h-[1rem]" />
    </div>
  );
};

export default Select;
