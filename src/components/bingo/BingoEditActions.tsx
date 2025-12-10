'use client';

import { useShallow } from 'zustand/react/shallow';

import { useEditActionStore } from '@/store';

import Button from '../button/Button';

interface BingoEditActionsProps {
  onFocusFirstBingoCard: () => void;
}

const BingoEditActions = ({ onFocusFirstBingoCard }: BingoEditActionsProps) => {
  const { isEditing, startEditing, finishEditing } = useEditActionStore(
    useShallow(state => ({
      isEditing: state.isEditing,
      startEditing: state.startEditing,
      finishEditing: state.finishEditing,
    }))
  );

  // 빙고 내용 편집 버튼 클릭
  const handleStartEditing = () => {
    startEditing();
    onFocusFirstBingoCard();
  };

  // 저장하기 버튼 클릭
  const handleSaveClick = () => {
    finishEditing('saved');
  };

  // 취소 버튼 클릭
  const handleCancelClick = () => {
    finishEditing('cancelled');
  };

  return isEditing ? (
    <div className="flex items-center gap-1 sm:gap-2">
      <Button size="sm" onClick={handleSaveClick}>
        저장하기
      </Button>
      <Button variant="ghost" size="sm" onClick={handleCancelClick}>
        취소
      </Button>
    </div>
  ) : (
    <Button variant="outline" size="sm" onClick={handleStartEditing}>
      빙고 내용 편집
    </Button>
  );
};

export default BingoEditActions;
