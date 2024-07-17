import DailyPuzzle from "./DailyPuzzle";

const DailyPuzzles = () => {
  return (
    <>
      <h1 className="text-4xl text-center mt-2 font-bold">Daily Puzzles</h1>
      <section className="hidden lg:flex flex-2 justify-evenly w-full my-2">
        <div>
          <DailyPuzzle difficulty="easy" />
        </div>
        <div>
          <DailyPuzzle difficulty="medium" />
        </div>
        <div>
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