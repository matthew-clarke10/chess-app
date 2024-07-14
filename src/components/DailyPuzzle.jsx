import PropTypes from 'prop-types';
import { Chessboard } from 'react-chessboard';
import { getRandomPuzzle, handleMove } from '../utils/chess';
import { capitalise } from '../utils/other';

const DailyPuzzle = ({ difficulty }) => {
  return (
    <div className="w-1/4 bg-orange-200">
      <div>{capitalise(difficulty)} Puzzle</div>
      <Chessboard
        boardWidth={250}
        position={getRandomPuzzle().fen}
        onPieceDrop={(sourceSquare, targetSquare) => {
          handleMove(sourceSquare, targetSquare);
        }}
      />
    </div>
  )
}

DailyPuzzle.propTypes = {
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
};

export default DailyPuzzle;