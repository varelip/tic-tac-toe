import { useState } from "react";
import type { Board, Player } from "../types/game";
import { checkWinner, isDraw, getWinningCondition } from "../utils/gameLogic";

export function useTicTacToe() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");

  const winner = checkWinner(board);
  const draw = isDraw(board);
  const winningCondition = getWinningCondition(board);

  function handleCellClick(i: number) {
    if (winner !== null || draw || board[i] !== null) {
      return;
    }

    const nextBoard = board.slice();

    nextBoard[i] = currentPlayer;
    setBoard(nextBoard);

    if (checkWinner(nextBoard) === null && !isDraw(nextBoard)) {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
  }

  return {
    board,
    currentPlayer,
    winner,
    draw,
    winningCondition,
    handleCellClick,
    resetGame,
  };
}
