import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
    <div className="navbar bg-base-100 w-11/12 mx-auto">
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
            <NavLink to="/" className="text-lg font-bold">Home</NavLink>
            <NavLink to="/coffees" className="text-lg font-bold">Coffees</NavLink>
            <NavLink to="/dashboard" className="text-lg font-bold">Dashboard</NavLink>
        </ul>
        </div>
        <a className=" text-3xl font-bold">Cook_Book</a>
    </div>
    <div className="navbar-end hidden lg:flex">
        <ul className=" menu menu-horizontal px-1 gap-10">
            <NavLink to="/" className="text-lg font-bold">Home</NavLink>
            <NavLink to="/coffees" className="text-lg font-bold">Coffees</NavLink>
            <NavLink to="/dashboard" className="text-lg font-bold">Dashboard</NavLink>
        </ul>
    </div>
    </div>
    );
};

export default Navbar;