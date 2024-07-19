import { Chess } from 'chess.js';
import puzzles from '../data/puzzles';

export const getPuzzlesSolved = (difficulty) => {
  const puzzlesSolvedObject = localStorage.getItem(difficulty + "PuzzlesSolved");
  if (puzzlesSolvedObject) {
    const puzzlesSolved = JSON.parse(puzzlesSolvedObject);
    return puzzlesSolved;
  } else {
    const puzzlesSolved = createPuzzlesSolved(difficulty);
    return puzzlesSolved;
  }
};

export const createPuzzlesSolved = (difficulty) => {
  localStorage.setItem(difficulty + "PuzzlesSolved", 0);
  return 0;
};

export const incrementPuzzlesSolved = (difficulty) => {
  let totalPuzzleSolved = getPuzzlesSolved("total");
  let difficultyPuzzlesSolved = getPuzzlesSolved(difficulty);
  totalPuzzleSolved++;
  difficultyPuzzlesSolved++;
  localStorage.setItem("totalPuzzlesSolved", JSON.stringify(totalPuzzleSolved));
  localStorage.setItem(difficulty + "PuzzlesSolved", JSON.stringify(difficultyPuzzlesSolved));
};

export const getRandomPuzzle = () => {
  const randomIndex = Math.floor(Math.random() * puzzles.length);
  return puzzles[randomIndex];
};

export const newPuzzle = (randomPuzzle, setRandomPuzzle, setMoveIndex, setCurrentMove, setFen, setChess, setBoardWidth, setArrows, setSquareStyles, setHint, setShowHint, setSolutionRevealed, setSolutionRevealing, setPuzzleSolved) => {
  let newPuzzle = randomPuzzle;

  do {
    newPuzzle = getRandomPuzzle();
  } while (randomPuzzle.fen === newPuzzle.fen);

  setRandomPuzzle(newPuzzle);
  setMoveIndex(0);
  setCurrentMove(0);
  setFen(newPuzzle.fen);
  setChess(new Chess(newPuzzle.fen));
  setBoardWidth(calculateBoardWidth());
  setArrows([]);
  setSquareStyles({});
  setHint({});
  setShowHint(0);
  setSolutionRevealed(false);
  setSolutionRevealing(false);
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

export const handleSolutionClick = (chess, randomPuzzle, moveIndex, currentMove, setFen, setPlayerMove, setCurrentMove, setHistory, setSolutionRevealed, setSolutionRevealing) => {
  setSolutionRevealed(true);
  setSolutionRevealing(true);
  setPlayerMove("incorrect");
  let localMoveIndex = moveIndex;
  let localCurrentMove = currentMove;
  let localSolutionRevealed = true;

  const interval = setInterval(() => {
    if (localSolutionRevealed) {
      if (localMoveIndex < randomPuzzle.correctMoves.length) {
        if (localCurrentMove % 2 === 0) {
          chess.move(randomPuzzle.correctMoves[localMoveIndex].san);
          setFen(chess.fen());
          setCurrentMove(prev => prev + 1);
          setHistory(chess.history({ verbose: true }));
          localMoveIndex++;
        } else {
          chess.move(randomPuzzle.responseMoves[localMoveIndex - 1]);
          setFen(chess.fen());
          setCurrentMove(prev => prev + 1);
          setHistory(chess.history({ verbose: true }));
        }
        localCurrentMove++;
      } else {
        setSolutionRevealing(false);
        clearInterval(interval);
      }
    }
  }, 1000);
};

export const handleMove = (sourceSquare, targetSquare, chess, randomPuzzle, moveIndex, difficulty, currentMove, setMoveIndex, setFen, setPlayerMove, setPuzzleSolved, setCurrentMove, setHistory) => {
  const move = { from: sourceSquare, to: targetSquare };
  const result = chess.move(move);

  if (result) {
    if (result.san === randomPuzzle.correctMoves[moveIndex].san) {
      setPlayerMove("correct");
      setCurrentMove(currentMove + 1);
      setFen(chess.fen());
      console.log(`Correct move: ${result.san}`);

      if (moveIndex === randomPuzzle.responseMoves.length) {
        setHistory(chess.history({ verbose: true }));
        setCurrentMove(currentMove + 1);
        setPuzzleSolved(true);
        incrementPuzzlesSolved(difficulty);
      } else {
        setTimeout(() => {
          chess.move(randomPuzzle.responseMoves[moveIndex]);
          setHistory(chess.history({ verbose: true }));
          setFen(chess.fen());
          setMoveIndex(moveIndex + 1);
          setCurrentMove(currentMove + 2);
          setPlayerMove(chess.turn());
        }, 1000);
      }
    } else {
      chess.undo();
      setPlayerMove("incorrect");
      setPuzzleSolved(true);
      console.log(`Incorrect move: ${result.san}`);
    }
  } else {
    console.log('Invalid move:', move);
  }
};

export const goBack = (currentMove, chess, setFen, setCurrentMove) => {
  if (currentMove > 0) {
    chess.undo();
    setFen(chess.fen());
    setCurrentMove(currentMove - 1);
  }
};

export const goForward = (currentMove, history, chess, setFen, setCurrentMove) => {
  if (currentMove < history.length) {
    chess.move(history[currentMove]);
    setFen(chess.fen());
    setCurrentMove(currentMove + 1);
  }
};