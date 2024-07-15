import { Chess } from 'chess.js';
import puzzles from '../data/puzzles';

export const getPuzzlesSolved = () => {
  const puzzlesSolvedObject = localStorage.getItem("puzzlesSolved");
  if (puzzlesSolvedObject) {
    const puzzlesSolved = JSON.parse(puzzlesSolvedObject);
    return puzzlesSolved;
  } else {
    const puzzlesSolved = createPuzzlesSolved();
    return puzzlesSolved;
  }
};

export const createPuzzlesSolved = () => {
  localStorage.setItem("puzzlesSolved", 0);
  return 0;
};

export const incrementPuzzlesSolved = () => {
  let puzzleSolved = getPuzzlesSolved();
  puzzleSolved++;
  localStorage.setItem("puzzlesSolved", JSON.stringify(puzzleSolved));
};

export const getRandomPuzzle = () => {
  const randomIndex = Math.floor(Math.random() * puzzles.length);
  return puzzles[randomIndex];
};

export const newPuzzle = (randomPuzzle, setRandomPuzzle, setMoveIndex, setFen, setChess, setBoardWidth, setArrows, setSquareStyles, setHint, setShowHint, setPuzzleSolved) => {
  let newPuzzle = randomPuzzle;

  do {
    newPuzzle = getRandomPuzzle();
  } while (randomPuzzle.fen === newPuzzle.fen);

  setRandomPuzzle(newPuzzle);
  setMoveIndex(0);
  setFen(newPuzzle.fen);
  setChess(new Chess(newPuzzle.fen));
  setBoardWidth(calculateBoardWidth());
  setArrows([]);
  setSquareStyles({});
  setHint({});
  setShowHint(0);
  setPuzzleSolved(false);
};

export const calculateBoardWidth = () => {
  if (window.innerWidth <= 476) {
    return window.innerWidth - 32;
  } else if (window.innerWidth <= 768) {
    return 444;
  } else if (window.innerWidth < 1250) {
    return (window.innerWidth * 0.65) - 130;
  } else {
    return 680;
  }
};

export const handleHintClick = (hint, showHint, puzzleSolved, setArrows, setSquareStyles, setShowHint) => {
  if (!puzzleSolved) {
    if (showHint === 0) {
      setSquareStyles({
        [hint.from]: { backgroundColor: "rgb(0, 255, 0)" }
      });
      setShowHint(1);
    } else if (showHint === 1) {
      setArrows([[hint.from, hint.to, hint.color]]);
      setShowHint(2);
    }
  }
};

export const handleMove = (sourceSquare, targetSquare, chess, randomPuzzle, moveIndex, setMoveIndex, setFen, setPuzzleSolved) => {
  const move = { from: sourceSquare, to: targetSquare };
  const result = chess.move(move);

  if (result) {
    if (result.san === randomPuzzle.correctMoves[moveIndex].san) {
      setFen(chess.fen());
      console.log(`Correct move: ${result.san}`);

      if (moveIndex === randomPuzzle.responseMoves.length) {
        setPuzzleSolved(true);
        incrementPuzzlesSolved();
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