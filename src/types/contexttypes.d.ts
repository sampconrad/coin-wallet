interface AppContextType {
  coinsToFetch: string[]
  coinData: CoinDataArray;
  addCoin: (value: string) => Promise<void>;
  deleteCoin: (value: string) => void;
  loading: boolean;
 }
 