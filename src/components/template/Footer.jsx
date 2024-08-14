import { FaLocationDot } from 'react-icons/fa6';
import { MdMailOutline } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { IoMapOutline } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#295943] dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-6">
        {/* judul dan links */}
        <div className="flex flex-col md:flex-row md:gap-8 md:justify-between">
          {/* judul */}
          <div className="grid grid-rows-3 md:mb-0 md:w-1/4">
            <a href="" className="flex place-content-center items-center">
              <img src="./img/wonderfull_bali.png" className="h-20 me-3" alt="" />
            </a>
            <div className="mb-4 md:text-wrap md:mb-0 ">
              <article className="text-sm text-gray-300 md:text-justify sm:text-center dark:text-gray-400">
                Hak cipta dilindungi. Ikuti kami di platform media sosial untuk pembaruan terbaru. Desain dan pengembangan oleh tim kami sendiri. Semua transaksi aman dan terenkripsi
              </article>
            </div>
            <div className="">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow Us</h2>
              <div className="flex sm:mt-0">
                <a href="#" className="text-gray-300 hover:text-[#1da868] dark:hover:text-white">
                  <FaInstagram />
                  <span className="sr-only">Instagram page</span>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#1da868] dark:hover:text-white ms-5">
                  <IoLogoFacebook />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#1da868] dark:hover:text-white ms-5">
                  <FaXTwitter />
                  <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#1da868] dark:hover:text-white ms-5">
                  <FaGithub />
                  <span className="sr-only">GitHub account</span>
                </a>
              </div>
            </div>
          </div>
          {/* links */}
          <div className="grid grid-rows-2 md:p-5 md:w-3/5">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:col-span-2">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Links</h2>
                <ul className="text-gray-300 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">
                      Discover
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                      Services
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                      Community
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Contact Us</h2>
                <ul className="text-gray-300 dark:text-gray-400 font-medium">
                  <li className="mb-4 flex gap-2">
                    <div className="self-center">
                      <FaLocationDot />
                    </div>
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline">
                      Jalan Pulau Bali No. 9B
                    </a>
                  </li>
                  <li className="mb-4 flex gap-2">
                    <div className="self-center">
                      <MdMailOutline />
                    </div>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                      wonderfulbali@gmail.com
                    </a>
                  </li>
                  <li className="mb-4 flex gap-2">
                    <div className="self-center">
                      <BsTelephone />
                    </div>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                      0361 476 899
                    </a>
                  </li>
                  <li className="mb-4 flex gap-2">
                    <div className="self-center">
                      <IoMapOutline />
                    </div>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                      Denpasar, Bali
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:col-span-2">
              {/* garis */}
              <div className="">
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              </div>
              {/* copyright */}
              <div className="sm:flex sm:items-center sm:justify-between">
                <span className="flex gap-4 text-sm text-gray-300 sm:text-center dark:text-gray-400">
                  <span>Privacy & Policy</span> | <span>Terms and Condition</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
