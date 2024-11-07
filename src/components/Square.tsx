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
  const classname = "group w-[7rem] h-[7rem] text-[5rem] text-chalk";
  const pClassname =
    "w-full w-full opacity-0 group-hover:opacity-100 duration-150 text-gray-400";
  if (!value) {
    return (
      <button className={`${classname} bg-gray-800`} onClick={setValue}>
        <p className={`${pClassname}`}>{currentPlayer}</p>
      </button>
    );
  }
  return (
    <button
      className={`${classname} ${
        value === "X"
          ? winning
            ? "bg-red-400"
            : "bg-gray-800"
          : winning
          ? "bg-green-400"
          : "bg-gray-800"
      } `}
      disabled
    >
      {value}
    </button>
  );
}
