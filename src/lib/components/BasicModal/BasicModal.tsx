import React, { FC, ReactNode } from "react";

interface BasicModalProps {
  children: ReactNode;
  closeModalHandler: () => void;
}

const BasicModal: FC<BasicModalProps> = ({ children, closeModalHandler }) => (
  <>
    <dialog
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-3/4 md:inset-0 h-[calc(100%-1rem)] max-h-[50%]"
      open
      data-testid="BasicModal"
    >
      {children}
    </dialog>
    <div
      onClick={closeModalHandler}
      className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>
  </>
);

export default BasicModal;
