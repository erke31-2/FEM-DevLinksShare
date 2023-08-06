import { Link, NavLink } from "react-router-dom";
import { FaLink, FaUserCircle, FaRegEye } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
const NavBar = () => {
  const {logOut} = useAuth();
  return (
    <header className="w-[95%] bg-white mx-auto shadow-sm rounded-lg flex justify-between px-5 py-2 items-center">
      <h1 className="text-lg font-bold">DevLinks</h1>
      <nav>
        <ul className="flex items-center">
          <li>
            <NavLink
              to={"links"}
              className={({ isActive }) =>
                isActive
                  ? "text-btnBg gap-x-1 px-6 py-3 bg-navBg rounded-md flex items-center"
                  : "text-secondaryColor flex items-center gap-x-1 px-6 py-3 rounded-md"
              }
            >
              <FaLink />
              <span className="font-medium hidden md:block">Links</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"personalInfo"}
              className={({ isActive }) =>
                isActive
                  ? "text-btnBg gap-x-1 px-6 py-3 bg-navBg rounded-md flex items-center"
                  : "text-secondaryColor flex items-center gap-x-1 px-6 py-3 rounded-md"
              }
            >
              <FaUserCircle />
              <span className="font-medium hidden md:block">
                Profile Details
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link
        to={"/"}
        className="text-btnBg border rounded-md flex justify-center items-center py-[10px] px-4 border-btnBg"
      >
        <FaRegEye />
      </Link>
      <button className="bg-red-500 text-cardBg px-4 py-2 font-bold rounded-md" onClick={logOut}>
        LogOut
      </button>
    </header>
  );
};
export default NavBar;
