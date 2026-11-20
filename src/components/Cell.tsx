import type { Cell } from "../types/game";

interface CellProps {
  value: Cell;
  isWinningCombination: boolean;
  onClick: () => void;
}

export function Cell(props: CellProps) {
  return (
    <button
      onClick={props.onClick}
      className="h-24 w-24 bg-white border rounded-xl text-3xl font-bold flex items-center justify-center"
    >
      {props.value}
    </button>
  );
}
