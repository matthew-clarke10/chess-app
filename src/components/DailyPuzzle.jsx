import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { getRandomPuzzle, handleMove } from '../utils/chessUtils';
import { capitalise } from '../utils/other';
import { FaLightbulb } from "react-icons/fa";

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
      <h2 className="text-4xl text-center mb-2">{capitalise(difficulty)}</h2>
      <Chessboard
        boardWidth={boardWidth}
        position={getRandomPuzzle().fen}
        onPieceDrop={(sourceSquare, targetSquare) => {
          handleMove(sourceSquare, targetSquare);
        }}
      />
      <div className="flex text-2xl text-center">
        <div className="flex-1 bg-yellow-300 hover:bg-yellow-400">
          <button className="w-full">Hint</button>
        </div>
        <div className="flex-1 bg-blue-400 hover:bg-blue-500">
          <button className="w-full">Solution</button>
        </div>
      </div>
      <div className="flex text-2xl text-center">
        <button className="w-full bg-green-400 hover:bg-green-500">Correct</button>
      </div>
    </>
  )
}

DailyPuzzle.propTypes = {
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
};

export default DailyPuzzle;