export type Player = "X" | "O";
export type Result = "X" | "O" | null | "Tie";
export interface Action {
  index: number;
  value: "X" | "O";
}

export interface Match {
  winner?: Result;
  action: {};
  gameStart: Date;
}
