
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between my-5 ">
 <div className="flex flex-start">
 <Logo></Logo>
 </div>
        <div className="flex flex-end justify-center items-center">
        
    <div className="dropdown">
      <label tabIndex={0} className=" lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20  p-2 shadow bg-base-100 rounded-box w-32 -ml-28 cursor-pointer">
      <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 font-bold  underline" : ""
              }
            >
              Home
            </NavLink>

          </li>

          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
              } 
            >
             Donation
            </NavLink>

            
          </li>
          <li>
            <NavLink
              to="/Statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 font-bold  underline" : ""
              }
            >
              Statistics
            </NavLink>

            
          </li>
      </ul>
     
    </div>
  
   
  </div>
    <div className="hidden lg:flex">
      <nav className="flex justify-between items-center py-4  px-5 ">

      

        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 font-bold  underline" : ""
              }
            >
              Home
            </NavLink>

          </li>

          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
              }
            >
             Donation
            </NavLink>

            
          </li>
          <li>
            <NavLink
              to="/Statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 font-bold  underline" : ""
              }
            >
              Statistics
            </NavLink>

            
          </li>
        </ul>

      </nav>
    </div>
 
    </div>
  );
};

export default Navbar;

