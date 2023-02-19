const Navbar = () => {
  return (
    <nav className="w-screen h-[60px] bg-white shadow-lg flex fixed top-0 left-0 p-4 items-center text-333">
      <a href="/" className="cursor-pointer ">
        login
      </a>
      <a href="/issues" className="ml-4 cursor-pointer">
        issues
      </a>
    </nav>
  );
};

export default Navbar;
