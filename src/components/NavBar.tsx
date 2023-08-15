import { Link, NavLink } from "react-router-dom";
import { FaLink, FaUserCircle, FaRegEye } from "react-icons/fa";

const NavBar = () => {

  return (
    <header className="w-[95%] bg-white mx-auto shadow-sm rounded-lg flex justify-between px-5 py-2 items-center">
      <a href="/edit">
        <h1 className="text-lg font-bold">DevLinks</h1>
      </a>
      <nav>
        <ul className="flex items-center">
          <li>
            <NavLink
              to={"links"}
              className="text-secondaryColor flex items-center gap-x-1 px-6 py-3 rounded-md"
            >
              <FaLink />
              <span className="font-medium hidden md:block">Links</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"personalInfo"}
              className="text-secondaryColor flex items-center gap-x-1 px-6 py-3 rounded-md"
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
        className="text-btnBg border rounded-md flex justify-center items-center py-[10px] px-4 border-btnBg gap-x-1"
      >
        <FaRegEye />
        <span className="hidden md:block font-medium">Preview</span>
      </Link>
    </header>
  );
};
export default NavBar;
