import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { getRandomPuzzle, handleMove } from '../utils/chessUtils';
import { capitalise } from '../utils/other';

const DailyPuzzle = ({ difficulty }) => {
  const [boardWidth, setBoardWidth] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      setBoardWidth(300);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div>{capitalise(difficulty)} Puzzle</div>
      <Chessboard
        boardWidth={boardWidth}
        position={getRandomPuzzle().fen}
        onPieceDrop={(sourceSquare, targetSquare) => {
          handleMove(sourceSquare, targetSquare);
        }}
      />
    </>
  )
}

DailyPuzzle.propTypes = {
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
};

export default DailyPuzzle;