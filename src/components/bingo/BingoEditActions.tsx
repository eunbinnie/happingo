'use client';

import { useEditActionStore } from '@/store';

import Button from '../button/Button';

interface BingoEditActionsProps {
  onFocusFirstBingo: () => void;
}

const BingoEditActions = ({ onFocusFirstBingo }: BingoEditActionsProps) => {
  const isEditing = useEditActionStore(state => state.isEditing);
  const startEditing = useEditActionStore(state => state.startEditing);
  const stopEditing = useEditActionStore(state => state.stopEditing);
  const saveEditing = useEditActionStore(state => state.saveEditing);
  const cancelEditing = useEditActionStore(state => state.cancelEditing);

  // 빙고 내용 편집 버튼 클릭
  const handleEditClick = () => {
    startEditing();
    onFocusFirstBingo();
  };

  // 저장하기 버튼 클릭
  const handleSaveClick = () => {
    stopEditing();
    saveEditing();
  };

  // 취소 버튼 클릭
  const handleCancelClick = () => {
    stopEditing();
    cancelEditing();
  };

  return (
    <>
      {isEditing ? (
        <div className="flex items-center gap-1 sm:gap-2">
          <Button size="sm" onClick={handleSaveClick}>
            저장하기
          </Button>
          <Button variant="ghost" size="sm" onClick={handleCancelClick}>
            취소
          </Button>
        </div>
      ) : (
        <Button variant="outline" size="sm" onClick={handleEditClick}>
          빙고 내용 편집
        </Button>
      )}
    </>
  );
};

export default BingoEditActions;
