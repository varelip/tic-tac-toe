import type { Cell } from "../types/game";

interface CellProps {
  value: Cell;
  isWinningCombination: boolean;
  onClick: () => void;
}

export function Cell(props: CellProps) {
  const isX = props.value === "X";
  const isO = props.value === "O";

  const cellColor = isX
    ? "bg-player-x shadow-[0_5px_0_0_#3274C5]"
    : isO
      ? "bg-player-o shadow-[0_5px_0_0_#B96B08]"
      : "bg-cell shadow-[0_5px_0_0_#302344] hover:bg-[#55417d]!";

  return (
    <button
      onClick={props.onClick}
      className={`h-28 w-28 rounded-xl text-6xl font-black flex items-center justify-center transition-all duration-100 active:translate-y-1.25 active:shadow-none text-white ${cellColor} ${props.isWinningCombination ? "bg-accent! shadow-[0_5px_0_0_#7fae32]!" : ""}`}
    >
      {props.value}
    </button>
  );
}
