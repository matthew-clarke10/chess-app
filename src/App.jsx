import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Puzzle from './components/Puzzle';

const App = () => {
  const [theme, setTheme] = useState(null);

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

  return (
    <>
      <div className='h-screen w-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark'>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="puzzles" element={<Puzzle />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;