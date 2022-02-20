import { BsPalette } from "react-icons/bs";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

const Navbar = ({ value, onChange, placeholder, className, onClick }) => {
  return (
    <header className="w-full bg-black text-white body-font mb-4 shadow-sm">
      {/* :DESKTOP MENU */}
      <div className="mx-auto flex justify-between items-center grid-cols-3">
        {/* Site logo and Name */}
        <a
          href="/"
          className="flex flex-shrink-0 title-font font-medium  text-green-500 md:mb-0"
        >
          <BsPalette className="ml-3 mt-3" />
          <span className="ml-3 mt-1 text-xxl text-gray-100 antialiased">
            <Logo />
          </span>
        </a>
        {/* Navbar */}
        <nav className="">
          <SearchBar
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
            onClick={onClick}
          />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
