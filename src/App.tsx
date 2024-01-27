import CoinInput from '@/components/CoinInput';
import CoinTable from '@/components/CoinTable';
import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import SkeletonLoader from '@/components/SkeletonLoader';
import Snackbar from '@/components/Snackbar';
import { AppContext } from '@/context/AppContext';
import { useContext } from 'react';

function App() {
  const { loading } = useContext(AppContext);
  return (
    <div className='min-h-screen min-w-screen bg-slate-100 flex justify-center'>
      <main className='w-screen lg:w-3/4 xl:w-2/3 2xl:w-2/3 3xl:w-1/2 flex flex-col pt-5 px-5 lg:pt-20 items-center'>
        <Snackbar />
        <Heading />
        <CoinInput />
        {loading ? <SkeletonLoader /> : <CoinTable />}
        <Footer />
      </main>
    </div>
  );
}

export default App;
