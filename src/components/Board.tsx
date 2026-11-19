import type { Board } from "../types/game";
import { Cell } from "./Cell";

interface BoardProps {
  board: Board;
  winningCondition: number[] | null;
  onCellClick: (i: number) => void;
}

export function Board(props: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {props.board.map((cell, index) => {
        const isWinningCombination =
          props.winningCondition?.includes(index) ?? false;
        return (
          <Cell
            key={index}
            value={cell}
            isWinningCombination={isWinningCombination}
            onClick={() => props.onCellClick(index)}
          />
        );
      })}
    </div>
  );
}
