import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import CoingeckoLogo from '/coingecko.svg';

export default function Footer() {
  return (
    <div className='mt-auto flex items-center justify-center pt-5 pb-3 text-xs text-zinc-400'>
      <div className='flex flex-col items-center gap-1'>
        <div className='flex items-center'>
          {' '}
          Powered by
          <Avatar className='w-6 h-6 mx-1'>
            <AvatarImage src={CoingeckoLogo} />
          </Avatar>
          <a
            className='underline hover:text-blue-400 mr-1'
            href='https://www.coingecko.com/'
            target='_blank'>
            CoinGecko.
          </a>
          API Rate: 30 hits/min.
        </div>
        <a
          className='underline hover:text-blue-400 mr-1'
          href='https://www.sampconrad.com/'
          target='_blank'>
          Developed by sampconrad
        </a>
      </div>
    </div>
  );
}
