export type Player = "X" | "O" | null | "Tile";
export interface Action {
  index: number;
  value: "X" | "O";
}

export interface Match {
  winner?: Player;
  action: {};
  gameStart: Date;
}
