import React from 'react';
import lodash from 'lodash';
import { NO_DATA } from '@/constants';

interface TProps {
  percentage?: number;
  defaultValue?: string;
}

const PercentageLabel = ({ percentage, defaultValue = NO_DATA }: TProps) => {
  if (lodash.isNil(percentage)) return <span>{defaultValue}</span>;

  const _percentage = Math.round(percentage * 100) / 100;
  const label = `${_percentage}%`;
  const isBear = _percentage < 0;
  return (
    <span
      className={isBear ? 'text-blue-600 dark:text-blue-400' : 'text-red-600 dark:text-red-400'}
    >
      {label}
    </span>
  );
};

export default PercentageLabel;
