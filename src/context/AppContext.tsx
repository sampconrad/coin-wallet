import { useLocalStorage } from '@/hooks/useLocalStorage';
import api from '@/services/api';
import { CoinDataArray } from '@/types/cointypes';
import { createContext, ReactNode, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const AppContext = createContext<AppContextType>({} as AppContextType);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [coinList, setCoinList] = useLocalStorage();
  const [coinData, setCoinData] = useState<CoinDataArray>([]);
  const [loading, setLoading] = useState(false);

  const BASE_COINS = ['bitcoin', 'ethereum', 'klever'];

  if (coinList.length === 0) {
    setCoinList(BASE_COINS);
  }

  const addCoin = async (inputValue: string) => {
    try {
      const coin = await api.isValidCoin(inputValue);
      if (coin && !coinList.includes(coin.id)) {
        setCoinList((prev: string[]) => [...prev, coin.id]);
        toast.success(`Coin is being tracked: ${inputValue}`);
      } else {
        toast.error(`Coin has already been added: ${coin && coin.name}`);
      }
    } catch (error) {
      toast.error(`Failed to validate coin: ${inputValue}`);
    }
  };

  const deleteCoin = (coinId: string) => {
    try {
      setCoinList((prev: string[]) => prev.filter((id) => id !== coinId));
    } catch (error) {
      toast.error(`Failed to delete coin: ${coinId}`);
    }
  };

  useEffect(() => {
    const getCoinData = async () => {
      setLoading(true);
      try {
        const coinData = await api.fetchCoinData(coinList);
        setCoinData(coinData);
        return coinData;
      } catch (error) {
        throw new Error();
      } finally {
        setLoading(false);
      }
    };

    toast.promise(getCoinData(), {
      loading: 'Fetching latest coin data...',
      success: 'Coin data sucessfully fetched!',
      error: 'API rate limit exceed. Try later.',
    });
  }, [coinList]);

  return (
    <AppContext.Provider
      value={{
        coinData,
        addCoin,
        deleteCoin,
        loading,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
