import { useBingoStore } from '@/store';
import { MONTH_KEY } from '@/utils/date';

interface BingoImageInputProps {
  id: string;
}

const BingoImageInput = ({ id }: BingoImageInputProps) => {
  const updateBingoImage = useBingoStore(state => state.updateBingoImage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      updateBingoImage(MONTH_KEY, id, dataUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <input
      id={id}
      type="file"
      accept="image/*"
      onChange={handleChange}
      className="hidden"
    />
  );
};

export default BingoImageInput;
