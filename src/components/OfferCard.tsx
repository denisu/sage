import { OfferAssets, OfferSummary } from '@/bindings';
import { nftUri } from '@/lib/nftUri';
import { fromMojos } from '@/lib/utils';
import { useWalletState } from '@/state';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import BigNumber from 'bignumber.js';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { CopyButton } from './CopyButton';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { NumberFormat } from '@/components/NumberFormat';

export interface OfferCardProps {
  summary: OfferSummary;
}

export function OfferCard({
  summary,
  children,
}: PropsWithChildren<OfferCardProps>) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-screen-lg'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2 pr-2 space-x-2'>
          <CardTitle className='text-md font-medium truncate flex items-center'>
            <ArrowUpIcon className='mr-2 h-4 w-4' />
            <Trans>Sending</Trans>
          </CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col'>
          <div className='text-sm text-muted-foreground'>
            <Trans>The assets you have to pay to fulfill the offer.</Trans>
          </div>

          <Separator className='my-4' />

          <div className='flex flex-col gap-4'>
            <Assets assets={summary.taker} />
            {children}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2 pr-2 space-x-2'>
          <CardTitle className='text-md font-medium truncate flex items-center'>
            <ArrowDownIcon className='mr-2 h-4 w-4' />
            <Trans>Receiving</Trans>
          </CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col'>
          <div className='text-sm text-muted-foreground'>
            <Trans>The assets being given to you in the offer.</Trans>
          </div>

          <Separator className='my-4' />

          <Assets
            assets={
              summary?.maker ?? {
                xch: { amount: '0', royalty: '0' },
                cats: {},
                nfts: {},
              }
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}

interface AssetsProps {
  assets: OfferAssets;
}

function Assets({ assets }: AssetsProps) {
  const walletState = useWalletState();
  const amount = BigNumber(assets.xch.amount);

  if (
    amount.isLessThanOrEqualTo(0) &&
    Object.keys(assets.cats).length === 0 &&
    Object.keys(assets.nfts).length === 0
  ) {
    return <></>;
  }

  return (
    <div className='flex flex-col gap-2 divide-neutral-200 dark:divide-neutral-800'>
      {amount.isGreaterThan(0) && (
        <div className='flex flex-col gap-1.5 rounded-md border p-2'>
          <div className='overflow-hidden flex items-center gap-2'>
            <Badge>
              <span className='truncate'>{walletState.sync.unit.ticker}</span>
            </Badge>

            <div className='text-sm font-medium'>
              <NumberFormat
                value={fromMojos(
                  BigNumber(amount).plus(assets.xch.royalty),
                  walletState.sync.unit.decimals,
                )}
                minimumFractionDigits={0}
                maximumFractionDigits={walletState.sync.unit.decimals}
              />{' '}
              {walletState.sync.unit.ticker}
            </div>
          </div>

          {BigNumber(assets.xch.royalty).isGreaterThan(0) && (
            <>
              <Separator className='my-1' />
              <div className='text-sm text-muted-foreground truncate text-neutral-600 dark:text-neutral-300'>
                <Trans>Amount includes</Trans>{' '}
                <NumberFormat
                  value={fromMojos(
                    assets.xch.royalty,
                    walletState.sync.unit.decimals,
                  )}
                  minimumFractionDigits={0}
                  maximumFractionDigits={walletState.sync.unit.decimals}
                />{' '}
                {walletState.sync.unit.ticker} <Trans>royalty</Trans>
              </div>
            </>
          )}
        </div>
      )}

      {Object.entries(assets.cats).map(([assetId, cat], i) => (
        <div key={i} className='flex flex-col gap-1.5 rounded-md border p-2'>
          <div className='overflow-hidden flex items-center gap-2'>
            <div className='truncate flex items-center gap-2'>
              <Badge className='max-w-[100px] bg-blue-600 text-white dark:bg-blue-600 dark:text-white'>
                <span className='truncate'>{cat.ticker ?? 'CAT'}</span>
              </Badge>
            </div>
            <div className='text-sm font-medium whitespace-nowrap'>
              <NumberFormat
                value={fromMojos(BigNumber(cat.amount).plus(cat.royalty), 3)}
                minimumFractionDigits={0}
                maximumFractionDigits={3}
              />{' '}
              {cat.name ?? cat.ticker ?? t`Unknown`}
            </div>
          </div>

          <Separator className='my-1' />

          <div className='flex gap-1.5 items-center'>
            {cat.icon_url && (
              <img
                src={cat.icon_url}
                className='w-6 h-6 rounded-full'
                alt={t`CAT icon`}
              />
            )}

            <div className='text-sm text-muted-foreground truncate font-mono'>
              {assetId.slice(0, 10) + '...' + assetId.slice(-10)}
            </div>

            <CopyButton value={assetId} className='w-4 h-4' />
          </div>

          {BigNumber(cat.royalty).isGreaterThan(0) && (
            <>
              <Separator className='my-1' />
              <div className='text-sm text-muted-foreground truncate text-neutral-600 dark:text-neutral-300'>
                <Trans>Amount includes</Trans>{' '}
                <NumberFormat
                  value={fromMojos(cat.royalty, 3)}
                  minimumFractionDigits={0}
                  maximumFractionDigits={3}
                />{' '}
                {cat.ticker ?? 'CAT'} <Trans>royalty</Trans>
              </div>
            </>
          )}
        </div>
      ))}

      {Object.entries(assets.nfts).map(([launcherId, nft], i) => (
        <div key={i} className='flex flex-col gap-1.5 rounded-md border p-2'>
          <div className='overflow-hidden flex items-center gap-2'>
            <div className='truncate flex items-center gap-2'>
              <Badge className='max-w-[100px] bg-green-600 text-white dark:bg-green-600 dark:text-white'>
                <span className='truncate'>
                  <Trans>NFT</Trans>
                </span>
              </Badge>
            </div>

            <div className='text-sm font-medium'>{nft.name ?? t`Unnamed`}</div>
          </div>

          <Separator className='my-1' />

          <div className='flex gap-1.5 items-center'>
            <img
              src={nftUri(nft.image_mime_type, nft.image_data)}
              className='w-6 h-6 rounded-sm'
              alt={t`NFT preview`}
            />

            <div className='text-sm text-muted-foreground truncate font-mono'>
              {launcherId.slice(0, 10) + '...' + launcherId.slice(-10)}
            </div>

            <CopyButton value={launcherId} className='w-4 h-4' />
          </div>

          <Separator className='my-1' />

          <div className='flex gap-1.5 items-center text-sm text-muted-foreground truncate'>
            <span>
              <span className='text-neutral-600 dark:text-neutral-300'>
                {nft.royalty_ten_thousandths / 100}% {t`royalty to`}{' '}
              </span>
              <span className='font-mono'>
                {nft.royalty_address.slice(0, 10) +
                  '...' +
                  nft.royalty_address.slice(-10)}
              </span>
            </span>
            <CopyButton value={nft.royalty_address} className='w-4 h-4' />
          </div>
        </div>
      ))}
    </div>
  );
}
