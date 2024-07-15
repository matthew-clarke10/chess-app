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
      <div className="flex flex-col md:flex-row gap-8 px-0 xs:px-8 py-0 xs:py-4">
        <div className="flex justify-center items-center w-full md:w-auto mb-4 md:mb-0">
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

        <div className="flex flex-col w-full text-center bg-red-200">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-4xl">White to Play</h2>
            <div>Hint</div>
            <div>View Solution</div>
          </div>
          <div className="flex justify-center items-center h-full">
            <div>Correct!</div>
          </div>
        </div>
      </div>
      <button onClick={() => setRandomPuzzle(getRandomPuzzle())}>New Puzzle</button>
    </>
  );
};

export default Puzzle;