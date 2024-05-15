import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { replaceRoutePath } from '@/utils/url';
import { ROUTE_PATH } from '@/constants';
import { Tabs } from '@/components';
import { BookmarkContainer, MarketPriceContainer } from '@/feature/coin/components';

enum TAB_KEY {
  MARKET = 'market',
  BOOKMARK = 'bookmark',
}

const MarketPage = () => {
  const nav = useNavigate();
  const pathParams = useParams();
  const defaultTabKey = pathParams?.page || 'market';

  const [curTabKey, setCurTabKey] = useState<string | number>(defaultTabKey);

  useEffect(() => {
    setCurTabKey(pathParams?.page ?? curTabKey);
  }, [pathParams]);

  return (
    <main className="min-h-contents flex justify-center px-md py-lg">
      <div className="max-w-[1440px] w-full flex flex-col gap-lg">
        <Tabs
          activeTabKey={curTabKey}
          items={[
            { label: '가상자산 시세 목록', tabKey: TAB_KEY.MARKET },
            { label: '북마크 목록', tabKey: TAB_KEY.BOOKMARK },
          ]}
          onChange={(tabKey) => {
            setCurTabKey(tabKey);
            nav(replaceRoutePath(ROUTE_PATH.MARKETS, { page: tabKey }));
          }}
        />
        {curTabKey === TAB_KEY.MARKET ? <MarketPriceContainer /> : <BookmarkContainer />}
      </div>
    </main>
  );
};

export default MarketPage;
