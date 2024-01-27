/* eslint-disable react-hooks/exhaustive-deps */
import { useLocalStorage } from '@/hooks/useLocalStorage';
import api from '@/services/api';
import { CoinDataArray } from '@/types/cointypes';
import { createContext, ReactNode, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const AppContext = createContext<AppContextType>({} as AppContextType);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [coinsToFetch, setCoinsToFetch] = useLocalStorage();
  const [coinData, setCoinData] = useState<CoinDataArray>([]);
  const [loading, setLoading] = useState(false);

  const getCoinData = async (coinsToFetch: string[]) => {
    if (coinsToFetch.length === 0) {
      return;
    }
    setLoading(true);
    try {
      const fetchedData = await api.fetchCoinData(coinsToFetch);
      setCoinData(fetchedData);
      toast.success(`Coin data sucessfully fetched!`);
    } catch (error) {
      toast.error(`API rate limit exceed. Try later.`);
      throw new Error(); // throwing error to addCoin Fn so we don't add the coin to the newCoinsToFetch arr
    } finally {
      setLoading(false);
    }
  };

  const addCoin = async (inputValue: string) => {
    try {
      const coin = await api.isValidCoin(inputValue);
      if (coin && !coinsToFetch.includes(coin.id)) {
        const newCoinsToFetch = [...coinsToFetch, coin.id];
        // nested try-catch. Ugly I know, but gotta do it to prevent mismatch between what's on localStorage and what's on the state.
        // this happens when the API limit is hit right after validating the coin but before fetching the coin data.
        try {
          await getCoinData(newCoinsToFetch);
          setCoinsToFetch(newCoinsToFetch);
          toast.success(`${coin && coin.name} is now being tracked.`);
        } catch (error) {
          toast.error(`Failed to add coin: ${inputValue}.`);
        }
      } else {
        toast.error(`${coin && coin.name} is already being tracked.`);
      }
    } catch (error) {
      toast.error(`Invalid coin: ${inputValue}`);
    }
  };

  const deleteCoin = (coinId: string) => {
    try {
      const updatedCoinDataArr = coinData.filter((coin) => coin.id !== coinId);
      toast.success(`Successfully deleted: ${coinId}.`);
      setCoinsToFetch((prev: string[]) => prev.filter((id) => id !== coinId));
      setCoinData(updatedCoinDataArr);
    } catch (error) {
      toast.error(`Failed to delete: ${coinId}.`);
    }
  };

  useEffect(() => {
    getCoinData(coinsToFetch); // if no coins are being tracked on load, resets to base coins
  }, []);

  return (
    <AppContext.Provider
      value={{
        coinsToFetch,
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
