import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { getDailyPuzzle, handleHintClick, handleSolutionClick, handleMove, getDailyPuzzleStatusClass, getDailyPuzzleStatusText } from '../utils/chessUtils';
import { getDailyPuzzleSolved } from '../utils/chessUtils';

const DailyPuzzle = ({ difficulty, updatePuzzlesSolved, boardColors }) => {
  const [dailyPuzzle] = useState(getDailyPuzzle(difficulty));
  const [moveIndex, setMoveIndex] = useState(0);
  const [fen, setFen] = useState(dailyPuzzle.fen);
  const [chess] = useState(new Chess(dailyPuzzle.fen));
  const [boardWidth, setBoardWidth] = useState(300);
  const [arrows, setArrows] = useState([]);
  const [squareStyles, setSquareStyles] = useState({});
  const [hint, setHint] = useState({});
  const [hintGiven, setHintGiven] = useState(false);
  const [showHint, setShowHint] = useState(0);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [history, setHistory] = useState([]);
  const [currentMove, setCurrentMove] = useState(0);
  const [solutionRevealing, setSolutionRevealing] = useState(false);
  const [solutionRevealed, setSolutionRevealed] = useState(false);
  const [playerTurn, setPlayerTurn] = useState("");
  const [playerMove, setPlayerMove] = useState("none");

  useEffect(() => {
    setPlayerTurn(chess.turn());
  }, [chess]);

  useEffect(() => {
    setArrows([]);
    setSquareStyles({});
    setShowHint(0);

    if (getDailyPuzzleSolved(difficulty)) {
      setPuzzleSolved(true);
    }

    if (!puzzleSolved && !solutionRevealed) {
      setHint({
        from: dailyPuzzle.correctMoves[moveIndex].from,
        to: dailyPuzzle.correctMoves[moveIndex].to,
      });
    }
  }, [moveIndex, dailyPuzzle.correctMoves, puzzleSolved, solutionRevealed, difficulty]);

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
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col border-y-4 border-border-light dark:border-border-dark">
          <Chessboard
            customArrows={arrows}
            customSquareStyles={squareStyles}
            boardWidth={boardWidth}
            position={fen}
            boardOrientation={playerTurn === "w" ? "white" : "black"}
            customLightSquareStyle={{ backgroundColor: boardColors.light }}
            customDarkSquareStyle={{ backgroundColor: boardColors.dark }}
            arePiecesDraggable={!solutionRevealing && !solutionRevealed && !puzzleSolved}
            onPieceDrop={(sourceSquare, targetSquare) =>
              handleMove(sourceSquare, targetSquare, chess, dailyPuzzle, moveIndex, difficulty, currentMove, hintGiven, setShowHint, setArrows, setSquareStyles, setMoveIndex, setFen, setPlayerMove, setPlayerTurn, setPuzzleSolved, updatePuzzlesSolved, setCurrentMove, setHistory, setSolutionRevealed, setSolutionRevealing, true)
            }
          />
        </div>
        <div className="h-[72px] border-b-4 text-black dark:text-border-dark border-border-light dark:border-border-dark">
          <div className={`flex text-2xl text-center ${(!puzzleSolved && !solutionRevealed) ? "h-auto border-b-4 border-border-light dark:border-border-dark" : "h-full"}`}>
            <div className={`flex justify-center items-center w-full ${getDailyPuzzleStatusClass(playerMove, puzzleSolved, playerTurn, hintGiven, difficulty)}`}>{getDailyPuzzleStatusText(playerMove, puzzleSolved, playerTurn, hintGiven, difficulty)}</div>
          </div>
          {(!puzzleSolved && !solutionRevealed) && (
            <div className="flex text-2xl text-center">
              <div className="flex-1">
                <button onClick={() => handleHintClick(dailyPuzzle, moveIndex, hint, setHint, showHint, puzzleSolved, setArrows, setSquareStyles, setShowHint, setHintGiven)} disabled={solutionRevealed || showHint === 2 || playerMove !== "none"} className={`w-full bg-yellow-300 border-r-4 border-border-light dark:border-border-dark  ${!solutionRevealed && showHint !== 2 && playerMove === "none" ? "hover:bg-yellow-400" : "opacity-50"}`}>Hint</button>
              </div>
              <div className="flex-1 text-center">
                <button onClick={() => handleSolutionClick(chess, dailyPuzzle, moveIndex, currentMove, setFen, setPlayerMove, setCurrentMove, setHistory, setSolutionRevealed, setSolutionRevealing)} disabled={solutionRevealed || playerMove !== "none"} className={`w-full bg-blue-400 ${!solutionRevealed && playerMove === "none" ? "hover:bg-blue-500" : "opacity-50"}`}>Solution</button>
              </div>
            </div>
          )}
        </div>
      </div >
    </>
  )
}

DailyPuzzle.propTypes = {
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  updatePuzzlesSolved: PropTypes.func.isRequired,
  boardColors: PropTypes.shape({
    light: PropTypes.string.isRequired,
    dark: PropTypes.string.isRequired,
  }).isRequired,
};

export default DailyPuzzle;