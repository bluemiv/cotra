import React, { useEffect, useRef, useState } from 'react';
import { useMarketsQuery } from '@/hooks';
import { useBookmarkCoinStore } from '@/store';
import CoinPriceTable from '@/feature/coin/components/CoinPriceTable';

const BookmarkContainer = () => {
  const { bookmarkList } = useBookmarkCoinStore();
  const { data } = useMarketsQuery(
    {
      vsCurrency: 'krw',
      priceChangePercentage: '1h,24h,7d',
      order: 'market_cap_desc',
      perPage: 250,
      page: 1,
      ids: bookmarkList.filter((v) => !!v).join(','),
    },
    { onError: () => console.log('test') },
  );

  const rawDataSource = useRef<{ [key: string]: any }[]>([]);
  const [dataSource, setDataSource] = useState<{ [key: string]: any }[]>([]);

  useEffect(() => {
    const nextRawDataSource = (data || []) as { [key: string]: any }[];
    rawDataSource.current = nextRawDataSource;
    setDataSource(nextRawDataSource.filter((v) => bookmarkList.includes(v.id)));
  }, [data, bookmarkList]);

  return <CoinPriceTable currenyUnit="₩" dataSource={dataSource} />;
};

export default BookmarkContainer;
