import React from "react";

type Player = "X" | "O" | null | "Tile";
interface SquareProps {
  index: number;
  value: Player;
  setValue: () => void;
  currentPlayer: Player;
  winning: any;
}

export default function Square({
  index,
  value,
  setValue,
  currentPlayer,
  winning,
}: SquareProps) {
  const classname = "group w-[10rem] h-[10rem] text-[5rem]";
  const pClassname =
    "w-full w-full opacity-0 group-hover:opacity-100 duration-150 text-gray-400";
  if (!value) {
    return (
      <button className={`${classname} bg-white`} onClick={setValue}>
        <p className={`${pClassname}`}>{currentPlayer}</p>
      </button>
    );
  }
  return (
    <button
      className={`${classname} ${
        value === "X"
          ? winning
            ? "text-red-600 bg-red-200"
            : "text-red-600 bg-white"
          : winning
          ? "text-green-600 bg-green-200"
          : "text-green-600 bg-white"
      } `}
      disabled
    >
      {value}
    </button>
  );
}
