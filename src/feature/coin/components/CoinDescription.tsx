import React from 'react';
import { NO_DATA } from '@/constants';
import { TCoinDetailInfo } from '@/feature/coin/types';

interface TProps {
  detailData?: TCoinDetailInfo;
}

const CoinDescription = ({ detailData }: TProps) => {
  const description = detailData?.description?.ko || detailData?.description?.en || '';
  return (
    <div className="flex flex-col">
      <div className="pb-md mb-md border-b text-center font-semibold">코인 설명</div>
      <div
        className="leading-8 whitespace-pre-wrap break-all [&_a]:underline [&_a:hover]:text-black"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default CoinDescription;
