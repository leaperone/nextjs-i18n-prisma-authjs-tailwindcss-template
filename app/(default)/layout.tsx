import { cn } from '@/lib/utils';

import Footer from './components/Footer';
import Header from './components/Header';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className={cn('min-h-screen', 'bg-background text-foreground', 'flex flex-col')}>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
