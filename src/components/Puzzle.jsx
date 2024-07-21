import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { getRandomPuzzle, newPuzzle, handleHintClick, handleSolutionClick, handleMove, goBack, goForward, calculateBoardWidth, getPuzzleStatusClass, getPuzzleStatusText } from '../utils/chessUtils';
import { FaStepBackward, FaStepForward } from "react-icons/fa";

const Puzzle = ({ updatePuzzlesSolved }) => {
  const { difficulty } = useParams();
  const [randomPuzzle, setRandomPuzzle] = useState(getRandomPuzzle(difficulty));
  const [moveIndex, setMoveIndex] = useState(0);
  const [fen, setFen] = useState(randomPuzzle.fen);
  const [chess, setChess] = useState(new Chess(randomPuzzle.fen));
  const [boardWidth, setBoardWidth] = useState(calculateBoardWidth());
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
    console.log(difficulty)
    newPuzzle(difficulty, getRandomPuzzle(difficulty), setRandomPuzzle, setMoveIndex, setCurrentMove, setFen, setChess, setBoardWidth, setArrows, setSquareStyles, setHint, setShowHint, setHintGiven, setSolutionRevealed, setSolutionRevealing, setPuzzleSolved)
  }, [difficulty])

  useEffect(() => {
    setPlayerTurn(chess.turn());
    setPlayerMove("none");
  }, [chess]);

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
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 h-main md:h-auto px-4 md:px-8 py-4 md:py-8">
        <div className="flex justify-center items-center w-full md:w-auto">
          <div className="flex justify-center items-center">
            <Chessboard
              customArrows={arrows}
              customSquareStyles={squareStyles}
              boardWidth={boardWidth}
              position={fen}
              boardOrientation={playerTurn === "w" ? "white" : "black"}
              arePiecesDraggable={!solutionRevealing && !solutionRevealed && !puzzleSolved}
              onPieceDrop={(sourceSquare, targetSquare) =>
                handleMove(sourceSquare, targetSquare, chess, randomPuzzle, moveIndex, difficulty, currentMove, hintGiven, setShowHint, setArrows, setSquareStyles, setMoveIndex, setFen, setPlayerMove, setPlayerTurn, setPuzzleSolved, updatePuzzlesSolved, setCurrentMove, setHistory, setSolutionRevealed, setSolutionRevealing, false)
              }
            />
          </div>
        </div>

        <div className="flex flex-col justify-evenly w-full h-full md:h-auto xs:w-[444px] md:w-full text-center mx-auto bg-white border shadow border-text-light rounded-lg">
          <h2 className={`text-4xl lg:text-5xl xl:text-6xl font-bold ${getPuzzleStatusClass(playerMove, puzzleSolved, hintGiven)}`}>{getPuzzleStatusText(playerMove, puzzleSolved, playerTurn, hintGiven)}</h2>
          {(!puzzleSolved && !solutionRevealed) && (
            <div className="flex flex-row md:flex-col gap-0 md:gap-8 w-4/5 mx-auto justify-between items-center">
              <button onClick={() => handleHintClick(randomPuzzle, moveIndex, hint, setHint, showHint, puzzleSolved, setArrows, setSquareStyles, setShowHint, setHintGiven)} disabled={solutionRevealed || showHint === 2 || playerMove !== "none"} className={`w-32 xs:w-40 md:w-full text-2xl xs:text-3xl lg:text-4xl xl:text-5xl py-2 lg:py-3 xl:py-4 bg-yellow-300 rounded border-2 border-text-light  ${!solutionRevealed && showHint !== 2 && playerMove === "none" ? "hover:bg-yellow-400" : "opacity-50"}`}>Hint</button>
              <button onClick={() => handleSolutionClick(chess, randomPuzzle, moveIndex, currentMove, setFen, setPlayerMove, setCurrentMove, setHistory, setSolutionRevealed, setSolutionRevealing)} disabled={solutionRevealed || playerMove !== "none"} className={`w-32 xs:w-40 md:w-full text-2xl xs:text-3xl lg:text-4xl xl:text-5xl py-2 lg:py-3 xl:py-4 bg-blue-400 rounded border-2 border-text-light ${!solutionRevealed && playerMove === "none" ? "hover:bg-blue-500" : "opacity-50"}`}>Solution</button>
            </div>
          )}
          {(puzzleSolved || solutionRevealed) && (
            <div>
              <div className="flex items-center w-4/5 mx-auto h-12 lg:h-16 xl:h-20">
                <button onClick={() => { goBack(currentMove, chess, setFen, setCurrentMove) }} disabled={currentMove === 0 || solutionRevealing} className={`flex flex-1 w-full h-full justify-center items-center bg-background-light rounded border-2 border-text-light py-4 ${currentMove !== 0 && !solutionRevealing ? "hover:bg-lime-200" : "text-gray-400"}`}><FaStepBackward size={window.innerWidth <= 768 ? 20 : window.innerWidth <= 1024 ? 35 : 50} /></button>
                <button onClick={() => { goForward(currentMove, history, chess, setFen, setCurrentMove) }} disabled={currentMove === history.length || solutionRevealing} className={`flex flex-1 w-full h-full justify-center items-center bg-background-light rounded border-2 border-text-light py-4 ${currentMove !== history.length && !solutionRevealing ? "hover:bg-lime-200" : "text-gray-400"}`}><FaStepForward size={window.innerWidth <= 768 ? 20 : window.innerWidth <= 1024 ? 35 : 50} /></button>
              </div>
              <div className="w-4/5 mx-auto">
                <button onClick={() => newPuzzle(difficulty, randomPuzzle, setRandomPuzzle, setMoveIndex, setCurrentMove, setFen, setChess, setBoardWidth, setArrows, setSquareStyles, setHint, setShowHint, setHintGiven, setSolutionRevealed, setSolutionRevealing, setPuzzleSolved)} disabled={solutionRevealing} className={`text-2xl xs:text-3xl lg:text-4xl xl:text-5xl py-2 lg:py-3 xl:py-4 bg-green-500 w-full rounded border-2 border-text-light ${!solutionRevealing ? "hover:bg-green-600" : "opacity-50"}`}>Next Puzzle</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Puzzle.propTypes = {
  updatePuzzlesSolved: PropTypes.func.isRequired,
};

export default Puzzle;