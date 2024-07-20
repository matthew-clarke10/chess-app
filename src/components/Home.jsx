import PropTypes from 'prop-types';
import DailyPuzzles from './DailyPuzzles';
import Statistics from './Statistics';

const Home = ({ puzzlesSolved, updatePuzzlesSolved }) => {
  return (
    <main className="flex flex-col h-main">
      <DailyPuzzles updatePuzzlesSolved={updatePuzzlesSolved} />
      <Statistics puzzlesSolved={puzzlesSolved} />
    </main>
  )
}


Home.propTypes = {
  puzzlesSolved: PropTypes.shape({
    total: PropTypes.number.isRequired,
    easy: PropTypes.number.isRequired,
    medium: PropTypes.number.isRequired,
    hard: PropTypes.number.isRequired,
  }).isRequired,
  updatePuzzlesSolved: PropTypes.func.isRequired,
};

export default Home;