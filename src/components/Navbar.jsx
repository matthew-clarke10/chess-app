import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [isPuzzleDropdownOpen, setIsPuzzleDropdownOpen] = useState(false);
  const [isBackgroundDropdownOpen, setIsBackgroundDropdownOpen] = useState(false);
  const [isBoardColorsDropdownOpen, setIsBoardColorsDropdownOpen] = useState(false);

  const toggleThemeDropdown = () => setIsThemeDropdownOpen(!isThemeDropdownOpen);

  const togglePuzzleDropdown = () => setIsPuzzleDropdownOpen(!isPuzzleDropdownOpen);

  const openBackgroundDropdown = () => setIsBackgroundDropdownOpen(true);
  const closeBackgroundDropdown = () => setIsBackgroundDropdownOpen(false);


  const openBoardColorsDropdown = () => setIsBoardColorsDropdownOpen(true);
  const closeBoardColorsDropdown = () => setIsBoardColorsDropdownOpen(false);

  const handleThemeClick = () => {
    if (isBackgroundDropdownOpen || isBoardColorsDropdownOpen) {
      toggleThemeDropdown();
      closeBackgroundDropdown();
      closeBoardColorsDropdown();
    } else {
      toggleThemeDropdown();
    }
  };

  return (
    <>
      <nav className="flex gap-2 h-nav px-4 md:px-8 py-4 bg-dark-nav text-xl border-y-2 border-text-light w-full">
        <Link className="flex items-center gap-4 text-3xl md:text-5xl hover:cursor-pointer">
          <img className="block xs:hidden md:block" width={64} height={64} src="/favicon.png" alt="ChessPuzzler Logo" />
          <h1 to="/" className="hidden xs:block text-3xl md:text-5xl py-2 md:p-0">ChessPuzzler</h1>
        </Link>
        <div className="relative flex lg:hidden flex-grow gap-4 justify-end items-center text-center ml-auto mr-2 md:mr-6">
          <div onClick={togglePuzzleDropdown} className="w-24 py-3 rounded border border-text-light hover:cursor-pointer bg-white hover:bg-gray-100">Puzzles</div>
          {isPuzzleDropdownOpen && (
            <div className="absolute flex flex-col right-0 top-[56px] bg-white rounded rounded-tr-none border border-text-light w-36 z-10">
              <Link to="/puzzles/easy" className="py-2 px-4 rounded-t hover:bg-gray-100 cursor-pointer">Easy</Link>
              <Link to="/puzzles/medium" className="py-2 px-4 rounded-b hover:bg-gray-100 cursor-pointer">Medium</Link>
              <Link to="/puzzles/hard" className="py-2 px-4 rounded-b hover:bg-gray-100 cursor-pointer">Hard</Link>
            </div>
          )}
        </div>
        <div className="hidden lg:flex flex-grow gap-8 justify-end items-center text-center mr-6">
          <Link to="/puzzles/easy" className="w-24 py-3 rounded border border-text-light hover:cursor-pointer bg-white hover:bg-gray-100">Easy</Link>
          <Link to="/puzzles/medium" className="w-24 py-3 rounded border border-text-light hover:cursor-pointer bg-white hover:bg-gray-100">Medium</Link>
          <Link to="/puzzles/hard" className="w-24 py-3 rounded border border-text-light hover:cursor-pointer bg-white hover:bg-gray-100">Hard</Link>
        </div>
        <div className="relative flex items-center text-center" onClick={handleThemeClick}>
          <div className={`flex justify-center items-center bg-white w-24 py-3 rounded border border-text-light hover:cursor-pointer ${isThemeDropdownOpen ? "bg-gray-100 rounded-b-none border-b-0" : ""}`}>Theme</div>
          {isThemeDropdownOpen && (
            <div className="absolute right-0 top-[56px] bg-white rounded rounded-tr-none border border-text-light w-48 z-10">
              <div onClick={openBackgroundDropdown} className="py-2 px-4 rounded-t hover:bg-gray-100 cursor-pointer">
                <div>Background</div>
              </div>
              <div onClick={openBoardColorsDropdown} className="py-2 px-4 rounded-b hover:bg-gray-100 cursor-pointer">Board Colours
              </div>
            </div>
          )}

          {isBackgroundDropdownOpen && (
            <div className="absolute right-0 top-[56px] bg-white rounded rounded-tr-none border border-text-light w-48 z-10">
              {/* Add content for the Background dropdown here */}
              <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Background Option 1</div>
              <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Background Option 2</div>
            </div>
          )}

          {isBoardColorsDropdownOpen && (
            <div className="absolute right-0 top-[56px] bg-white rounded rounded-tr-none border border-text-light w-48 z-10">
              {/* Add content for the Board Colours dropdown here */}
              <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Board Color Option 1</div>
              <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Board Color Option 2</div>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar;