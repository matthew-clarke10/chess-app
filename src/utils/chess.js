// import { Chess } from 'chess.js';
import puzzles from '../data/puzzles';

export const getRandomPuzzle = () => {
  const randomIndex = Math.floor(Math.random() * puzzles.length);
  return puzzles[randomIndex];
}

export const handleMove = (sourceSquare, targetSquare, chess, randomPuzzle, moveIndex, setMoveIndex, setFen) => {
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