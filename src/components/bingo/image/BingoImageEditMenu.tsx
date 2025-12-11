import { Pencil } from 'lucide-react';

const BingoImageEditMenu = () => {
  return (
    <div className="absolute top-0 right-0 flex size-7 items-center justify-center p-2 md:size-8">
      <Pencil
        color="#f3f6f9"
        className="drop-shadow-icon-soft hover:drop-shadow-icon-strong transition-all duration-300"
      />
    </div>
  );
};

export default BingoImageEditMenu;
