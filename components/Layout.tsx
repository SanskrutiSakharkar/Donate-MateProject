import Footer from './Footer';
import Navbar from './Navbar';
import { Roboto } from '@next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <>
      <Navbar />
      <main className={`bg-white ${roboto.className}`}>{children}</main>
      <Footer />
    </>
  );
}
