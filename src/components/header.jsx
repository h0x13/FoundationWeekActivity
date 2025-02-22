const Header = () => {
  return (
    <header className="bg-slate-800 text-slate-50 border-b border-solid border-[rgba(255,255,255,0.1)]">
      <div className="px-12 py-4 max-w-[1200px] mx-auto flex">
        <div className="logo">
          <img src="/evsu.png" className="max-w-40" />
          {/* <h1 className="md:text-lg sm:text-xs  font-bold font-impact">EVSU Foundation Week</h1> */}
        </div>
        <nav className="ml-auto">
          <ul className="flex list-none gap-3 text-base">
            <li><a className="hover:text-cyan-400 duration-75 ease-in-out" href="#home">Home</a></li>
            <li><a className="hover:text-cyan-400 duration-75 ease-in-out" href="#events">Events</a></li>
            <li><a className="hover:text-cyan-400 duration-75 ease-in-out" href="#about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


export default Header;
