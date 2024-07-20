import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Puzzle from './components/Puzzle';
import { getPuzzlesSolved } from './utils/chessUtils';

const App = () => {
  const [theme, setTheme] = useState(null);
  const [puzzlesSolved, setPuzzlesSolved] = useState({
    total: getPuzzlesSolved("total"),
    easy: getPuzzlesSolved("easy"),
    medium: getPuzzlesSolved("medium"),
    hard: getPuzzlesSolved("hard"),
  });

  const handleThemeChange = (e) => {
    setTheme(e.matches ? 'dark' : 'light');
  };

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    setTheme(prefersDarkScheme.matches ? 'dark' : 'light');

    prefersDarkScheme.addEventListener('change', handleThemeChange);

    return () => {
      prefersDarkScheme.removeEventListener('change', handleThemeChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    if (theme) {
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  const updatePuzzlesSolved = (newData) => {
    setPuzzlesSolved((prevState) => ({
      ...prevState,
      ...newData,
    }));
  };

  return (
    <>
      <div className='h-screen w-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark'>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home puzzlesSolved={puzzlesSolved} updatePuzzlesSolved={updatePuzzlesSolved} />} />
            <Route path="puzzles/:difficulty" element={<Puzzle />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;