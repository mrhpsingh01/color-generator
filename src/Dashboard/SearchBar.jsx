import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, onChange, placeholder, className, onClick }) => {
  const [focused, setFocused] = useState(false);

  return (
    <form onSubmit={onClick}>
      <div className="w-full flex flex-wrap justify-center items-center bg-black">
        <div className="my-5 mr-5 relative overflow-hidden">
          <span className="absolute bottom-2 left-0 pl-3 inline-flex items-center pointer-events-none">
            <FaSearch
              size={23}
              className="text-green-500 "
              aria-hidden="true"
            />
          </span>
          {/* Input */}
          <input
            type="search"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="form-input pl-11 w-full border-0 border-b-2 border-gray-500 bg-white bg-opacity-20 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-0"
            onFocus={() => setFocused(5)}
            onBlur={() => setFocused(null)}
            onSubmit={onClick}
          />
          {/* Border bottom effect */}
          <span
            className={`absolute bottom-0 right-0 h-0.5 bg-gradient-to-r  from-green-200 to-green-900 transition-all duration-300 ease-in transform ${
              focused === 5 ? "w-full" : "w-0"
            }`}
            aria-hidden="true"
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
