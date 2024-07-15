import { getPuzzlesSolved } from '../utils/chessUtils';

const Statistics = () => {
  return (
    <section className="flex flex-1 bg-red-200 w-full justify-center items-center">
      <div>Puzzles Solved: {getPuzzlesSolved()}</div>
    </section>
  )
}

export default Statistics;