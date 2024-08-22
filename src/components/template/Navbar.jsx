import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { IoMoon } from 'react-icons/io5';
import { IoSunny } from 'react-icons/io5';

export default function Navbar() {
  const [dark, setDark] = useState(false);
  function darkModeHandler() {
    setDark(!dark);
    document.body.classList.toggle('dark');
  }

  const isHome = location.pathname === '/';

  if (isHome) {
    return (
      <header className="flex flex-col min-h-screen bg-center bg-cover bg-blend-overlay bg-black/70 bg-[url(./img/homepage/header.jpg)] text-white md:bg-fixed dark:bg-black/80 transition-all">
        <nav className="inset-0 z-50">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
            {/* title */}
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="./img/wonderfull_bali.png" className="h-12" alt="" />
            </a>

            {/* button */}
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
              <div className="z-50 hidden my-4 text-base list-none bg-gray-100 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 trasn" id="language-dropdown-menu">
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

            {/* nav link */}
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-white rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                  <NavLink
                    to="/culturalgallery"
                    className={({ isActive }) =>
                      isActive
                        ? 'block py-2 px-3 md:p-0 bg-second rounded md:bg-transparent md:text-second md:dark:text-blue-500 transition-all'
                        : 'block py-2 px-3 md:p-0 rounded hover:bg-second md:hover:bg-transparent md:hover:text-second md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all'
                    }
                  >
                    Cultural Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/tourism"
                    className={({ isActive }) =>
                      isActive
                        ? 'block py-2 px-3 md:p-0 bg-second rounded md:bg-transparent md:text-second md:dark:text-blue-500 transition-all'
                        : 'block py-2 px-3 md:p-0 rounded hover:bg-second md:hover:bg-transparent md:hover:text-second md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all'
                    }
                  >
                    Tourism
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/agriculture"
                    className={({ isActive }) =>
                      isActive
                        ? 'block py-2 px-3 md:p-0 bg-second rounded md:bg-transparent md:text-second md:dark:text-blue-500 transition-all'
                        : 'block py-2 px-3 md:p-0 rounded hover:bg-second md:hover:bg-transparent md:hover:text-second md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all'
                    }
                  >
                    Agriculture
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="flex-1 flex items-center">
          <div className="text-center mx-auto">
            <h1 className="text-5xl mb-6 font-medium px-10 md:px-0 drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Explore Bali With A Smile</h1>
            <div className="flex place-content-center">
              <div className="relative flex w-80 h-12 md:w-96">
                <a
                  href=""
                  className="!absolute right-1 top-1 z-10 select-none rounded-xl py-2 px-4 text-center align-middle bg-second text-white hover:bg-green-700 hover:shadow-md transition-all dark:bg-blue-500 dark:hover:bg-gray-700"
                  type="button"
                  data-ripple-light="true"
                >
                  Find Now
                </a>
                <input type="text" className="h-full w-full rounded-xl px-4 py-2.5 pr-20 font-sans text-black font-normal text-blue-gray-700 outline outline-0" placeholder="City or Destination..." required />
              </div>
            </div>
            {/* <button className="absolute right-28 top-20 rounded-lg px-3 py-1 bg-second text-white z-10">Find Now</button>
        <input type="text" className="w-80 px-3 py-3 rounded-xl font-normal text-black outline outline-0" placeholder={`City or Destination...`} /> */}
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <nav className="bg-main border-gray-200 backdrop-blur-lg dark:bg-gray-900 inset-0 z-50 transition-all">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          {/* title */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="./img/wonderfull_bali.png" className="h-12" alt="" />
          </a>

          {/* button */}
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

          {/* nav link */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-second rounded-lg bg-second md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-main dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 transition-all">
              <li>
                <NavLink
                  to="/culturalgallery"
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-2 px-3 md:p-0 text-white bg-second rounded md:bg-transparent md:text-second md:dark:text-blue-500 transition-all'
                      : 'block py-2 px-3 md:p-0 text-white rounded hover:bg-second md:hover:bg-transparent md:hover:text-second md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all'
                  }
                >
                  Cultural Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tourism"
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-2 px-3 md:p-0 text-white bg-second rounded md:bg-transparent md:text-second md:dark:text-blue-500 transition-all'
                      : 'block py-2 px-3 md:p-0 text-white rounded hover:bg-second md:hover:bg-transparent md:hover:text-second md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all'
                  }
                >
                  Tourism
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/agriculture"
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-2 px-3 md:p-0 text-white bg-second rounded md:bg-transparent md:text-second md:dark:text-blue-500 transition-all'
                      : 'block py-2 px-3 md:p-0 text-white rounded hover:bg-second md:hover:bg-transparent md:hover:text-second md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all'
                  }
                >
                  Agriculture
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
