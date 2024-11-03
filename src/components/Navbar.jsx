import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
    <div className="navbar backdrop-blur  bg-white/30  fixed top-0 z-50">
        <div className="w-10/12 mx-auto">
    <div className="lg:navbar-start ">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
        </div>
        <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-5">
            <NavLink className={({isActive})=> ` ${isActive? 'text-warning' : 'hover:text-warning'}`} to="/">Home</NavLink>
            <NavLink className={({isActive})=> ` ${isActive? 'text-warning' : 'hover:text-warning'}`} to="/coffees">Coffees</NavLink>
            <NavLink className={({isActive})=> ` ${isActive? 'text-warning' : 'hover:text-warning'}`} to="/dashboard">Dashboard</NavLink>
        </ul>
        </div>
        <a className=" text-3xl font-bold">Coffee_Book</a>
    </div>
    <div className="navbar-end hidden lg:flex ">
        <ul className=" menu menu-horizontal px-1 gap-10">
            <NavLink className={({isActive})=> `text-lg ${isActive? 'text-warning' : 'hover:text-warning'}`} to="/">Home</NavLink>
            <NavLink className={({isActive})=> ` text-lg ${isActive? 'text-warning' : 'hover:text-warning'}`} to="/coffees">Coffees</NavLink>
            <NavLink className={({isActive})=> ` text-lg ${isActive? 'text-warning' : 'hover:text-warning'}`} to="/dashboard">Dashboard</NavLink>
        </ul>
    </div>
    </div>
    </div>
    );
};

export default Navbar;