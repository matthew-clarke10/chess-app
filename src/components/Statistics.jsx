import { getPuzzlesSolved } from '../utils/chessUtils';

const Statistics = () => {
  return (
    <section className="flex flex-1 w-full items-center bg-background-light dark:bg-background-dark border-y-2 border-text-light">
      <div className="flex flex-col xs:flex-row w-full justify-evenly">
        <div className="flex flex-row xs:flex-col justify-between xs:justify-center items-center w-56 mx-auto xs:w-1/4 text-left xs:text-center font-bold">
          <div className="xs:w-1/2 md:w-full text-2xl xs:text-lg sm:text-2xl xl:text-4xl">Total Solved:</div>
          <div className="w-4 text-center text-2xl xs:text-lg sm:text-2xl xl:text-4xl">{getPuzzlesSolved("total")}</div>
        </div>
        <div className="flex flex-row xs:flex-col justify-between xs:justify-center items-center w-56 mx-auto xs:w-1/4 text-left xs:text-center font-bold text-green-400">
          <div className="xs:w-1/2 md:w-full text-2xl xs:text-lg sm:text-2xl xl:text-4xl">Easy Solved:</div>
          <div className="w-4 text-center text-2xl xs:text-lg sm:text-2xl xl:text-4xl">{getPuzzlesSolved("easy")}</div>
        </div>
        <div className="flex flex-row xs:flex-col justify-between xs:justify-center items-center w-56 mx-auto xs:w-1/4 text-left xs:text-center font-bold text-yellow-400">
          <div className="xs:w-1/2 md:w-full text-2xl xs:text-lg sm:text-2xl xl:text-4xl">Medium Solved:</div>
          <div className="w-4 text-center text-2xl xs:text-lg sm:text-2xl xl:text-4xl">{getPuzzlesSolved("medium")}</div>
        </div>
        <div className="flex flex-row xs:flex-col justify-between xs:justify-center items-center w-56 mx-auto xs:w-1/4 text-left xs:text-center font-bold text-red-400">
          <div className="xs:w-1/2 md:w-full text-2xl xs:text-lg sm:text-2xl xl:text-4xl">Hard Solved:</div>
          <div className="w-4 text-center text-2xl xs:text-lg sm:text-2xl xl:text-4xl">{getPuzzlesSolved("hard")}</div>
        </div>
      </div>
    </section>
  )
}

export default Statistics;