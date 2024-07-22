import PropTypes from 'prop-types';
import DailyPuzzles from './DailyPuzzles';
import Statistics from './Statistics';

const Home = ({ puzzlesSolved, updatePuzzlesSolved, boardColors }) => {
  return (
    <main className="flex flex-col h-main">
      <DailyPuzzles updatePuzzlesSolved={updatePuzzlesSolved} boardColors={boardColors} />
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
  boardColors: PropTypes.shape({
    light: PropTypes.string.isRequired,
    dark: PropTypes.string.isRequired,
  }).isRequired,
};

export default Home;