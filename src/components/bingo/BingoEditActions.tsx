'use client';

import { useState } from 'react';

import Button from '../button/Button';

const BingoEditActions = () => {
  const [isEditing, setIsEditing] = useState(false);

  // 빙고 내용 편집 버튼 클릭
  const handleEditClick = () => {
    setIsEditing(prev => !prev);
  };

  // 저장하기, 취소 공통 함수
  const handleExitEditMode = () => {
    setIsEditing(prev => !prev);
  };

  // 저장하기 버튼 클릭
  const handleSaveClick = () => {
    handleExitEditMode();
  };

  // 취소 버튼 클릭
  const handleCancelClick = () => {
    handleExitEditMode();
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
