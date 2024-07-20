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

export const newPuzzle = (randomPuzzle, setRandomPuzzle, setMoveIndex, setCurrentMove, setFen, setChess, setBoardWidth, setArrows, setSquareStyles, setHint, setShowHint, setHintGiven, setSolutionRevealed, setSolutionRevealing, setPuzzleSolved) => {
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
  setHintGiven(false);
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

export const handleHintClick = (hint, showHint, puzzleSolved, setArrows, setSquareStyles, setShowHint, setHintGiven) => {
  setHintGiven(true);
  if (!puzzleSolved) {
    if (showHint === 0) {
      setSquareStyles({
        [hint.from]: { backgroundColor: "rgb(255,170,0)" }
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

export const handleMove = (sourceSquare, targetSquare, chess, randomPuzzle, moveIndex, difficulty, currentMove, hintGiven, setMoveIndex, setFen, setPlayerMove, setPuzzleSolved, updatePuzzlesSolved, setCurrentMove, setHistory, setSolutionRevealed, setSolutionRevealing) => {
  const move = { from: sourceSquare, to: targetSquare };
  const legalMoves = chess.moves({ verbose: true });
  const isLegalMove = legalMoves.some(m => m.from === move.from && m.to === move.to);

  if (!isLegalMove) {
    console.log(`Invalid move: from ${sourceSquare} to ${targetSquare}`);
    return;
  }

  try {
    const result = chess.move(move);
    if (result.san === randomPuzzle.correctMoves[moveIndex].san) {
      setPlayerMove("correct");
      setCurrentMove(currentMove + 1);
      setFen(chess.fen());
      console.log(`Correct move: ${result.san}`);

      if (moveIndex === randomPuzzle.responseMoves.length) {
        setHistory(chess.history({ verbose: true }));
        setCurrentMove(currentMove + 1);
        setPuzzleSolved(true);
        if (!hintGiven) {
          incrementPuzzlesSolved(difficulty);
          updatePuzzlesSolved({
            ["total"]: getPuzzlesSolved("total"),
            [difficulty]: getPuzzlesSolved(difficulty),
          });
        }
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
      handleSolutionClick(chess, randomPuzzle, moveIndex, currentMove, setFen, setPlayerMove, setCurrentMove, setHistory, setSolutionRevealed, setSolutionRevealing);
      console.log(`Incorrect move: ${result.san}`);
    }
  } catch (e) {
    console.log(`Caught error: ${e.message}`);
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

export const getPuzzleStatusClass = (playerMove, puzzleSolved, hintGiven) => {
  if (playerMove === "incorrect") {
    return "text-red-400";
  } else if (puzzleSolved && hintGiven) {
    return "text-hint";
  } else if (puzzleSolved) {
    return "text-green-400";
  } else if (playerMove === "correct") {
    return "text-green-400";
  }

  return "";
}

export const getPuzzleStatusText = (playerMove, puzzleSolved, playerTurn, hintGiven) => {
  if (playerMove === "incorrect") {
    return "Incorrect";
  } else if (puzzleSolved && hintGiven) {
    return "Solved with Hint";
  } else if (puzzleSolved) {
    return "Solved";
  } else if (playerMove === "correct") {
    return "Correct";
  } else if (playerTurn === "w") {
    return "White to Play";
  } else if (playerTurn === "b") {
    return "Black to Play";
  }

  return "Loading Puzzle";
};

export const getDailyPuzzleStatusClass = (playerMove, puzzleSolved, playerTurn, hintGiven) => {
  if (playerMove === "incorrect") {
    return "bg-red-400";
  } else if (puzzleSolved && hintGiven) {
    return "bg-hint";
  } else if (puzzleSolved) {
    return "bg-green-400";
  } else if (playerMove === "correct") {
    return "bg-green-400";
  } else if (playerTurn === "w") {
    return "bg-white";
  } else if (playerTurn === "b") {
    return "bg-black";
  }
  return "";
}