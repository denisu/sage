import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useInsets } from '@/contexts/SafeAreaContext';
import useInitialization from '@/hooks/useInitialization';
import { useWallet } from '@/hooks/useWallet';
import icon from '@/icon.png';
import { t } from '@lingui/core/macro';
import { PanelLeft, PanelLeftClose } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { BottomNav, TopNav } from './Nav';

const SIDEBAR_COLLAPSED_STORAGE_KEY = 'sage-wallet-sidebar-collapsed';

type LayoutProps = PropsWithChildren<object> & {
  transparentBackground?: boolean;
};

export default function Layout(props: LayoutProps) {
  const insets = useInsets();

  const initialized = useInitialization();
  const wallet = useWallet(initialized);

  const [isCollapsed, setIsCollapsed] = useLocalStorage<boolean>(
    SIDEBAR_COLLAPSED_STORAGE_KEY,
    false,
  );

  const walletIcon = (
    <Link to='/wallet' className='flex items-center gap-2 font-semibold'>
      <img src={icon} className='h-8 w-8' alt={t`Wallet icon`} />
      <span
        className={`text-lg transition-opacity duration-300 ${
          isCollapsed ? 'opacity-0 hidden' : 'opacity-100'
        }`}
      >
        {wallet?.name}
      </span>
    </Link>
  );

  const walletIconWithTooltip = isCollapsed ? (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link to='/wallet' className='flex items-center gap-2 font-semibold'>
          <img src={icon} className='h-8 w-8' alt={t`Wallet icon`} />
        </Link>
      </TooltipTrigger>
      <TooltipContent side='right'>{wallet?.name ?? t`Wallet`}</TooltipContent>
    </Tooltip>
  ) : (
    walletIcon
  );

  return (
    <TooltipProvider>
      <div className='grid h-screen w-screen md:grid-cols-[auto_1fr]'>
        <div
          className={`hidden border-r bg-muted/40 md:flex flex-col transition-all duration-300 ${
            isCollapsed ? 'w-[60px]' : 'w-[250px]'
          }`}
          role='complementary'
          aria-label={t`Sidebar navigation`}
        >
          <div className='bg-background flex h-full max-h-screen flex-col gap-2'>
            <div className='flex h-14 items-center pt-2 px-5 justify-between'>
              {walletIconWithTooltip}
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type='button'
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className='text-muted-foreground hover:text-primary transition-colors'
                    aria-label={
                      isCollapsed ? t`Expand sidebar` : t`Collapse sidebar`
                    }
                    aria-expanded={!isCollapsed}
                  >
                    {isCollapsed ? (
                      <PanelLeft className='h-5 w-5' aria-hidden='true' />
                    ) : (
                      <PanelLeftClose className='h-5 w-5' aria-hidden='true' />
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent side='right' role='tooltip'>
                  {isCollapsed ? t`Expand sidebar` : t`Collapse sidebar`}
                </TooltipContent>
              </Tooltip>
            </div>

            <div className='flex-1 flex flex-col justify-between pb-4'>
              <div
                className={`grid items-start px-3 text-sm font-medium ${
                  isCollapsed ? 'justify-center' : 'px-3'
                }`}
              >
                <TopNav isCollapsed={isCollapsed} />
              </div>

              <div
                className={`grid text-sm font-medium ${
                  isCollapsed ? 'justify-center' : 'px-3'
                }`}
              >
                <BottomNav isCollapsed={isCollapsed} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col h-screen overflow-hidden ${
            props.transparentBackground ? 'bg-transparent' : 'bg-background'
          }`}
          style={{
            paddingBottom: insets.bottom
              ? `${insets.bottom}px`
              : 'env(safe-area-inset-bottom)',
          }}
        >
          <div
            className='bg-background'
            style={{
              height:
                insets.top !== 0
                  ? `${insets.top + 8}px`
                  : 'env(safe-area-inset-top)',
            }}
          />
          {props.children}
        </div>
      </div>
    </TooltipProvider>
  );
}
