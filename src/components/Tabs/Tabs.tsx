import React, { ReactNode } from 'react';
import Tab from './Tab';

type TTabKey = string | number;

interface TProps {
  activeTabKey?: TTabKey;
  items: { label: ReactNode; tabKey: TTabKey }[];
  onChange?: (tagKey: TTabKey) => void;
}

const Tabs = ({ activeTabKey, items, onChange }: TProps) => {
  return (
    <div className="bg-zinc-100 flex rounded-md p-xs gap-xs dark:bg-zinc-900">
      {items.map((item) => (
        <Tab
          key={item.tabKey}
          onClick={() => {
            if (item.tabKey === activeTabKey) return;
            onChange?.(item.tabKey);
          }}
          active={item.tabKey === activeTabKey}
        >
          {item.label}
        </Tab>
      ))}
    </div>
  );
};

export default Tabs;
