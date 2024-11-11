import { Player, Result } from "@/interfaces/interface";

export function aiTurn(board: any[], dept: number, humanPlayer: Player) {
  let aiPlayer = humanPlayer === "O" ? "X" : "O";
}

export function getAIMove(board: any[], humanPlayer: Player) {
  const random = Math.floor(Math.random() * 100);

  if (random > 35) {
    return randomMove(board);
  } else {
    return bestMove(board, humanPlayer);
  }
}

export function bestMove(board: any[], humanPlayer: Player) {
  let aiPlayer: Player = humanPlayer === "O" ? "X" : "O";
  let bestScore = -Infinity;
  let move = 0;
  board.forEach((b, i) => {
    if (b === null) {
      board[i] = aiPlayer;
      let score = miniMax(board, 0, humanPlayer, aiPlayer, false);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  });
  return move;
}

function miniMax(
  board: any[],
  dept: number,
  humanPlayer: Player,
  aiPlayer: Player,
  isMaximizing: boolean
) {
  let result: Result = checkWinner(board);
  if (result !== null) {
    if (result === humanPlayer) return -1;
    if (result === aiPlayer) return 1;
    return 0;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    board.forEach((b, i) => {
      if (board[i] == null) {
        board[i] = aiPlayer;
        let score = miniMax(board, dept + 1, humanPlayer, aiPlayer, false);
        board[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    });
    return bestScore;
  } else {
    let bestScore = Infinity;
    board.forEach((b, i) => {
      if (board[i] === null) {
        board[i] = humanPlayer;
        let score = miniMax(board, dept + 1, humanPlayer, aiPlayer, true);
        board[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    });
    return bestScore;
  }
}

export function randomMove(board: any[]) {
  const emptyCells: number[] = [];
  board.forEach((cell, i) => {
    if (cell === null) emptyCells.push(i);
  });
  return emptyCells[Math.floor(Math.random() * emptyCells.length)];
}

function checkWinner(board: any[]) {
  const size = Math.sqrt(board.length);
  const lines = [];

  // Rows
  for (let i = 0; i < size; i++) {
    let indexLine = [];
    for (let j = i * size; j < size * (i + 1); j++) {
      indexLine.push({
        index: j,
        value: board[j],
      });
    }
    lines.push(indexLine);
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
      return "X";
    } else if (line.every((cell) => cell.value === "O")) {
      return "O";
    }
  }
  if (isBoardFull(board)) return "Tie";

  return null;
}

function isBoardFull(board: any[]) {
  return board.every((cell) => cell !== null);
}
