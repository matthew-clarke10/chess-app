import { Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="flex gap-8 h-20 py-4 bg-dark-nav">
        <div className="flex gap-4">
          <img className="block xs:hidden md:block" width={48} height={48} src="./favicon.png" alt="ChessPuzzler Logo" />
          <h1 className="hidden xs:block text-5xl">ChessPuzzler</h1>
        </div>
        <div className="flex flex-grow gap-4 items-end">
          <div className="text-3xl">Easy</div>
          <div className="text-3xl">Medium</div>
          <div className="text-3xl">Hard</div>
        </div>
        <div className="flex gap-4 items-end">
          <div className="text-3xl">Theme</div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar;