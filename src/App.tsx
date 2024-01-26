import CoinTable from '@/components/CoinTable';
import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import CoinInput from './components/CoinInput';
import Footer from './components/Footer';
import Heading from './components/Heading';
import SkeletonLoader from './components/SkeletonLoader';
import { AppContext } from './context/AppContext';

function App() {
  const { loading } = useContext(AppContext);
  return (
    <div className='min-h-screen min-w-screen bg-slate-100 flex justify-center'>
      <main className='w-screen lg:w-3/4 2xl:w-1/2 flex flex-col pt-5 px-5 lg:pt-20 items-center'>
        <Toaster />
        <Heading />
        <CoinInput />
        {loading ? <SkeletonLoader /> : <CoinTable />}
        <Footer />
      </main>
    </div>
  );
}

export default App;
