"use client";
import React from "react";
import { Match } from "@/interfaces/interface";

export function HistoryCard({ history }: any) {
  const { winner, gameMode, boardSize } = history;
  return (
    <div className="flex gap-2">
      <span>{winner}</span>
      <span>{gameMode}</span>
      <span>{boardSize}</span>
    </div>
  );
}

export default function HistoryBoard() {
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

  console.log(history);

  return (
    <div>
      {history.map((his) => (
        <HistoryCard history={his} />
      ))}
    </div>
  );
}
