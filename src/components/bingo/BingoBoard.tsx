import { cn } from '@/lib/cn';

const BingoBoard = () => {
  const array = new Array(9).fill('빙고');

  return (
    <div className="mt-8 grid w-full grid-cols-3 grid-rows-3 gap-2">
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
  );
};

export default BingoBoard;
