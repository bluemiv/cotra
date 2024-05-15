import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Icons, Input } from '@/components';
import { TCoinCurrency, TCoinDetailInfo } from '@/feature/coin/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { toMoneyFormat } from '@/utils';

const schema = z.object({
  inputCurrency: z
    .string()
    .min(1, { message: '값을 입력해주세요.' })
    .regex(/^\d+(\.\d+)?$/, { message: '올바른 입력 값이 아닙니다.' })
    .regex(/^\d+(\.\d{0,8})?$/, { message: '소숫점은 8자리까지만 입력 가능합니다.' }),
});

interface TProps {
  currency: TCoinCurrency;
  detailData?: TCoinDetailInfo;
}

const CoinCalculator = ({ currency, detailData }: TProps) => {
  const [calcPrice, setCalcPrice] = useState<number>(0);
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      inputCurrency: '0',
    },
  });

  const errorMessage = errors.inputCurrency?.message;
  const inputCurrency = watch('inputCurrency');

  useEffect(() => {
    const currencyPrice = Number(detailData?.marketData?.currentPrice?.[currency]);
    const inputCurrencyPrice = Number(inputCurrency);
    if (Number.isNaN(currencyPrice) || Number.isNaN(inputCurrencyPrice)) return;

    setCalcPrice(currencyPrice * inputCurrencyPrice);
  }, [inputCurrency, errors]);

  const currencyUnit = { krw: '₩', usd: '$' }[currency];

  return (
    <div className="bg-slate-50 rounded-md p-lg">
      <div className="text-zinc-500 text-sm mb-md">가격 계산</div>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-md">
        <div className="flex-1 flex items-center gap-sm justify-center sm:justify-end">
          <label>{detailData?.symbol?.toUpperCase()}</label>
          <Input
            placeholder="가격을 입력해주세요."
            {...register('inputCurrency', {
              required: true,
            })}
          />
        </div>
        <Icons.Exchange />
        <div className="flex-1 flex items-center gap-sm justify-center sm:justify-start">
          <label>{currency.toUpperCase()}</label>
          {!!errorMessage ? (
            <span className="text-red-600 text-sm">{errorMessage}</span>
          ) : (
            <span>{toMoneyFormat(calcPrice, { prefix: currencyUnit })}</span>
          )}
        </div>
      </form>
    </div>
  );
};

export default CoinCalculator;
