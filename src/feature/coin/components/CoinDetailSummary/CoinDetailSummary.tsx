import React from 'react';
import { Link } from '@/components';
import { NO_DATA } from '@/constants';
import { TCoinCurrency, TCoinDetailInfo } from '@/feature/coin/types';
import CoinPriceInfo from './CoinPriceInfo';

interface TProps {
  detailData: TCoinDetailInfo;
  currency: TCoinCurrency;
}

const CoinDetailSummary = ({ currency, detailData }: TProps) => {
  return (
    <div className="flex flex-col gap-xl sm:gap-md sm:flex-row justify-between">
      <div className="flex flex-col gap-md">
        {[
          { label: '시가총액', value: `${detailData?.marketCapRank}위` },
          {
            label: '웹사이트',
            value: (
              <div className="flex flex-col gap-md">
                {(detailData?.links?.homepage || [])
                  .filter((v: string) => !!v)
                  .map((link: string) => (
                    <Link key={link} href={link}>
                      {link}
                    </Link>
                  ))}
              </div>
            ),
          },
        ].map(({ label, value }) => (
          <div key={label} className="flex text-sm">
            <div className="min-w-[100px]">{label}</div>
            <div className="font-semibold">{value || NO_DATA}</div>
          </div>
        ))}
      </div>
      <CoinPriceInfo currency={currency} marketData={detailData?.marketData} />
    </div>
  );
};

export default CoinDetailSummary;
