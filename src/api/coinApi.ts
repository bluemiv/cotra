import { TMarketsQueryParams } from '@/feature/coin/types';

const coinApi = {
  /**
   * 현재 시장 가격 정보를 조회하는 API
   * @param params
   */
  markets: (params: TMarketsQueryParams) => ({
    url: '/api/v3/coins/markets',
    params,
  }),
  /**
   * 코인의 상세정보를 조회하는 API
   * @param id
   * @param params
   */
  coin: (id: string, params?: {}) => ({
    url: `/api/v3/coins/${id}`,
    params,
  }),
};

export default coinApi;
