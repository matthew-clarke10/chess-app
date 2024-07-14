import DailyPuzzle from "./DailyPuzzle";

const DailyPuzzles = () => {
  return (
    <section className="flex flex-2 justify-evenly bg-green-200 w-full">
      <DailyPuzzle difficulty="easy" />
      <DailyPuzzle difficulty="medium" />
      <DailyPuzzle difficulty="hard" />
    </section>
  )
}

export default DailyPuzzles;