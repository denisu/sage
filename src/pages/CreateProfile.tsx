import ConfirmationDialog from '@/components/ConfirmationDialog';
import Header from '@/components/Header';
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
import { amount } from '@/lib/formTypes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';
import { commands, Error, TransactionSummary } from '../bindings';
import Container from '../components/Container';
import ErrorDialog from '../components/ErrorDialog';
import { useWalletState } from '../state';

export default function CreateProfile() {
  const navigate = useNavigate();
  const walletState = useWalletState();

  const [error, setError] = useState<Error | null>(null);
  const [summary, setSummary] = useState<TransactionSummary | null>(null);

  const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    fee: amount(walletState.sync.unit.decimals).optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    commands
      .createDid(values.name, values.fee?.toString() || '0')
      .then((result) => {
        if (result.status === 'error') {
          console.error(result.error);
          setError(result.error);
          return;
        } else {
          setSummary(result.data);
        }
      });
  };

  return (
    <>
      <Header title='Create Profile' />

      <Container className='max-w-xl'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Display name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='grid sm:grid-cols-2 gap-4'>
              <FormField
                control={form.control}
                name='fee'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fee</FormLabel>
                    <FormControl>
                      <div className='relative'>
                        <Input
                          type='text'
                          placeholder='0.00'
                          {...field}
                          className='pr-12'
                        />
                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                          <span className='text-gray-500 sm:text-sm'>
                            {walletState.sync.unit.ticker}
                          </span>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type='submit'>Create Profile</Button>
          </form>
        </Form>
      </Container>

      <ErrorDialog error={error} setError={setError} />
      <ConfirmationDialog
        summary={summary}
        close={() => setSummary(null)}
        onConfirm={() => navigate('/dids')}
      />
    </>
  );
}
