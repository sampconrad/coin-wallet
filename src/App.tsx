import CoinInput from '@/components/CoinInput';
import CoinTable from '@/components/CoinTable';
import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import Snackbar from '@/components/Snackbar';

function App() {
  return (
    <div className='min-h-screen min-w-screen bg-slate-100 flex justify-center'>
      <main className='w-screen lg:w-3/4 xl:w-2/3 2xl:w-2/3 3xl:w-1/2 flex flex-col pt-5 px-5 lg:pt-20 items-center'>
        <Snackbar />
        <Heading />
        <CoinInput />
        <CoinTable />
        <Footer />
      </main>
    </div>
  );
}

export default App;
