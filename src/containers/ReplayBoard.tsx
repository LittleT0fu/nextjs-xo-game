import Square from "@/components/Square";
import React, { use, useEffect, useState } from "react";

export default function ReplayBoard({ action, boardSize, winnerLine }: any) {
  const [board, setBoard] = useState(Array(boardSize * boardSize).fill(null));

  useEffect(() => {
    setBoard(
      board.map((b, index) => {
        return action.map((line: any) => {
          if (line.index === index) {
            return line.value;
          }
        });
      })
    );
  }, []);
  return (
    <div className="flex justify-center pt-4">
      <div
        className={`relative rounded-2xl grid ${
          boardSize === 3
            ? "grid-cols-[repeat(3,minmax(0,1fr))]"
            : "grid-cols-[repeat(4,minmax(0,1fr))]"
        } overflow-hidden gap-0.5`}
      >
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              value={board[index]}
              winning={winnerLine.some((line: { index: number }) =>
                line.index === index ? true : false
              )}
              setValue={() => {}}
              currentPlayer={null}
              type={"replay"}
            />
          );
        })}
      </div>
    </div>
  );
}
