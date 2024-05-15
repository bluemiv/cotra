import { useQuery } from '@tanstack/react-query';
import { coinApi } from '@/api';
import { coinApiCaller } from '@/utils';
import { TMarketsQueryParams } from '@/feature/coin/types';

const PREIFX = 'COIN';

export const MARKETS_QUERY_KEY = [PREIFX, 'MARKETS'];

/**
 * 시장 시세 목록을 조회하는 Query
 * @param queryParams
 * @param options
 */
export const useMarketsQuery = (queryParams: TMarketsQueryParams, options?: {}) =>
  useQuery({
    queryKey: [...MARKETS_QUERY_KEY, queryParams],
    queryFn: async () => {
      const { url, params } = coinApi.markets(queryParams);
      const { data } = await coinApiCaller.get(url, params);
      return data;
    },
    ...options,
  });

export const COIN_DETAIL_QUERY_KEY = [PREIFX, 'COIN'];

/**
 * 코인의 상세 정보를 조회하는 Query
 * @param queryParams
 * @param options
 */
export const useCoinDetailQuery = (queryParams: { id: string }, options?: {}) =>
  useQuery({
    queryKey: [...COIN_DETAIL_QUERY_KEY, queryParams],
    queryFn: async () => {
      const { url, params } = coinApi.coin(queryParams.id);
      const { data } = await coinApiCaller.get(url, params);
      return data;
    },
    enabled: !!queryParams.id,
    ...options,
  });
