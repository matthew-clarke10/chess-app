import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { getRandomPuzzle, handleHintClick, handleSolutionClick, handleMove, goBack, goForward, getDailyPuzzleStatusClass, getPuzzleStatusText } from '../utils/chessUtils';

const DailyPuzzle = ({ difficulty, updatePuzzlesSolved }) => {
  const [randomPuzzle, setRandomPuzzle] = useState(getRandomPuzzle);
  const [moveIndex, setMoveIndex] = useState(0);
  const [fen, setFen] = useState(randomPuzzle.fen);
  const [chess, setChess] = useState(new Chess(randomPuzzle.fen));
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

    if (!puzzleSolved && !solutionRevealed) {
      setHint({
        from: randomPuzzle.correctMoves[moveIndex].from,
        to: randomPuzzle.correctMoves[moveIndex].to,
      });
    }
  }, [moveIndex, randomPuzzle.correctMoves, puzzleSolved, solutionRevealed]);

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
        <div className="flex flex-col border-y-2 border-text-light">
          <Chessboard
            customArrows={arrows}
            customSquareStyles={squareStyles}
            boardWidth={boardWidth}
            position={fen}
            arePiecesDraggable={!solutionRevealing && !solutionRevealed && !puzzleSolved}
            onPieceDrop={(sourceSquare, targetSquare) =>
              handleMove(sourceSquare, targetSquare, chess, randomPuzzle, moveIndex, difficulty, currentMove, hintGiven, setMoveIndex, setFen, setPlayerMove, setPuzzleSolved, updatePuzzlesSolved, setCurrentMove, setHistory, setSolutionRevealed, setSolutionRevealing)
            }
          />
        </div>
        <div className="h-[67px] border-b-2 border-text-light">
          <div className={`flex text-2xl text-center ${(!puzzleSolved && !solutionRevealed) ? "h-auto border-b-2 border-text-light" : "h-full"}`}>
            <div className={`flex justify-center items-center w-full ${getDailyPuzzleStatusClass(playerMove, puzzleSolved, playerTurn, hintGiven)}`}>{getPuzzleStatusText(playerMove, puzzleSolved, playerTurn, hintGiven)}</div>
          </div>
          {(!puzzleSolved && !solutionRevealed) && (
            <div className="flex text-2xl text-center">
              <div className="flex-1">
                <button onClick={() => handleHintClick(hint, showHint, puzzleSolved, setArrows, setSquareStyles, setShowHint, setHintGiven)} disabled={solutionRevealed || showHint === 2} className={`w-full bg-yellow-300 border-r-2 border-text-light  ${!solutionRevealed && showHint !== 2 ? "hover:bg-yellow-400" : "opacity-50"}`}>Hint</button>
              </div>
              <div className="flex-1 bg-blue-400 hover:bg-blue-500">
                <button onClick={() => handleSolutionClick(chess, randomPuzzle, moveIndex, currentMove, setFen, setPlayerMove, setCurrentMove, setHistory, setSolutionRevealed, setSolutionRevealing)} className="w-full">Solution</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

DailyPuzzle.propTypes = {
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  updatePuzzlesSolved: PropTypes.func.isRequired,
};

export default DailyPuzzle;