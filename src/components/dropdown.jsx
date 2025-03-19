import React, { useState } from "react";
import { HiMiniChevronDown } from "react-icons/hi2";

const Dropdown = ({options, menuName}) => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = options;

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md shadow border"
      >
        <p className="text-xs">{menuName}</p> <HiMiniChevronDown size={18} />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
          <ul className="py-2">
            {categories.map((category, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
