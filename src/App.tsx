import { useTicTacToe } from "./hooks/useTicTacToe";
import { Board } from "./components/Board";
import "./App.css";

function App() {
  const {
    board,
    currentPlayer,
    winner,
    draw,
    winningCondition,
    handleCellClick,
    resetGame,
  } = useTicTacToe();

  return (
    <>
      <p>
        {winner !== null
          ? `Player ${winner} wins`
          : draw
            ? `It's a Draw`
            : `${currentPlayer}'s turn`}
      </p>

      <Board
        board={board}
        winningCondition={winningCondition}
        onCellClick={handleCellClick}
      />

      <button onClick={resetGame}>Reset game</button>
    </>
  );
}

export default App;
