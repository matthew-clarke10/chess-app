import DailyPuzzles from './DailyPuzzles';
import Statistics from './Statistics';

const Home = () => {
  return (
    <main className="flex flex-col h-main">
      <DailyPuzzles />
      <Statistics />
    </main>
  )
}

export default Home;