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
    return () => {
      window.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [onClose]);
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center transition-opacity duration-300">
        <div className="bg-white p-5 rounded-md shadow-lg max-w-sm md:ax-w-md mx-auto transition-transform duration-300 transform-gpu">
          <button onClick={onClose}>Close</button>
          {children}
        </div>
      </div>
    </>
  );
}
