const Navbar = () =>{
    return(
        <nav className="w-screen h-[60px] bg-amber-400 flex fixed top-0 left-0 p-4 items-center text-[#f0f0f0]">
            <div className="cursor-pointer">HOME</div>
            <div className="ml-4 cursor-pointer">ABOUT</div>
            <div className="ml-4 cursor-pointer">CONTACT</div>
        </nav>
    )
}

export default Navbar;