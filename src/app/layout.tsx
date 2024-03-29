import Footer from 'app/components/Footer';
import Header from 'app/components/Header';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import 'styles/global.scss';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
