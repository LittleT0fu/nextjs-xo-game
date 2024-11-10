import React from "react";

type Player = "X" | "O" | null | "Tile";
interface SquareProps {
  index: number;
  value: Player;
  setValue: () => void;
  currentPlayer: Player;
  winning: any;
  type: string;
}

export default function Square({
  index,
  value,
  setValue,
  currentPlayer,
  winning,
  type,
}: SquareProps) {
  const classname = `group text-chalk ${
    type === "play" && "w-[7rem] h-[7rem] text-[5rem]"
  } 
  ${type === "replay" && "w-[4rem] h-[4rem] text-[2rem]"}`;
  const pClassname =
    "w-full w-full opacity-0 group-hover:opacity-100 duration-150 text-gray-400";

  if (type === "replay") {
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
