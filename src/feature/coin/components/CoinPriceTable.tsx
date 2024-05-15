import React from 'react';
import { Icons, Link, PercentageLabel, Table } from '@/components';
import { replaceRoutePath, toMoneyFormat } from '@/utils';
import { useBookmarkCoinStore } from '@/store';
import { useToast } from '@/hooks';
import { ROUTE_PATH } from '@/constants';

interface TProps {
  dataSource: { [key: string]: any }[];
  currenyUnit: string;
}

const CoinPriceTable = ({ currenyUnit, dataSource }: TProps) => {
  const showToast = useToast();
  const { bookmarkList, setBookmarkList } = useBookmarkCoinStore();

  return (
    <Table
      rowKey="symbol"
      columns={[
        {
          title: '',
          dataIndex: 'id',
          key: 'bookmark',
          className: 'min-w-[1rem]',
          render: (id, record) => {
            const isMarked = bookmarkList.includes(id);
            return isMarked ? (
              <Icons.StarFill
                className="text-yellow-400 hover:text-yellow-300 active:text-yellow-500"
                onClick={() => {
                  setBookmarkList(bookmarkList.filter((v) => v !== id));
                  showToast(`${record.name}가 북마크에서 제외되었습니다.`);
                }}
              />
            ) : (
              <Icons.Star
                className="text-zinc-300 hover:text-zinc-400"
                onClick={() => {
                  setBookmarkList(Array.from(new Set([...bookmarkList, id])));
                  showToast(`${record.name}가 북마크에 추가되었습니다.`);
                }}
              />
            );
          },
        },
        {
          title: 'CoinName',
          dataIndex: 'name',
          render: (name, record) => (
            <Link
              className="flex items-center gap-xs font-semibold hover:text-brand-600 active:text-brand-700"
              href={replaceRoutePath(ROUTE_PATH.COIN_DETAIL, { id: record.id })}
            >
              <span>{name}</span>
              <Icons.BoxArrowUpRight className="hidden sm:block" />
            </Link>
          ),
        },
        {
          title: 'Symbol',
          dataIndex: 'symbol',
        },
        {
          title: 'Price',
          dataIndex: 'currentPrice',
          className: 'font-semibold',
          render: (price) => toMoneyFormat(price, { prefix: currenyUnit }),
        },
        {
          title: '1H',
          dataIndex: 'priceChangePercentage_1hInCurrency',
          className: 'hidden md:flex',
          render: (priceChangePercentage) => <PercentageLabel percentage={priceChangePercentage} />,
        },
        {
          title: '24H',
          dataIndex: 'priceChangePercentage_24hInCurrency',
          className: 'hidden md:flex',
          render: (priceChangePercentage) => <PercentageLabel percentage={priceChangePercentage} />,
        },
        {
          title: '7D',
          dataIndex: 'priceChangePercentage_7dInCurrency',
          className: 'hidden md:flex',
          render: (priceChangePercentage) => <PercentageLabel percentage={priceChangePercentage} />,
        },
        {
          title: '24H Volume',
          dataIndex: 'totalVolume',
          className: 'hidden sm:flex',
          render: (totalVolume) => toMoneyFormat(totalVolume, { prefix: currenyUnit }),
        },
      ]}
      dataSource={dataSource}
    />
  );
};

export default CoinPriceTable;
