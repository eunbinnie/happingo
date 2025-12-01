'use client';

import useModalState from '@/hooks/useModalState';

import Modal from './Modal';

const BingoEditModal = () => {
  const { active, handleModalOpen, handleModalClose } = useModalState();

  return (
    <>
      <button type="button" onClick={handleModalOpen}>
        빙고 편집
      </button>
      <Modal active={active} onClose={handleModalClose}>
        <div>
          <h1>빙고 편집</h1>
        </div>
      </Modal>
    </>
  );
};

export default BingoEditModal;
