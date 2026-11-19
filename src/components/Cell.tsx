import type { Cell } from "../types/game";

interface CellProps {
  value: Cell;
  isWinningCombination: boolean;
  onClick: () => void;
}

export function Cell(props: CellProps) {
  return <button onClick={props.onClick}>{props.value}</button>;
}
