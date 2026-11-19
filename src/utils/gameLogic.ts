import type { Board, Player, Cell } from "../types/game";

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
] as const;

export function checkWinner(board: Board): Player | null {
  for (const winCon of winConditions) {
    const [a, b, c] = winCon;

    const firstCell: Cell = board[a];

    if (
      firstCell !== null &&
      firstCell === board[b] &&
      firstCell === board[c]
    ) {
      return firstCell;
    }
  }

  return null;
}

export function isDraw(board: Board): boolean {
  const isFull = board.every((cell) => cell !== null);

  return checkWinner(board) === null && isFull;
}

export function getWinningCondition(board: Board): number[] | null {
  for (const winCon of winConditions) {
    const [a, b, c] = winCon;
    const firstCell: Cell = board[a];

    if (
      firstCell !== null &&
      firstCell === board[b] &&
      firstCell === board[c]
    ) {
      return [a, b, c];
    }
  }

  return null;
}
