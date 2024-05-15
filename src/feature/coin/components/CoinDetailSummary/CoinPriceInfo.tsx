import React from 'react';
import { NO_DATA } from '@/constants';
import { TCoinCurrency, TCoinMarketData } from '@/feature/coin/types';
import { TPropsWithClassName } from '@/types';
import { joinClassNames, toMoneyFormat } from '@/utils';

interface TProps {
  currency: TCoinCurrency;
  marketData?: TCoinMarketData;
}

const CoinPriceInfo = ({ currency, marketData, className }: TPropsWithClassName<TProps>) => {
  const percentageInCurreny = marketData?.priceChangePercentage_24hInCurrency?.[currency] || 0;
  const percentage = marketData?.priceChangePercentage_24h || 0;

  const currencyUnit = { krw: '₩', usd: '$' }[currency];

  return (
    <div className={joinClassNames('flex flex-col gap-md items-center sm:items-end', className)}>
      <div className="flex gap-md items-end">
        <span className="font-bold text-xl sm:text-2xl">
          {marketData?.currentPrice?.[currency]
            ? toMoneyFormat(marketData?.currentPrice?.[currency], {
                prefix: currencyUnit,
              })
            : NO_DATA}
        </span>
        <span className={percentageInCurreny > 0 ? 'text-red-600' : 'text-blue-600'}>
          {percentageInCurreny || NO_DATA}%
        </span>
      </div>
      <div className="flex gap-md items-end text-sm">
        <span className="text-zinc-400">
          {marketData?.currentPrice?.btc
            ? toMoneyFormat(marketData?.currentPrice?.btc, {
                prefix: currencyUnit,
              })
            : NO_DATA}
        </span>
        <span className={percentage > 0 ? 'text-red-600' : 'text-blue-600'}>
          {percentage || NO_DATA}%
        </span>
      </div>
      <div className="flex text-sm gap-md sm:gap-xl">
        {[
          {
            label: '시가총액',
            value: marketData?.totalVolume?.[currency]
              ? toMoneyFormat(marketData?.totalVolume?.[currency], { prefix: currencyUnit })
              : NO_DATA,
          },
          {
            label: '24시간 거래대금',
            value: marketData?.priceChange_24hInCurrency?.[currency]
              ? toMoneyFormat(marketData?.priceChange_24hInCurrency?.[currency], {
                  prefix: currencyUnit,
                })
              : NO_DATA,
          },
        ].map(({ label, value }) => (
          <div key={label} className="flex-1 flex flex-col text-center sm:text-right gap-sm">
            <div>{label}</div>
            <div className="font-semibold">{value || NO_DATA}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinPriceInfo;
