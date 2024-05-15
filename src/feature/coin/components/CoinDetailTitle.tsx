import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icons } from '@/components';
import { useBookmarkCoinStore } from '@/store';
import { useToast } from '@/hooks';
import { NO_DATA } from '@/constants';

interface TProps {
  detailData: { [key: string]: any };
}
const CoinDetailTitle = ({ detailData }: TProps) => {
  const nav = useNavigate();
  const { bookmarkList, setBookmarkList } = useBookmarkCoinStore();
  const showToast = useToast();

  const isBookmarked = bookmarkList.includes(detailData?.id);

  const currencyLabel =
    detailData?.localization?.ko || detailData?.localization?.en || detailData?.name;
  return (
    <div className="flex gap-sm items-center">
      <button
        className="items-center gap-xs bg-zinc-50 dark:bg-zinc-700 hover:shadow shadow-sm hidden sm:flex px-sm py-xs rounded"
        onClick={() => nav(-1)}
      >
        <Icons.BoxArrowLeft /> Back
      </button>
      {isBookmarked ? (
        <Icons.StarFill
          className="text-yellow-400 hover:text-yellow-300 active:text-yellow-500"
          onClick={() => {
            setBookmarkList(bookmarkList.filter((v) => v !== detailData?.id));
            showToast('북마크에서 제외되었습니다.');
          }}
        />
      ) : (
        <Icons.Star
          className="text-zinc-300 hover:text-zinc-400"
          onClick={() => {
            setBookmarkList(Array.from(new Set([...bookmarkList, detailData?.id])));
            showToast('북마크에 추가되었습니다.');
          }}
        />
      )}
      <div className="w-[30px] h-[30px]">
        <img className="w-auto h-full" src={detailData?.image?.small} alt={currencyLabel} />
      </div>
      <div className="font-bold text-lg">{`${currencyLabel || NO_DATA}(${detailData?.symbol})`}</div>
    </div>
  );
};

export default CoinDetailTitle;
