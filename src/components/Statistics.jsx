import { getPuzzlesSolved } from '../utils/chessUtils';

const Statistics = () => {
  return (
    <section className="flex flex-1 w-full items-center border-y-2 border-text-light">
      <div className="flex w-full justify-evenly text-2xl xl:text-4xl">
        <div className="flex flex-col text-center font-bold">
          <div>Total Solved</div>
          <div>{getPuzzlesSolved("total")}</div>
        </div>
        <div className="flex flex-col text-center font-bold text-green-400">
          <div>Easy Solved</div>
          <div>{getPuzzlesSolved("easy")}</div>
        </div>
        <div className="flex flex-col text-center font-bold text-yellow-400">
          <div>Medium Solved</div>
          <div>{getPuzzlesSolved("medium")}</div>
        </div>
        <div className="flex flex-col text-center font-bold text-red-400">
          <div>Hard Solved</div>
          <div>{getPuzzlesSolved("hard")}</div>
        </div>
      </div>
    </section>
  )
}

export default Statistics;