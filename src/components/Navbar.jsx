import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = ({ theme, changeTheme, boardColors, changeBoardColors, isDeviceTheme }) => {
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

  const handleBackgroundOptionClick = (e, theme) => {
    e.stopPropagation();
    changeTheme(theme);
    setIsThemeDropdownOpen(false);
    setIsBackgroundDropdownOpen(true);
    setIsBoardColorsDropdownOpen(false);
  };

  const handleBoardColorOptionClick = (e, lightColor, darkColor) => {
    e.stopPropagation();
    setIsThemeDropdownOpen(false);
    setIsBackgroundDropdownOpen(false);
    changeBoardColors(lightColor, darkColor);
    setIsBoardColorsDropdownOpen(true);
  };

  return (
    <>
      <nav className="flex gap-2 h-nav px-4 md:px-8 py-4 bg-dark-nav text-xl border-b-4 border-border-light dark:border-border-dark w-full">
        <Link to="/" className="flex items-center gap-4 text-3xl md:text-5xl hover:cursor-pointer">
          <img className="block xs:hidden md:block" width={64} height={64} src="/favicon.png" alt="ChessPuzzler Logo" />
          <h1 className="hidden xs:block text-3xl md:text-5xl py-2 md:p-0">ChessPuzzler</h1>
        </Link>
        <div className="relative flex lg:hidden flex-grow gap-4 justify-end items-center text-center ml-auto mr-2 md:mr-6">
          <div onClick={togglePuzzleDropdown} className="w-24 py-3 border-4 border-text-light hover:cursor-pointer bg-secondary-light dark:bg-secondary-dark hover:bg-gray-100">Puzzles</div>
          {isPuzzleDropdownOpen && (
            <div className="absolute flex flex-col right-0 top-[56px] bg-secondary-light dark:bg-secondary-dark border-4 border-text-light w-36 z-10">
              <Link to="/puzzles/easy" className="py-2 px-4 hover:opacity-80 cursor-pointer">Easy</Link>
              <Link to="/puzzles/medium" className="py-2 px-4 hover:opacity-80  cursor-pointer">Medium</Link>
              <Link to="/puzzles/hard" className="py-2 px-4 hover:opacity-80  cursor-pointer">Hard</Link>
            </div>
          )}
        </div>
        <div className="hidden lg:flex flex-grow gap-8 justify-end items-center text-center mr-6">
          <Link to="/puzzles/easy" className="w-24 py-3 border-4 bg-secondary-light dark:bg-secondary-dark border-text-light hover:cursor-pointer hover:opacity-80">Easy</Link>
          <Link to="/puzzles/medium" className="w-24 py-3 border-4 bg-secondary-light dark:bg-secondary-dark border-text-light hover:cursor-pointer hover:opacity-80">Medium</Link>
          <Link to="/puzzles/hard" className="w-24 py-3 border-4 bg-secondary-light dark:bg-secondary-dark border-text-light hover:cursor-pointer hover:opacity-80">Hard</Link>
        </div>
        <div className="relative flex items-center text-center" onClick={handleThemeClick}>
          <div className={`flex justify-center items-center bg-secondary-light dark:bg-secondary-dark w-24 py-3 border-4 border-text-light hover:cursor-pointer hover:opacity-80 ${isThemeDropdownOpen ? "bg-gray-100 border-b-4" : ""}`}>Theme</div>
          {isThemeDropdownOpen && (
            <div className="absolute right-0 top-[56px] bg-white border-4 border-text-light w-48 z-10">
              <div onClick={openBackgroundDropdown} className="py-2 px-4 bg-secondary-light dark:bg-secondary-dark hover:opacity-80 cursor-pointer">
                <div className="">Background</div>
              </div>
              <div onClick={openBoardColorsDropdown} className="py-2 px-4 bg-secondary-light dark:bg-secondary-dark hover:opacity-80 border-t-4 border-border-light dark:border-border-dark cursor-pointer">Board Colours
              </div>
            </div>
          )}

          {isBackgroundDropdownOpen && (
            <div className="absolute right-0 top-[56px] bg-white border-4 border-text-light w-48 z-10">
              <div className={`py-2 px-4 cursor-pointer ${isDeviceTheme ? "bg-green-light dark:bg-green-dark" : "bg-secondary-light dark:bg-secondary-dark hover:opacity-80"}`} onClick={(e) => handleBackgroundOptionClick(e, 'device')}>Device</div>
              <div className={`py-2 px-4 cursor-pointer border-y-4 border-border-light dark:border-border-dark ${!isDeviceTheme && theme === "light" ? "bg-green-light dark:bg-green-dark" : "bg-secondary-light dark:bg-secondary-dark hover:opacity-80"}`} onClick={(e) => handleBackgroundOptionClick(e, 'light')}>Light</div>
              <div className={`py-2 px-4 hover:bg-gray-100 cursor-pointer ${!isDeviceTheme && theme === "dark" ? "bg-green-light dark:bg-green-dark" : "bg-secondary-light dark:bg-secondary-dark hover:opacity-80"}`} onClick={(e) => handleBackgroundOptionClick(e, 'dark')}>Dark</div>
            </div>
          )}

          {isBoardColorsDropdownOpen && (
            <div className="absolute right-0 top-[56px] bg-white border-4 border-text-light w-48 z-10">
              <div className={`py-2 px-4 border-b-4 border-text-light hover:cursor-pointer ${boardColors.light === "#F0D9B5" && boardColors.dark === "#B58863" ? "bg-green-light dark:bg-green-dark" : "bg-secondary-light dark:bg-secondary-dark hover:opacity-80"}`} onClick={(e) => handleBoardColorOptionClick(e, '#F0D9B5', '#B58863')}>Brown</div>
              <div className={`py-2 px-4 border-b-4 border-text-light hover:cursor-pointer ${boardColors.light === "#DEE3E6" && boardColors.dark === "#8CA3AD" ? "bg-green-light dark:bg-green-dark" : "bg-secondary-light dark:bg-secondary-dark hover:opacity-80"}`} onClick={(e) => handleBoardColorOptionClick(e, '#DEE3E6', '#8CA3AD')}>Blue</div>
              <div className={`py-2 px-4 border-b-4 border-text-light hover:cursor-pointer ${boardColors.light === "#FFFFDE" && boardColors.dark === "#86A766" ? "bg-green-light dark:bg-green-dark" : "bg-secondary-light dark:bg-secondary-dark hover:opacity-80"}`} onClick={(e) => handleBoardColorOptionClick(e, '#FFFFDE', '#86A766')}>Green</div>
              <div className={`py-2 px-4 border-text-light hover:cursor-pointer ${boardColors.light === "#E6DBF2" && boardColors.dark === "#9A7DB5" ? "bg-green-light dark:bg-green-dark" : "bg-secondary-light dark:bg-secondary-dark hover:opacity-80"}`} onClick={(e) => handleBoardColorOptionClick(e, '#E6DBF2', '#9A7DB5')}>Purple</div>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  )
}

Navbar.propTypes = {
  theme: PropTypes.oneOf(['device', 'light', 'dark']),
  changeTheme: PropTypes.func.isRequired,
  boardColors: PropTypes.shape({
    light: PropTypes.string.isRequired,
    dark: PropTypes.string.isRequired,
  }).isRequired,
  changeBoardColors: PropTypes.func.isRequired,
  isDeviceTheme: PropTypes.bool.isRequired,
};

export default Navbar;