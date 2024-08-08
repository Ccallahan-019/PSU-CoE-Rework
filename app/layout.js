import { Inter } from 'next/font/google';
import { Roboto_Slab } from 'next/font/google';
import { Roboto_Condensed } from 'next/font/google';
import { ApolloWrapper } from '@/lib/ApolloProvider';
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-slab'
});

const roboto_condensed = Roboto_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-condensed'
});

export const metadata = {
  title: 'PSU CoE Rework',
  description: 'Penn State College of Engineering Website Rework',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto_slab.variable} ${roboto_condensed.variable}`}>
      <body className={inter.className}>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      </body>
      <GoogleAnalytics gaId="G-QQL6PBRF35" />
    </html>
  );
};
