import { SearchedCoin } from '@/types/cointypes';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.API_KEY;

const apiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { x_cg_demo_api_key: API_KEY },
});

const api = {
  searchCoin: async (inputValue: string) => {
    const { data } = await apiInstance.get(`/search?query=${inputValue}`);
    return data.coins;
  },

  isValidCoin: async (inputValue: string): Promise<SearchedCoin | undefined> => {
    try {
      const coins = await api.searchCoin(inputValue);
      const coin = coins.find((coin: SearchedCoin) =>
        [coin.id.toLowerCase(), coin.symbol.toLowerCase(), coin.name.toLowerCase()].includes(
          inputValue.toLowerCase()
        )
      );

      if (!coin) {
        throw new Error(); //error msg being handled on context
      }

      return coin;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  
  fetchCoinData: async (coinsToFetch: string[]) => {
    const { data } = await apiInstance.get(
      `coins/markets?vs_currency=usd&ids=${coinsToFetch}&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en`
    );
    return data;
  },
};

export default api;
