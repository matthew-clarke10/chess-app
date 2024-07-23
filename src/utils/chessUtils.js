import { Chess } from 'chess.js';
import easyPuzzles from '../data/easyPuzzles';
import mediumPuzzles from '../data/mediumPuzzles';
import hardPuzzles from '../data/hardPuzzles';
import { getDayOfYear, getFormattedDate } from './other';

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

export const getRandomPuzzle = (difficulty) => {
  if (difficulty === "easy") {
    const randomIndex = Math.floor(Math.random() * easyPuzzles.length);
    return easyPuzzles[randomIndex];
  } else if (difficulty === "medium") {
    const randomIndex = Math.floor(Math.random() * mediumPuzzles.length);
    return mediumPuzzles[randomIndex];
  } else {
    const randomIndex = Math.floor(Math.random() * hardPuzzles.length);
    return hardPuzzles[randomIndex];
  }
};

export const getDailyPuzzle = (difficulty) => {
  if (difficulty === "easy") {
    return easyPuzzles[getDayOfYear()];
  } else if (difficulty === "medium") {
    return mediumPuzzles[getDayOfYear()];
  } else {
    return hardPuzzles[getDayOfYear()];
  }
};

export const newPuzzle = (difficulty, randomPuzzle, setRandomPuzzle, setMoveIndex, setCurrentMove, setFen, setChess, setBoardWidth, setArrows, setSquareStyles, setHint, setShowHint, setHintGiven, setSolutionRevealed, setSolutionRevealing, setPuzzleSolved) => {
  let newPuzzle = randomPuzzle;

  do {
    newPuzzle = getRandomPuzzle(difficulty);
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

export const handleHintClick = (randomPuzzle, moveIndex, hint, setHint, showHint, puzzleSolved, setArrows, setSquareStyles, setShowHint, setHintGiven) => {
  setHintGiven(true);
  setHint({
    from: randomPuzzle.correctMoves[moveIndex].from,
    to: randomPuzzle.correctMoves[moveIndex].to,
  });
  if (!puzzleSolved) {
    if (showHint === 0) {
      setSquareStyles({
        [randomPuzzle.correctMoves[moveIndex].from]: { backgroundColor: "rgb(255,170,0)" }
      });
      setShowHint(1);
    } else if (showHint === 1) {
      setArrows([[randomPuzzle.correctMoves[moveIndex].from, randomPuzzle.correctMoves[moveIndex].to]]);
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

export const handleMove = (sourceSquare, targetSquare, chess, randomPuzzle, moveIndex, difficulty, currentMove, hintGiven, setShowHint, setArrows, setSquareStyles, setMoveIndex, setFen, setPlayerMove, setPlayerTurn, setPuzzleSolved, updatePuzzlesSolved, setCurrentMove, setHistory, setSolutionRevealed, setSolutionRevealing, isDailyPuzzle) => {
  const move = { from: sourceSquare, to: targetSquare };
  const legalMoves = chess.moves({ verbose: true });
  const isLegalMove = legalMoves.some(m => m.from === move.from && m.to === move.to);

  if (!isLegalMove) {
    return;
  }

  try {
    const result = chess.move(move);
    setArrows([]);
    setSquareStyles({});
    if (result.san === randomPuzzle.correctMoves[moveIndex].san) {
      setPlayerMove("correct");
      setCurrentMove(currentMove + 1);
      setFen(chess.fen());

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
          if (isDailyPuzzle) {
            setDailyPuzzleSolved(difficulty);
          }
        }
      } else {
        setTimeout(() => {
          chess.move(randomPuzzle.responseMoves[moveIndex]);
          setHistory(chess.history({ verbose: true }));
          setFen(chess.fen());
          setMoveIndex(moveIndex + 1);
          setCurrentMove(currentMove + 2);
          setPlayerTurn(chess.turn());
          setShowHint(0);
          setPlayerMove("none")
        }, 1000);
      }
    } else {
      chess.undo();
      handleSolutionClick(chess, randomPuzzle, moveIndex, currentMove, setFen, setPlayerMove, setCurrentMove, setHistory, setSolutionRevealed, setSolutionRevealing);
    }
  } catch (e) {
    console.log(`Caught error: ${e.message}`);
  }
};

export const createDailyPuzzlesObject = () => {
  const dailyPuzzlesObject = {
    easy: {},
    medium: {},
    hard: {},
  };
  localStorage.setItem("dailyPuzzles", JSON.stringify(dailyPuzzlesObject));
  return dailyPuzzlesObject;
};

export const getDailyPuzzlesObject = () => {
  const dailyPuzzlesObject = localStorage.getItem("dailyPuzzles");
  if (dailyPuzzlesObject) {
    return JSON.parse(dailyPuzzlesObject);
  } else {
    return createDailyPuzzlesObject();
  }
}

export const setDailyPuzzleSolved = (difficulty) => {
  const today = getFormattedDate();
  const dailyPuzzlesObject = getDailyPuzzlesObject();
  dailyPuzzlesObject[difficulty][today] = "solved";
  localStorage.setItem("dailyPuzzles", JSON.stringify(dailyPuzzlesObject));
}

export const getDailyPuzzleSolved = (difficulty) => {
  const today = getFormattedDate();
  const dailyPuzzlesObject = getDailyPuzzlesObject();
  const todayPuzzle = dailyPuzzlesObject[difficulty][today];
  if (todayPuzzle) {
    return todayPuzzle === "solved";
  }
  return false;
}

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

export const getDailyPuzzleStatusClass = (playerMove, puzzleSolved, playerTurn, hintGiven, difficulty) => {
  if (getDailyPuzzleSolved(difficulty)) {
    return "bg-green-400";
  } else if (playerMove === "incorrect") {
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
    return "bg-black text-white";
  }
  return "";
}

export const getDailyPuzzleStatusText = (playerMove, puzzleSolved, playerTurn, hintGiven, difficulty) => {
  if (getDailyPuzzleSolved(difficulty)) {
    return "Solved";
  } else if (playerMove === "incorrect") {
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