"use client";
import React, { useEffect } from "react";
import style from "./Modal.module.css";

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key == "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const handleOutsideClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).id === "modal") {
        onClose();
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("keydown", handleKeyDown, false);
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);
  return (
    <>
      <div
        id="modal"
        className="z-40 fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center transition-opacity duration-300"
      >
        <div className="z-50 bg-white p-5 rounded-md shadow-lg max-w-sm md:ax-w-md mx-auto transition-transform duration-300 transform-gpu">
          <div className="flex flex-col">{children}</div>
        </div>
      </div>
    </>
  );
}
