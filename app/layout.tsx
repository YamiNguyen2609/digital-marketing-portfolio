import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { DataProvider } from '@/provider/DataProvider';

export const metadata: Metadata = {
  title: 'Ngan Pham — Digital Marketing',
  description: 'Portfolio website of Ngan Pham.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body>

        <div className="app-wrapper">
          <DataProvider>
            <Sidebar />
            <main className="main-content">
              <Navbar />
              {children}
            </main>
          </DataProvider>
        </div>
      </body>
    </html>
  );
}
