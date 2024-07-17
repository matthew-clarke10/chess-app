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
      <div className="h-full flex flex-col justify-between border-text-light">
        <div className="flex flex-col border-y-2 border-text-light">
          <Chessboard
            boardWidth={boardWidth}
            position={getRandomPuzzle().fen}
            onPieceDrop={(sourceSquare, targetSquare) => {
              handleMove(sourceSquare, targetSquare);
            }}
          />
        </div>
        <div>
          <div className="flex text-2xl text-center">
            <button className="w-full bg-green-400 hover:bg-green-500 border-y-2 border-text-light">Correct</button>
          </div>
          <div className="flex text-2xl text-center">
            <div className="flex-1 bg-yellow-300 hover:bg-yellow-400 border-r-2 border-text-light">
              <button className="w-full">Hint</button>
            </div>
            <div className="flex-1 bg-blue-400 hover:bg-blue-500">
              <button className="w-full">Solution</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

DailyPuzzle.propTypes = {
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
};

export default DailyPuzzle;