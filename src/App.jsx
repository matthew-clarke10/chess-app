import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Puzzle from './components/Puzzle';
import { getPuzzlesSolved } from './utils/chessUtils';

const App = () => {
  const [theme, setTheme] = useState(null);
  const [isDeviceTheme, setIsDeviceTheme] = useState(false);
  const [boardColors, setBoardColors] = useState({
    light: localStorage.getItem('lightSquareColor') || '#ffffff',
    dark: localStorage.getItem('darkSquareColor') || '#000000',
  });
  const [puzzlesSolved, setPuzzlesSolved] = useState({
    total: getPuzzlesSolved("total"),
    easy: getPuzzlesSolved("easy"),
    medium: getPuzzlesSolved("medium"),
    hard: getPuzzlesSolved("hard"),
  });

  const handleThemeChange = (e) => {
    setTheme(e.matches ? 'dark' : 'light');
  };

  const changeTheme = (newTheme) => {
    if (newTheme === 'device') {
      localStorage.removeItem('theme');
      setIsDeviceTheme(true);
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
      setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    } else {
      localStorage.setItem('theme', newTheme);
      setIsDeviceTheme(false);
      setTheme(newTheme);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (savedTheme) {
      setTheme(savedTheme);
      setIsDeviceTheme(false);
    } else {
      setIsDeviceTheme(true);
      setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }
    prefersDarkScheme.addEventListener('change', handleThemeChange);
    return () => {
      prefersDarkScheme.removeEventListener('change', handleThemeChange);
    };
  }, [isDeviceTheme]);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    if (theme) {
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  const changeBoardColors = (lightColor, darkColor) => {
    setBoardColors({ light: lightColor, dark: darkColor });
    localStorage.setItem('lightSquareColor', lightColor);
    localStorage.setItem('darkSquareColor', darkColor);
  };

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
          <Route path="/" element={<Navbar theme={theme} changeTheme={changeTheme} boardColors={boardColors} changeBoardColors={changeBoardColors} isDeviceTheme={isDeviceTheme} />}>
            <Route index element={<Home puzzlesSolved={puzzlesSolved} updatePuzzlesSolved={updatePuzzlesSolved} boardColors={boardColors} />} />
            <Route path="puzzles/:difficulty" element={<Puzzle updatePuzzlesSolved={updatePuzzlesSolved} boardColors={boardColors} />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;