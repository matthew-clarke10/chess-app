import PropTypes from 'prop-types';
import { useState } from 'react';
import DailyPuzzle from "./DailyPuzzle";

const DailyPuzzles = ({ updatePuzzlesSolved, boardColors }) => {
  const [difficulty, setDifficulty] = useState("easy");
  return (
    <section className="py-4">
      <h1 className="text-4xl text-center pb-2 font-bold">Daily Puzzles</h1>
      <section className="hidden lg:flex flex-2 justify-evenly w-full">
        <div className="flex flex-col border-x-4 border-t-4 border-border-light dark:border-border-dark">
          <h2 className="text-4xl text-center bg-secondary-light dark:bg-secondary-dark">Easy</h2>
          <DailyPuzzle difficulty="easy" updatePuzzlesSolved={updatePuzzlesSolved} boardColors={boardColors} />
        </div>
        <div className="flex flex-col border-x-4 border-t-4 border-border-light dark:border-border-dark">
          <h2 className="text-4xl text-center bg-secondary-light dark:bg-secondary-dark">Medium</h2>
          <DailyPuzzle difficulty="medium" updatePuzzlesSolved={updatePuzzlesSolved} boardColors={boardColors} />
        </div>
        <div className="flex flex-col border-x-4 border-t-4 border-border-light dark:border-border-dark">
          <h2 className="text-4xl text-center bg-secondary-light dark:bg-secondary-dark">Hard</h2>
          <DailyPuzzle difficulty="hard" updatePuzzlesSolved={updatePuzzlesSolved} boardColors={boardColors} />
        </div>
      </section>
      <section className="flex lg:hidden flex-2 justify-evenly w-[303px] lg:w-96 mx-auto">
        <div className="flex flex-col border-x-4 border-t-4 border-border-light dark:border-border-dark">
          <div className="flex">
            <button onClick={() => { setDifficulty("easy") }} className={`flex-1 text-2xl ${difficulty === "easy" ? "bg-green-light dark:bg-green-dark cursor-default" : "bg-secondary-light dark:bg-secondary-dark hover:opacity-80"}`}>Easy</button>
            <button onClick={() => { setDifficulty("medium") }} className={`flex-1 text-2xl border-x-4 border-border-light dark:border-border-dark ${difficulty === "medium" ? "bg-green-light dark:bg-green-dark cursor-default" : "bg-secondary-light dark:bg-secondary-dark hover:opacity-80"}`}>Medium</button>
            <button onClick={() => { setDifficulty("hard") }} className={`flex-1 text-2xl ${difficulty === "hard" ? "bg-green-light dark:bg-green-dark cursor-default" : "bg-secondary-light dark:bg-secondary-dark hover:opacity-80"}`}>Hard</button>
          </div>
          <DailyPuzzle difficulty={difficulty} updatePuzzlesSolved={updatePuzzlesSolved} boardColors={boardColors} />
        </div>
      </section>
    </section>
  )
}

DailyPuzzles.propTypes = {
  updatePuzzlesSolved: PropTypes.func.isRequired,
  boardColors: PropTypes.shape({
    light: PropTypes.string.isRequired,
    dark: PropTypes.string.isRequired,
  }).isRequired,
};

export default DailyPuzzles;