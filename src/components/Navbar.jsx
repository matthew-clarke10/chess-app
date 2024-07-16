import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => setIsDropdownOpen(true);
  const closeDropdown = () => setIsDropdownOpen(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <nav className="flex gap-2 h-nav px-4 md:px-8 py-4 bg-dark-nav text-xl border-y-2 border-text-light w-full">
        <div className="flex items-center gap-4 hover:cursor-pointer">
          <img className="block xs:hidden md:block" width={64} height={64} src="/favicon.png" alt="ChessPuzzler Logo" />
          <Link to="/" className="hidden xs:block text-3xl md:text-5xl py-2 md:p-0">ChessPuzzler</Link>
        </div>
        <div className="flex lg:hidden flex-grow gap-4 justify-end items-center text-center ml-auto mr-2 md:mr-6">
          <Link to="/puzzles" className="w-24 py-3 rounded border border-text-light hover:cursor-pointer bg-white hover:bg-gray-100">Puzzles</Link>
        </div>
        <div className="hidden lg:flex flex-grow gap-8 justify-end items-center text-center mr-6">
          <Link to="/puzzles/easy" className="w-24 py-3 rounded border border-text-light hover:cursor-pointer bg-white hover:bg-gray-100">Easy</Link>
          <Link to="/puzzles/medium" className="w-24 py-3 rounded border border-text-light hover:cursor-pointer bg-white hover:bg-gray-100">Medium</Link>
          <Link to="/puzzles/hard" className="w-24 py-3 rounded border border-text-light hover:cursor-pointer bg-white hover:bg-gray-100">Hard</Link>
        </div>
        <div className="relative flex items-center" onMouseEnter={openDropdown} onMouseLeave={closeDropdown} onClick={toggleDropdown}>
          <div className={`flex justify-center items-center bg-white w-24 py-3 rounded border border-text-light hover:cursor-pointer ${isDropdownOpen ? "bg-gray-100 rounded-b-none border-b-0" : ""}`}>Theme</div>
          {isDropdownOpen && (
            <div className="absolute right-0 top-[56px] bg-white rounded rounded-tr-none border border-text-light w-48 z-10">
              <div className="py-2 px-4 rounded-t hover:bg-gray-100 cursor-pointer">Background</div>
              <div className="py-2 px-4 rounded-b hover:bg-gray-100 cursor-pointer">Board Colours</div>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar;