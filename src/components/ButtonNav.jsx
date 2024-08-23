import { useState } from 'react';
import { IoMoon } from 'react-icons/io5';
import { IoSunny } from 'react-icons/io5';

export default function ButtonNav() {
  const [dark, setDark] = useState(false);
  function darkModeHandler() {
    setDark(!dark);
    document.body.classList.toggle('dark');
  }

  return (
    <div className="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      {/* darkmode button */}
      <button
        id="theme-toggle"
        type="button"
        onClick={() => darkModeHandler()}
        className="focus:outline-none text-white focus:ring-2 focus:ring-white hover:bg-second hover:text-white dark:focus:ring-gray-600 dark:hover:bg-gray-700 dark:hover:text-white rounded-lg text-sm p-2.5 transition-all"
      >
        {dark && <IoSunny className="" />}
        {!dark && <IoMoon className="" />}
      </button>
      {/* change languange button */}
      <button
        type="button"
        data-dropdown-toggle="language-dropdown-menu"
        className="inline-flex text-white items-center font-medium justify-center px-4 py-2 text-sm rounded-lg cursor-pointer hover:bg-second focus:outline-none focus:ring-2 focus:ring-white hover:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600 transition-all"
      >
        <img className="w-5 h-5 rounded-full me-3" src="./img/us.png" alt="" />
        ENG
      </button>
      {/* Dropdown */}
      <div className="z-50 hidden my-4 text-base list-none bg-gray-100 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
        <ul className="py-2 font-medium" role="none">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white transition-all" role="menuitem">
              <div className="inline-flex items-center">
                <img className="h-3.5 w-3.5 rounded-full me-2" src="./img/us.png" alt="" />
                ENG
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white transition-all" role="menuitem">
              <div className="inline-flex items-center">
                <img className="h-3.5 w-3.5 rounded-full me-2" src="./img/id.png" alt="" />
                ID
              </div>
            </a>
          </li>
        </ul>
      </div>
      <button
        data-collapse-toggle="navbar-language"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-second focus:outline-none focus:ring-2 focus:ring-white dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 dark:hover:text-white transition-all"
        aria-controls="navbar-language"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </div>
  );
}
