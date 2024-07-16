import DailyPuzzle from "./DailyPuzzle";

const DailyPuzzles = () => {
  return (
    <>
      <h1 className="text-4xl text-center my-4 font-bold">Daily Puzzles</h1>
      <section className="hidden lg:flex flex-2 justify-evenly bg-green-200 w-full">
        <div className="w-1/4 bg-orange-200">
          <DailyPuzzle difficulty="easy" />
        </div>
        <div className="w-1/4 bg-orange-200">
          <DailyPuzzle difficulty="medium" />
        </div>
        <div className="w-1/4 bg-orange-200">
          <DailyPuzzle difficulty="hard" />
        </div>
      </section>
      <section className="flex lg:hidden flex-2 justify-evenly bg-green-200 w-full">
        <div className="w-full bg-orange-200">
          <DailyPuzzle difficulty="easy" />
        </div>
      </section>
    </>
  )
}

export default DailyPuzzles;