import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => setIsDropdownOpen(true);
  const closeDropdown = () => setIsDropdownOpen(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <nav className="flex gap-2 h-22 py-4 bg-dark-nav text-xl">
        <div className="flex gap-4 hover:cursor-pointer">
          <img className="block xs:hidden md:block" width={54} height={54} src="./favicon.png" alt="ChessPuzzler Logo" />
          <h1 className="hidden xs:block text-3xl md:text-5xl py-2 md:p-0">ChessPuzzler</h1>
        </div>
        <div className="flex lg:hidden justify-center items-center text-xl lg:text-3xl w-24 py-3 ml-auto mr-8 border-2 border-text-light hover:cursor-pointer hover:bg-white">Puzzles</div>
        <div className="hidden lg:flex flex-grow gap-4 justify-end text-center mr-8">
          <Link to="/puzzles" className="w-24 py-3 border-2 border-text-light hover:cursor-pointer hover:bg-white">Easy</Link>
          <Link to="/puzzles" className="w-24 py-3 border-2 border-text-light hover:cursor-pointer hover:bg-white">Medium</Link>
          <Link to="/puzzles" className="w-24 py-3 border-2 border-text-light hover:cursor-pointer hover:bg-white">Hard</Link>
        </div>
        <div className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown} onClick={toggleDropdown}>
          <div className={`flex justify-center items-center w-24 py-3 border-2 border-text-light hover:cursor-pointer ${isDropdownOpen ? "bg-white border-b-0" : ""}`}>Theme</div>
          {isDropdownOpen && (
            <div className="absolute right-0 bg-white border-2 border-text-light w-48 z-10">
              <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Background</div>
              <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Board Colours</div>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar;