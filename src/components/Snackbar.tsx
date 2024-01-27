import { CheckCircle2, X, XCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import CoinImg from '/coin.svg';

const Icon = ({ type }: { type: string }) => {
  switch (type) {
    case 'error':
      return <XCircle className='h-10 w-10 rounded-full text-red-500' />;
    case 'success':
      return <CheckCircle2 className='h-10 w-10 rounded-full text-green-500' />;
    default:
      return (
        <img
          className='h-10 w-10 rounded-full'
          src={CoinImg}
          alt=''
        />
      );
  }
};

export default function Snackbar() {
  return (
    <Toaster>
      {(t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
          <div className='flex-1 w-0 p-4'>
            <div className='flex items-start'>
              <div className='flex-shrink-0 pt-0.5'>
                <Icon type={t.type} />
              </div>
              <div className='ml-3 flex-1'>
                <p
                  className={`${
                    t.type == 'error' ? 'text-red-500' : 'text-green-500'
                  } text-sm font-medium capitalize`}>
                  {t.type}!
                </p>
                <p className='mt-1 text-sm text-gray-500'>
                  {typeof t.message === 'function' ? t.message(t) : t.message}
                </p>
              </div>
            </div>
          </div>
          <div className='flex border-l border-gray-200'>
            <button
              onClick={() => toast.dismiss(t.id)}
              className='w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500'>
              <X className='h-6 w-6' />
            </button>
          </div>
        </div>
      )}
    </Toaster>
  );
}
