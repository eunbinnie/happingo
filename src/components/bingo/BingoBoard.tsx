import { cn } from '@/lib/cn';

const BingoBoard = () => {
  const array = new Array(9).fill('빙고');

  return (
    <section className="mt-5 w-full sm:mt-8">
      <p className="text-2xs text-text/70 px-2 py-0.5 text-right sm:text-xs">
        현재 <span className="font-medium">0</span> BINGO
      </p>
      <div className="mt-2 grid grid-cols-3 grid-rows-3 gap-2">
        {array.map((item, index) => (
          <div
            key={index}
            className={cn(
              'flex aspect-3/4 items-center justify-center px-2 text-center text-xs font-medium break-keep sm:text-sm',
              'border-text/25 bg-sub-background border',
              'shadow-card dark:shadow-card-dark'
            )}
          >
            {item} {index}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BingoBoard;
