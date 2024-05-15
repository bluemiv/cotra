export type TCoinCurrency = 'usd' | 'krw';

export type TMarketsQueryParams = {
  ids?: string;
  page?: number;
  perPage?: number;
  vsCurrency: TCoinCurrency;
  priceChangePercentage: string;
  order: 'market_cap_asc' | 'market_cap_desc' | 'volume_asc' | 'volume_desc' | 'id_asc' | 'id_desc';
};

export type TCoinMarketData = {
  priceChangePercentage_24hInCurrency: {
    krw?: number;
    usd?: number;
  };
  priceChangePercentage_24h: number;
  priceChange_24hInCurrency: {
    krw?: number;
    usd?: number;
  };
  currentPrice: {
    krw?: number;
    usd?: number;
    btc?: number;
  };
  totalVolume: {
    krw?: number;
    usd?: number;
  };
};

export type TCoinDetailInfo = {
  id: string;
  name: string;
  symbol: string;
  marketCapRank: number;
  links: { homepage?: string[] };
  marketData: TCoinMarketData;
  description: {
    en?: string;
    ko?: string;
  };
};
