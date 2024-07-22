import PropTypes from 'prop-types';

const Statistics = ({ puzzlesSolved }) => {
  return (
    <section className="flex flex-1 w-full items-center bg-background-light dark:bg-background-dark border-t-4 border-border-light dark:border-border-dark">
      <div className="flex flex-col xs:flex-row gap-0 xs:gap-4 w-full mx-4 justify-evenly">
        <div className="flex flex-row xs:flex-col justify-between xs:justify-center items-center w-56 mx-auto xs:w-1/4 text-left xs:text-center font-bold">
          <div className="xs:w-1/2 md:w-full text-2xl xs:text-lg sm:text-2xl xl:text-4xl">Total Solved:</div>
          <div className="w-4 xs:w-full text-center text-2xl xs:text-lg sm:text-2xl xl:text-4xl">{puzzlesSolved.total}</div>
        </div>
        <div className="flex flex-row xs:flex-col justify-between xs:justify-center items-center w-56 mx-auto xs:w-1/4 text-left xs:text-center font-bold text-green-400">
          <div className="xs:w-1/2 md:w-full text-2xl xs:text-lg sm:text-2xl xl:text-4xl">Easy Solved:</div>
          <div className="w-4 xs:w-full text-center text-2xl xs:text-lg sm:text-2xl xl:text-4xl">{puzzlesSolved.easy}</div>
        </div>
        <div className="flex flex-row xs:flex-col justify-between xs:justify-center items-center w-56 mx-auto xs:w-1/4 text-left xs:text-center font-bold text-yellow-400">
          <div className="xs:w-1/2 md:w-full text-2xl xs:text-lg sm:text-2xl xl:text-4xl">Medium Solved:</div>
          <div className="w-4 xs:w-full text-center text-2xl xs:text-lg sm:text-2xl xl:text-4xl">{puzzlesSolved.medium}</div>
        </div>
        <div className="flex flex-row xs:flex-col justify-between xs:justify-center items-center w-56 mx-auto xs:w-1/4 text-left xs:text-center font-bold text-red-400">
          <div className="xs:w-1/2 md:w-full text-2xl xs:text-lg sm:text-2xl xl:text-4xl">Hard Solved:</div>
          <div className="w-4 xs:w-full text-center text-2xl xs:text-lg sm:text-2xl xl:text-4xl">{puzzlesSolved.hard}</div>
        </div>
      </div>
    </section>
  )
}

Statistics.propTypes = {
  puzzlesSolved: PropTypes.shape({
    total: PropTypes.number.isRequired,
    easy: PropTypes.number.isRequired,
    medium: PropTypes.number.isRequired,
    hard: PropTypes.number.isRequired,
  }).isRequired,
};

export default Statistics;