import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCoinDetailQuery } from '@/hooks';
import { CoinCalculator, CoinDetailSummary } from '@/feature/coin/components';
import CoinDetailTitle from '@/feature/coin/components/CoinDetailTitle';
import { Select } from '@/components';
import { TCoinCurrency } from '@/feature/coin/types';
import CoinDescription from '../../feature/coin/components/CoinDescription';

const CoinDetailPage = () => {
  const pathParams = useParams();
  const [currentCurrency, setCurrentCurrency] = useState<TCoinCurrency>('krw');

  const { data } = useCoinDetailQuery({ id: pathParams.id || '' });

  return (
    <main className="min-h-contents flex justify-center py-lg px-md">
      <div className="max-w-[1440px] w-full flex flex-col gap-lg">
        <div className="flex justify-between pb-md mb-md border-b">
          <CoinDetailTitle detailData={data} />
          <Select
            value={currentCurrency}
            options={[
              { label: 'KRW 보기', value: 'krw' },
              { label: 'USD 보기', value: 'usd' },
            ]}
            onChange={(e) => setCurrentCurrency(e.target.value as TCoinCurrency)}
          />
        </div>
        <CoinDetailSummary currency={currentCurrency} detailData={data} />
        <CoinCalculator currency={currentCurrency} detailData={data} />
        <CoinDescription detailData={data} />
      </div>
    </main>
  );
};

export default CoinDetailPage;
