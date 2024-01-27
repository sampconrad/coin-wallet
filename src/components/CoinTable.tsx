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
import { CoinData } from '@/types/cointypes';
import { formatter } from '@/utils/formatter';
import { X } from 'lucide-react';
import { useContext } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';

function CoinName(coin: CoinData) {
  const { image, symbol, name } = coin;
  return (
    <div className='flex flex-row gap-2 items-center'>
      <Avatar className='w-7 h-7'>
        <AvatarImage src={image} />
        <AvatarFallback>{symbol}</AvatarFallback>
      </Avatar>
      <b>{name}</b>
      <Badge>{symbol.toUpperCase()}</Badge>
    </div>
  );
}

function TabbleHead() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className='text-left'>#</TableHead>
        <TableHead>Coin</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>24h</TableHead>
        <TableHead>7d</TableHead>
        <TableHead>ATH</TableHead>
        <TableHead>24h Volume</TableHead>
        <TableHead>Market Cap</TableHead>
        <TableHead className='text-center min-w-36 w-36'>Last 7 Days</TableHead>
        <TableHead className='text-right'></TableHead>
      </TableRow>
    </TableHeader>
  );
}

function TableContent() {
  const { coinData, deleteCoin } = useContext(AppContext);
  return (
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
          <TableCell
            className={
              coin.price_change_percentage_7d_in_currency > 0 ? 'text-green-600' : 'text-red-600'
            }>
            {coin.price_change_percentage_7d_in_currency.toFixed(2) + '%'}
          </TableCell>
          <TableCell>{formatter.format(coin.ath)}</TableCell>
          <TableCell>{formatter.format(coin.total_volume)}</TableCell>
          <TableCell>{formatter.format(coin.market_cap)}</TableCell>
          <TableCell className='min-w-36 w-36'>
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
  );
}

function SkeletonTableContent() {
  const { coinsToFetch } = useContext(AppContext);
  const numCells = 10;

  return (
    <TableBody>
      {Array.from({ length: coinsToFetch.length }).map((_, index) => (
        <TableRow key={index}>
          {Array.from({ length: numCells }).map((_, cellIndex) => (
            <TableCell key={cellIndex}>
              <Skeleton className='w-full h-[20px] rounded-sm' />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}

export default function CoinTable() {
  const { coinData, coinsToFetch, loading } = useContext(AppContext);
  return (
    <Table>
      <TableCaption>
        {coinsToFetch.length === 0
          ? 'No coins currently being tracked.'
          : coinData.length === 0
          ? 'API data currently unavailable.'
          : ''}
      </TableCaption>
      <TabbleHead />
      {!loading ? <TableContent /> : <SkeletonTableContent />}
    </Table>
  );
}
