import React, { useEffect, useRef, useState } from 'react';
import lodash from 'lodash';
import { Icons, Select } from '@/components';
import { useMarketsQuery } from '@/hooks';
import { TCoinCurrency, TMarketsQueryParams } from '@/feature/coin/types';
import { useBookmarkCoinStore } from '@/store';
import CoinPriceTable from '@/feature/coin/components/CoinPriceTable';
import { useLocation } from 'react-router-dom';

const MarketPriceContainer = () => {
  const { bookmarkList } = useBookmarkCoinStore();
  const location = useLocation();
  const [searchParams, setSearchParams] = useState<TMarketsQueryParams>({
    vsCurrency: 'krw',
    priceChangePercentage: '1h,24h,7d',
    order: 'market_cap_desc',
    perPage: 10,
    page: 1,
  });
  const { data } = useMarketsQuery(searchParams, { onError: () => console.log('test') });

  const rawDataSource = useRef<{ [key: string]: any }[]>([]);
  const [dataSource, setDataSource] = useState<{ [key: string]: any }[]>([]);

  const resetDataSource = () => {
    rawDataSource.current = [];
    setDataSource([]);
  };

  useEffect(() => {
    resetDataSource();
  }, [location]);

  useEffect(() => {
    if (!lodash.isArray(data)) return;
    const nextRawDataSource = [...rawDataSource.current, ...data];
    rawDataSource.current = nextRawDataSource;
    setDataSource(nextRawDataSource);
  }, [data]);

  const isUsdCurrency = searchParams.vsCurrency === 'usd';
  const currenyUnit = isUsdCurrency ? '$' : '₩';

  return (
    <div className="flex flex-col gap-md">
      <div className="flex items-center justify-between">
        <div>총 {dataSource.length}건</div>
        <div className="flex items-center justify-end gap-md">
          <Select
            options={[
              { label: '전체보기', value: 'all' },
              { label: '북마크', value: 'bookmark' },
            ]}
            onChange={(e) => {
              const isBookmark = e.target.value === 'bookmark';
              const filteredDataSource = isBookmark
                ? rawDataSource.current.filter((v) => bookmarkList.includes(v.id))
                : rawDataSource.current;
              setDataSource(filteredDataSource);
            }}
          />
          <Select
            options={[
              { label: 'KRW 보기', value: 'krw' },
              { label: 'USD 보기', value: 'usd' },
            ]}
            onChange={(e) => {
              const currency = e.target.value as TCoinCurrency;
              setSearchParams({ ...searchParams, vsCurrency: currency, page: 1 });
              resetDataSource();
            }}
          />
          <Select
            options={[
              { label: '10개 보기', value: 10 },
              { label: '30개 보기', value: 30 },
              { label: '50개 보기', value: 50 },
            ]}
            onChange={(e) => {
              const perPage = Number(e.target.value);
              setSearchParams({ ...searchParams, perPage, page: 1 });
              resetDataSource();
            }}
          />
        </div>
      </div>
      <CoinPriceTable currenyUnit={currenyUnit} dataSource={dataSource} />
      <button
        className="w-full border dark:border-zinc-700 p-md rounded shadow-sm hover:shadow-md flex items-center justify-center gap-sm"
        onClick={() => setSearchParams({ ...searchParams, page: (searchParams?.page || 1) + 1 })}
      >
        <Icons.Plus />
        <span>더보기</span>
      </button>
    </div>
  );
};

export default MarketPriceContainer;
