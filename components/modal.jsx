"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modalRef?.current?.open) {
      modalRef.current.showModal();
    }
  }, []);

  const onHide = () => {};
  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="flex flex-col p-2 border border-teal-600 rounded-md shadow-md shadow-teal-700 dark:bg-opacity-95 "
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer">
        <Image src="/xmark.svg" alt="close" width={30} height={30} />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
};
