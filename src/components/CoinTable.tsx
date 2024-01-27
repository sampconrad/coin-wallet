import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { AppContext } from '@/context/AppContext';
import { formatter } from '@/utils/formatter';
import { X } from 'lucide-react';
import { useContext } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { CoinData } from '../types/cointypes';
import { Button } from './ui/button';

function CoinName(coin: CoinData) {
  return (
    <div className='flex flex-row gap-2 items-center'>
      <Avatar className='w-7 h-7'>
        <AvatarImage src={coin.image} />
        <AvatarFallback>{coin.symbol}</AvatarFallback>
      </Avatar>
      <b>{coin.name}</b>
      <Badge>{coin.symbol.toUpperCase()}</Badge>
    </div>
  );
}

export default function CoinTable() {
  const { coinData, deleteCoin, coinsToFetch } = useContext(AppContext);
  return (
    <Table>
      <TableCaption>
        {coinsToFetch.length === 0
          ? 'No coins currently being tracked.'
          : coinData.length === 0
          ? 'API data currently unavailable.'
          : ''}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='text-left'>#</TableHead>
          <TableHead>Coin</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>24h</TableHead>
          <TableHead>ATH</TableHead>
          <TableHead>ATL</TableHead>
          <TableHead className='min-w-28'>Market Cap</TableHead>
          <TableHead className='text-center min-w-36'>Last 7 Days</TableHead>
          <TableHead className='text-right'></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coinData.map((coin: CoinData) => (
          <TableRow key={coin.symbol}>
            <TableCell className='font-medium'>{coin.market_cap_rank}</TableCell>
            <TableCell>{CoinName(coin)}</TableCell>
            <TableCell>{formatter.format(coin.current_price)}</TableCell>
            <TableCell
              className={coin.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}>
              {coin.price_change_percentage_24h.toFixed(2) + '%'}
            </TableCell>
            <TableCell>{formatter.format(coin.ath)}</TableCell>
            <TableCell>{formatter.format(coin.atl)}</TableCell>
            <TableCell className='min-w-28'>{formatter.format(coin.market_cap)}</TableCell>
            <TableCell className='min-w-36'>
              <Sparklines data={coin.sparkline_in_7d.price}>
                <SparklinesLine
                  style={{
                    stroke:
                      coin.sparkline_in_7d.price.slice(-1)[0] >
                      coin.sparkline_in_7d.price.slice(0, 1)[0]
                        ? '#008000'
                        : '#ff0000',
                    strokeWidth: '2',
                    fill: 'none',
                  }}
                />
              </Sparklines>
            </TableCell>
            <TableCell className='text-right'>
              <Button
                className='w-8 h-8 rounded-sm'
                variant='destructive'
                size='icon'
                onClick={() => deleteCoin(coin.id)}>
                <X className='h-6 w-6' />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
