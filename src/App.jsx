import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Statistics from './components/Statistics';
import Puzzle from './components/Puzzle';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Statistics />} />
        <Route path="puzzles" element={<Puzzle />} />
      </Route>
    </Routes>
  );
};

export default App;
