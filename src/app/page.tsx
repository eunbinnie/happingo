import BingoBoard from '@/components/bingo/BingoBoard';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center px-3">
        <BingoBoard />
      </main>
    </>
  );
}
