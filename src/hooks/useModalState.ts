import { useState } from 'react';

export interface ImodalState {
  active: boolean;
  handleModalOpen: () => void;
  handleModalClose: () => void;
}

const useModalState = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleModalOpen = () => setActive(true);

  const handleModalClose = () => setActive(false);

  return { active, handleModalOpen, handleModalClose };
};

export default useModalState;
