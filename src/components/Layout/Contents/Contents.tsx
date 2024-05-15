import React from 'react';
import { TPropsWithChildren } from '@/types';

const Contents = ({ children }: TPropsWithChildren) => {
  return <main className="min-h-contents">{children}</main>;
};

export default Contents;
