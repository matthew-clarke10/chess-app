import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { getRandomPuzzle, handleMove, calculateBoardWidth } from '../utils/chessUtils';

const Puzzle = () => {
  const [randomPuzzle, setRandomPuzzle] = useState(getRandomPuzzle);
  const [moveIndex, setMoveIndex] = useState(0);
  const [fen, setFen] = useState(randomPuzzle.fen);
  const [chess, setChess] = useState(new Chess(randomPuzzle.fen));
  const [boardWidth, setBoardWidth] = useState(calculateBoardWidth());

  useEffect(() => {
    setMoveIndex(0);
    setFen(randomPuzzle.fen);
    setChess(new Chess(randomPuzzle.fen));
  }, [randomPuzzle]);

  useEffect(() => {
    const handleResize = () => {
      setBoardWidth(calculateBoardWidth());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-0 xs:gap-4 sm:gap-8 px-0 sm:px-8 py-0 xs:py-4 sm:py-8">
        <div className="flex justify-center items-center w-full md:w-auto">
          <div className="flex justify-center items-center">
            <Chessboard
              boardWidth={boardWidth}
              position={fen}
              onPieceDrop={(sourceSquare, targetSquare) => {
                handleMove(sourceSquare, targetSquare, chess, randomPuzzle, moveIndex, setMoveIndex, setFen);
              }}
            />
          </div>
        </div>

        <div className="flex flex-col w-full xs:w-[444px] md:w-full text-center mx-auto bg-red-200">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-4xl">White to Play</h2>
            <div>Hint</div>
            <div>View Solution</div>
          </div>
          <div className="flex flex-col justify-center items-center h-full">
            <div>Correct!</div>
            <button onClick={() => setRandomPuzzle(getRandomPuzzle())}>New Puzzle</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Puzzle;