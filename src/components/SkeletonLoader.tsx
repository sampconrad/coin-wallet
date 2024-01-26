import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export default function SkeletonLoader() {
  return (
    <Table>
      <TableCaption>Tracked Cryptocurrencies.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='text-left'>#</TableHead>
          <TableHead>Coin</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>24h</TableHead>
          <TableHead>ATH</TableHead>
          <TableHead>ATL</TableHead>
          <TableHead>Market Cap</TableHead>
          <TableHead className='text-center'>Last 7 Days</TableHead>
          <TableHead className='text-right'></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 3 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell className='font-medium'>
              <Skeleton className='w-full h-[20px] rounded-sm' />
            </TableCell>
            <TableCell>
              <Skeleton className='w-full h-[20px] rounded-sm' />
            </TableCell>
            <TableCell>
              <Skeleton className='w-full h-[20px] rounded-sm' />
            </TableCell>
            <TableCell>
              <Skeleton className='w-full h-[20px] rounded-sm' />
            </TableCell>
            <TableCell>
              <Skeleton className='w-full h-[20px] rounded-sm' />
            </TableCell>
            <TableCell>
              <Skeleton className='w-full h-[20px] rounded-sm' />
            </TableCell>
            <TableCell>
              <Skeleton className='w-full h-[20px] rounded-sm' />
            </TableCell>
            <TableCell>
              <Skeleton className='w-full h-[20px] rounded-sm' />
            </TableCell>
            <TableCell className='text-right'>
              <Skeleton className='w-[20px] h-[20px] rounded-sm' />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}