"use client";
import React, { useState } from "react";
import { Match } from "@/interfaces/interface";
import Modal from "./modal/Modal";
import ReplayBoard from "@/containers/ReplayBoard";

export function HistoryCard({ history }: any) {
  const { winner, gameMode, boardSize, gameStart, action, winnerLine } =
    history;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function ModalHandler() {
    setIsModalOpen(!isModalOpen);
  }

  const resultContent =
    winner === "Tile" ? (
      <>
        <span className="w-2/5 text-start">O</span>
        <span className="font-bold">Tile</span>
        <span className="w-2/5 text-end">X</span>
      </>
    ) : (
      <>
        <span className="w-2/5 text-start">
          O{" "}
          <span
            className={` ${winner === "O" ? "text-green-700" : "text-red-700"}`}
          >
            {winner === "O" ? "Winner" : "Lost"}
          </span>
        </span>
        <span className="font-bold">VS</span>
        <span className={`w-2/5 text-end`}>
          <span
            className={` ${winner === "X" ? "text-green-700" : "text-red-700"}`}
          >
            {winner === "X" ? "Winner" : "Lost"}
          </span>{" "}
          X
        </span>
      </>
    );

  return (
    <>
      <button className="w-full" onClick={ModalHandler}>
        <div className="flex flex-col border-b-2 gap-1 pr-2">
          <div className="flex text-xs justify-between">
            <div className="flex gap-2">
              <span>{gameMode}</span>
              <span>
                {boardSize}x{boardSize}
              </span>
            </div>
            <div>{formatDate(gameStart)}</div>
          </div>
          <div className="flex justify-between">{resultContent}</div>
        </div>
      </button>
      <Modal onClose={ModalHandler} isOpen={isModalOpen}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col border-b-2 gap-1 pr-2 w-[240px]">
            <div className="flex text-xs justify-between">
              <div className="flex gap-2">
                <span>{gameMode}</span>
                <span>
                  {boardSize}x{boardSize}
                </span>
              </div>
              <div>{formatDate(gameStart)}</div>
            </div>
            <div className="flex justify-between">{resultContent}</div>
          </div>
          <ReplayBoard
            action={action}
            boardSize={boardSize}
            winnerLine={winnerLine}
          />
          <button
            className="btn1 border-red-600 hover:bg-red-600"
            onClick={ModalHandler}
          >
            close
          </button>
        </div>
      </Modal>
    </>
  );
}

function formatDate(targetTime: Date) {
  const time = new Date(targetTime);
  const date = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  return `${date}/${month}/${year} ${hour}:${minute}:${second}`;
}

export default function HistoryBoard() {
  //get data from local storage
  if (localStorage.getItem("matchHistory") === null) {
    return <div>No history</div>;
  }
  const matchHistory: string | null = localStorage.getItem("matchHistory");
  let history: Match[];
  try {
    history = matchHistory ? JSON.parse(matchHistory) : null;
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
    history = [];
  }

  return (
    <div
      className="flex flex-col gap-4 mt-2 pt-2 overflow-auto max-h-[240px] overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      {history.toReversed().map((his, i) => (
        <HistoryCard key={i} history={his} />
      ))}
    </div>
  );
}
