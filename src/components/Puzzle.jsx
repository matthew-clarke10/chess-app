import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { getRandomPuzzle, newPuzzle, handleHintClick, handleSolutionClick, handleMove, goBack, goForward, calculateBoardWidth } from '../utils/chessUtils';
import { FaStepBackward, FaStepForward } from "react-icons/fa";

const Puzzle = () => {
  const { difficulty } = useParams();
  const [randomPuzzle, setRandomPuzzle] = useState(getRandomPuzzle);
  const [moveIndex, setMoveIndex] = useState(0);
  const [fen, setFen] = useState(randomPuzzle.fen);
  const [chess, setChess] = useState(new Chess(randomPuzzle.fen));
  const [boardWidth, setBoardWidth] = useState(calculateBoardWidth());
  const [arrows, setArrows] = useState([]);
  const [squareStyles, setSquareStyles] = useState({});
  const [hint, setHint] = useState({});
  const [showHint, setShowHint] = useState(0);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [history, setHistory] = useState([]);
  const [currentMove, setCurrentMove] = useState(0);
  const [solutionRevealing, setSolutionRevealing] = useState(false);

  useEffect(() => {
    setMoveIndex(0);
    setFen(randomPuzzle.fen);
    setChess(new Chess(randomPuzzle.fen));
    setPuzzleSolved(false);
  }, [randomPuzzle]);

  useEffect(() => {
    setArrows([]);
    setSquareStyles({});
    setShowHint(0);

    if (!puzzleSolved && !solutionRevealing) {
      setHint({
        from: randomPuzzle.correctMoves[moveIndex].from,
        to: randomPuzzle.correctMoves[moveIndex].to,
        color: "rgb(0, 255, 0)",
      });
    }
  }, [moveIndex, randomPuzzle.correctMoves, puzzleSolved, solutionRevealing]);

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
              onPieceDrop={(sourceSquare, targetSquare) =>
                handleMove(sourceSquare, targetSquare, chess, randomPuzzle, moveIndex, difficulty, currentMove, setMoveIndex, setFen, setPuzzleSolved, setCurrentMove, setHistory)
              }
            />
          </div>
        </div>

        <div className="flex flex-col justify-evenly w-full h-full md:h-auto xs:w-[444px] md:w-full text-center mx-auto bg-white border shadow border-text-light rounded-lg">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold">White to Play</h2>
          {!puzzleSolved && (
            <div className="flex flex-row md:flex-col gap-0 md:gap-8 w-4/5 mx-auto justify-between items-center">
              <button onClick={() => handleHintClick(hint, showHint, puzzleSolved, setArrows, setSquareStyles, setShowHint)} disabled={solutionRevealing || showHint === 2} className={`w-32 xs:w-40 md:w-full text-2xl xs:text-3xl lg:text-4xl xl:text-5xl py-2 lg:py-3 xl:py-4 bg-yellow-300 rounded border-2 border-text-light  ${!solutionRevealing && showHint !== 2 ? "hover:bg-yellow-400" : "opacity-50"}`}>Hint</button>
              <button onClick={() => handleSolutionClick(chess, randomPuzzle, moveIndex, currentMove, setFen, setPuzzleSolved, setCurrentMove, setHistory, setSolutionRevealing)} disabled={solutionRevealing} className={`w-32 xs:w-40 md:w-full text-2xl xs:text-3xl lg:text-4xl xl:text-5xl py-2 lg:py-3 xl:py-4 bg-blue-400 rounded border-2 border-text-light ${!solutionRevealing ? "hover:bg-blue-500" : "opacity-50"}`}>Solution</button>
            </div>
          )}
          {puzzleSolved && (
            <div>
              <div className="flex w-4/5 mx-auto">
                <button onClick={() => { goBack(currentMove, chess, setFen, setCurrentMove) }} disabled={currentMove === 0 || solutionRevealing} className={`flex flex-1 w-full justify-center bg-background-light rounded border-2 border-text-light py-4 ${currentMove !== 0 && !solutionRevealing ? "hover:bg-lime-200" : "text-gray-400"}`}><FaStepBackward size={40} /></button>
                <button onClick={() => { goForward(currentMove, history, chess, setFen, setCurrentMove) }} disabled={currentMove === history.length || solutionRevealing} className={`flex flex-1 w-full justify-center bg-background-light rounded border-2 border-text-light py-4 ${currentMove !== history.length && !solutionRevealing ? "hover:bg-lime-200" : "text-gray-400"}`}><FaStepForward size={40} /></button>
              </div>
              <div className="w-4/5 mx-auto">
                <button onClick={() => newPuzzle(randomPuzzle, setRandomPuzzle, setMoveIndex, setCurrentMove, setFen, setChess, setBoardWidth, setArrows, setSquareStyles, setHint, setShowHint, setPuzzleSolved, setSolutionRevealing)} className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl py-2 lg:py-3 xl:py-4 bg-green-500 hover:bg-green-600 w-full rounded border-2 border-text-light">Next Puzzle</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Puzzle;