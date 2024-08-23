import { NavLink } from 'react-router-dom';
import ButtonNav from '../ButtonNav';

export default function Navbar() {
  const isHome = location.pathname === '/';

  if (isHome) {
    return (
      <header className="flex flex-col min-h-screen bg-center bg-cover bg-blend-overlay bg-black/70 bg-[url(./img/homepage/header.jpg)] text-white md:bg-fixed dark:bg-black/80 transition-all">
        <nav className={`inset-0 z-50`}>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
            {/* title */}
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="./img/wonderfull_bali.png" className="h-12" alt="" />
            </a>

            {/* button */}
            <ButtonNav />

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
          <ButtonNav />

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
