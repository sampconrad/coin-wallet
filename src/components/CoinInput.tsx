'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { AppContext } from '@/context/AppContext';
import { Loader2, Search } from 'lucide-react';
import { useContext } from 'react';

const formSchema = z.object({
  coin: z.string().min(3).max(15, {
    message: 'Coin ID must be at least 3 characters.',
  }),
});

export default function CoinInput() {
  const { addCoin, loading } = useContext(AppContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coin: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addCoin(values.coin);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 w-full xl:w-2/3'>
        <FormField
          control={form.control}
          name='coin'
          render={({ field }) => (
            <FormItem className='mb-10'>
              <FormLabel className='flex justify-center xl:justify-start'>
                Search for coins by ID, Name or Symbol:
              </FormLabel>
              <FormControl>
                <div className='flex items-center gap-2 flex-wrap xl:flex-nowrap'>
                  <Input
                    type='text'
                    placeholder='BTC or Bitcoin'
                    {...field}
                  />
                  <Button
                    className='w-full xl:w-fit'
                    type='submit'
                    disabled={loading}>
                    {loading ? (
                      <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    ) : (
                      <Search className='mr-2 h-4 w-4' />
                    )}
                    Add To Wallet
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
