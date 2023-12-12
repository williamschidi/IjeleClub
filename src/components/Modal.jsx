import { useContext } from 'react';
import { createContext, useState } from 'react';

const ModalContext = createContext();

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState('');
  const open = setIsOpen;
  const close = () => setIsOpen('');

  return (
    <ModalContext.Provider value={{ open, close, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open() {
  const { open } = useContext();
  return;
}

export default Modal;
