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
    <main className="px-5 py-6 min-h-screen flex items-center justify-start flex-col">
      <header className="w-full mb-2 text-left">
        <h1 className="leading-[0.6] tracking-tight text-3xl font-black">
          <span className="text-white">tic</span>
          <br />
          <span className="text-white">tac</span>
          <br />
          <span className="text-accent">toe.</span>
        </h1>
      </header>

      <section className="w-100 bg-surface p-5 shadow-xl rounded-2xl">
        <div className="mb-6 text-center">
          <p className="text-lg font-bold text-white">
            {winner !== null
              ? `Player ${winner} wins`
              : draw
                ? `It's a Draw`
                : `${currentPlayer}'s turn`}
          </p>
        </div>

        <Board
          board={board}
          winningCondition={winningCondition}
          onCellClick={handleCellClick}
        />

        <button
          onClick={resetGame}
          disabled={winner === null && !draw}
          className="mt-8 w-full rounded-xl bg-accent px-6 py-4 font-extrabold text-purple-950 shadow-[0_5px_0_0_#7fae32] transition-all duration-100 active:translate-y-1.25 active:shadow-none disabled:cursor-default disabled:opacity-80 disabled:translate-y-0 disabled:shadow-none"
        >
          Reset game
        </button>
      </section>

      <footer className="mt-6">
        <p className="text-white/50 text-md ">Made by Varel Imanuel Putera.</p>
      </footer>
    </main>
  );
}

export default App;
