"use client";
import React, { useEffect, useState } from "react";
import Square from "@/components/Square";

interface Action {
  index: number;
  value: "X" | "O";
}

type Player = "X" | "O" | null;

export default function Board() {
  let boardSize = 3;
  const [board, setBoard] = useState(Array(boardSize * boardSize).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winnerLine, setWinnerLine] = useState<Action[]>([]);
  const [action, setAction] = useState<Action[]>([]);

  function setSqureValue(index: number) {
    setBoard(
      board.map((val, i) => {
        if (i === index) {
          const newAction = { index: i, value: currentPlayer };
          setAction([...action, newAction]);
          return currentPlayer;
        }
        return val;
      })
    );
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function reset() {
    setBoard(Array(boardSize * boardSize).fill(null));
    setWinnerLine([]);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
    setAction([]);
  }

  function checkWinner() {
    const size = Math.sqrt(board.length);
    const lines = [];

    // Rows
    for (let i = 0; i < size; i++) {
      let value = board.slice(i * size, i * size + size);
      let indexLine = [];
      for (let j = i * size; j < size * (i + 1); j++) {
        indexLine.push({
          index: j,
          value: value[j],
        });
      }
      lines.push(indexLine);
      // lines.push(board.slice(i * size, i * size + size));
    }

    // Cols
    for (let i = 0; i < size; i++) {
      const col = [];
      for (let j = 0; j < size; j++) {
        col.push({
          index: i + j * size,
          value: board[i + j * size],
        });
      }
      lines.push(col);
    }
    // Diagonals
    const diag1 = [];
    const diag2 = [];
    for (let i = 0; i < size; i++) {
      diag1.push({
        index: i * (size + 1),
        value: board[i * (size + 1)],
      });
      diag2.push({
        index: (i + 1) * (size - 1),
        value: board[(i + 1) * (size - 1)],
      });
    }
    lines.push(diag1, diag2);
    // Check for winner
    for (let line of lines) {
      if (line.every((cell) => cell.value === "X")) {
        setWinnerLine([...winnerLine, ...line]);
        return "X";
      } else if (line.every((cell) => cell.value === "O")) {
        setWinnerLine([...winnerLine, ...line]);
        return "O";
      }
    }
    return null;
  }
  //active everytime board has action
  useEffect(() => {
    console.log(checkWinner());
  }, [board]);

  return (
    <div className="">
      <p className="text-blue-500">turn {currentPlayer}</p>
      <div
        className={`relative grid grid-cols-[repeat(3,minmax(0,1fr))] overflow-hidden bg-gray-800 gap-2`}
      >
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              value={board[index]}
              setValue={() => setSqureValue(index)}
              currentPlayer={currentPlayer}
              index={index}
              winning={winnerLine.some((line) =>
                line.index === index ? true : false
              )}
            />
          );
        })}
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
