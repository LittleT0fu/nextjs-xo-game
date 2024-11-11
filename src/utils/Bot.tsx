function bestMove(board: any[]) {
  const boardSize = Math.sqrt(board.length);
  const ai = "X";
  let bestScore = -Infinity;
  for (let i = 0; i < boardSize; i++) {
    for (let j = i * boardSize; j < boardSize; i++) {
      if (board[j] == null) {
        board[j] = ai;
      }
    }
  }

  //
}

export function randomMove(board: any[]) {
  const emptyCells: number[] = [];
  board.forEach((cell, i) => {
    if (cell === null) emptyCells.push(i);
  });
  return emptyCells[Math.floor(Math.random() * emptyCells.length)];
}
