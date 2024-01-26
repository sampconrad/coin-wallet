import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import CoingeckoLogo from '/coingecko.svg';

export default function Footer() {
  return (
    <div className='mt-auto flex items-center justify-center pt-5 pb-3 text-xs text-zinc-400 flex-wrap gap-x-1'>
      <div className='flex items-center'>
        {' '}
        Powered by
        <Avatar className='w-6 h-6 mx-1'>
          <AvatarImage src={CoingeckoLogo} />
        </Avatar>
        <a
          className='underline text-blue-400'
          href='https://www.coingecko.com/'
          target='_blank'>
          CoinGecko.
        </a>
      </div>
      API Rate Limit: 30 hits/min.
    </div>
  );
}
