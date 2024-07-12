import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import puzzles from '../data/puzzles';

function getRandomPuzzle() {
  const randomIndex = Math.floor(Math.random() * puzzles.length);
  return puzzles[randomIndex];
}

const Puzzle = () => {
  const randomPuzzle = getRandomPuzzle();
  const [moveIndex, setMoveIndex] = useState(0);
  const [fen, setFen] = useState(randomPuzzle.fen);
  const [chess] = useState(new Chess(
    randomPuzzle.fen,
  ));
  const [boardWidth, setBoardWidth] = useState(() => {
    if (window.innerWidth < 768) {
      return window.innerWidth - 64;
    } else if (window.innerWidth < 1280) {
      return (window.innerWidth * 0.65) - 64;
    } else {
      return 760;
    }
  });

  const handleMove = (sourceSquare, targetSquare) => {
    const move = { from: sourceSquare, to: targetSquare };
    const result = chess.move(move);

    if (result) {
      if (result.san === randomPuzzle.correctMoves[moveIndex]) {
        setFen(chess.fen());
        console.log(`Correct move: ${result.san}`);

        if (chess.isCheckmate()) {
          console.log('Checkmate!');
        } else {
          chess.move(randomPuzzle.responseMoves[moveIndex]);
          setFen(chess.fen());
          setMoveIndex(moveIndex + 1);
        }
      } else {
        chess.undo();
        console.log(`Incorrect move: ${result.san}`);
      }
    } else {
      console.log('Invalid move:', move);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      let newWidth;
      if (window.innerWidth < 768) {
        newWidth = window.innerWidth - 64;
      } else if (window.innerWidth < 1280) {
        newWidth = (window.innerWidth * 0.65) - 64;
      } else {
        newWidth = 760;
      }
      setBoardWidth(newWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row mx-8">
        <div className="flex w-full mx-auto">
          <Chessboard
            boardWidth={boardWidth}
            position={fen}
            onPieceDrop={(sourceSquare, targetSquare) => {
              handleMove(sourceSquare, targetSquare);
            }}
          />
        </div>
        <div className="flex flex-col w-full text-center">
          <div className="flex flex-col h-full">
            <h2>White to Play</h2>
            <div>Hint</div>
            <div>View Solution</div>
          </div>
          <div className="flex justify-center items-center h-full">
            <div>Correct!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Puzzle;
