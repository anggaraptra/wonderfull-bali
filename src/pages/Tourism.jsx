import Navbar from '../components/template/Navbar';
import Footer from '../components/template/Footer';
import Section from '../components/template/Section';
import { IoPricetagOutline } from 'react-icons/io5';
import { IoMapOutline } from 'react-icons/io5';
import { CiCamera } from 'react-icons/ci';
import { FaBusAlt } from 'react-icons/fa';
import { FaGlobeAsia } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { FaPersonHiking } from 'react-icons/fa6';

export default function Tourism() {
  return (
    <>
      <Navbar />
      <Section className="w-full">
        <div className="flex h-80 bg-cover bg-blend-overlay bg-black/80 bg-[url(./img/tourism/tourism_header.jpg)] text-white">
          <h1 className="place-content-end font-bold text-5xl px-10 py-20 md:text-7xl md:px-16 drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Tourism</h1>
        </div>
      </Section>
      <Section className="p-10">
        {/* <div className="grid grid-rows-3 gap-5 content-between md:grid-cols-3"> */}
        <div className="flex flex-col gap-10 md:flex-row md:content-center md:items-center md:align-center md:p-16">
          <div className="flex flex-col gap-5 items-center text-center">
            <div className="text-8xl">
              <IoPricetagOutline />
            </div>
            <h1 className="font-bold text-3xl">Best Price</h1>
            <p className="px-8">Lorem ipsum dolor sit amet, consectetur asadipiscing elit. Phasellus at nibh sit amet lacus gravida ultrices ut ut elit. Morbi sagittis dignissim purus finibus congue. Integer exesre nulla.</p>
            <div className="">
              <button className="bg-second px-6 py-3 rounded-2xl text-white uppercase hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md transition-all">Read More</button>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center text-center">
            <div className="text-8xl">
              <IoMapOutline />
            </div>
            <h1 className="font-bold text-3xl">City Tours</h1>
            <p className="px-8">Lorem ipsum dolor sit amet, consectetur asadipiscing elit. Phasellus at nibh sit amet lacus gravida ultrices ut ut elit. Morbi sagittis dignissim purus finibus congue. Integer exesre nulla.</p>
            <div className="">
              <button className="bg-second px-6 py-3 rounded-2xl text-white uppercase hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md transition-all">Read More</button>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center text-center">
            <div className="text-8xl">
              <CiCamera />
            </div>
            <h1 className="font-bold text-3xl">Photography</h1>
            <p className="px-8">Lorem ipsum dolor sit amet, consectetur asadipiscing elit. Phasellus at nibh sit amet lacus gravida ultrices ut ut elit. Morbi sagittis dignissim purus finibus congue. Integer exesre nulla.</p>
            <div className="">
              <button className="bg-second px-6 py-3 rounded-2xl text-white uppercase hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md transition-all">Read More</button>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-main text-white dark:bg-gray-900">
        <div className="container mx-auto p-6">
          <div className="flex flex-col -mx-4 py-20 gap-6 md:flex-row">
            <div className="flex flex-col w-full lg:w-1/2 px-4 place-content-center items-center gap-8">
              <h1 className="text-4xl font-bold">Facilities</h1>
              <p className="text-center px-10">
                Sed porttitor eget elit non faucibus. Donec malesuada, augue at condimentum finibus, justo ligula vestibulum erat, et accumsan libero metus eget nisl. Nulla interdum est at nulla cursus, at rhoncus tellus accumsan.
              </p>
              <div className="flex justify-center gap-2">
                <a href="" className="bg-white text-black px-6 py-4 uppercase font-bold rounded-xl hover:bg-second hover:text-white   hover:drop-shadow-lg hover:shadow-md transition-all">
                  Read More
                </a>
              </div>
            </div>
            <div className="grid grid-rows-4 gap-4 px-8 md:grid-cols-2 md:grid-rows-2 md:px-0">
              <div className="flex flex-col gap-3 bg-second p-10 px-14 rounded-xl items-center drop-shadow-lg shadow-lg">
                <div className="text-4xl">
                  <FaBusAlt />
                </div>
                <h1 className="text-3xl font-bold">Transport</h1>
                <span className="text-xs">Free Transport</span>
              </div>
              <div className="flex flex-col gap-3 bg-second p-10 px-14 rounded-xl items-center drop-shadow-lg shadow-lg">
                <div className="text-4xl">
                  <FaGlobeAsia />
                </div>
                <h1 className="text-3xl font-bold">Tours</h1>
                <span className="text-xs">Including Tour</span>
              </div>
              <div className="flex flex-col gap-3 bg-second p-10 px-14 rounded-xl items-center drop-shadow-lg shadow-lg">
                <div className="text-4xl">
                  <FiHome />
                </div>
                <h1 className="text-3xl font-bold">Camp Site</h1>
                <span className="text-xs">Provide Camp Site</span>
              </div>
              <div className="flex flex-col gap-3 bg-second p-10 px-14 rounded-xl items-center drop-shadow-lg shadow-lg">
                <div className="text-4xl">
                  <FaPersonHiking />
                </div>
                <h1 className="text-3xl font-bold">Hiking</h1>
                <span className="text-xs">Hiking Tour</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="p-10">
        <div className="container mx-auto p-6 mb-20">
          <div className="flex flex-col items-center font-bold pt-8 pb-10 md:pt-6 md:pb-20">
            <h1 className="text-xl md:text-3xl drop-shadow-xl">Top Destination</h1>
          </div>
          <div className="md:px-10 flex flex-col gap-16">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/tourism/melukat.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-between items-start text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="ps-10 p-6 text-3xl font-bold drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Melukat</h1>
                  <a href="" className="ms-10 mb-8 text-md px-5 py-3 bg-second rounded-2xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md transition-all">
                    View More
                  </a>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/tourism/kuta_beach.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-between items-start text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="ps-10 p-6 text-3xl font-bold drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Kuta Beach</h1>
                  <a href="" className="ms-10 mb-8 text-md px-5 py-3 bg-second rounded-2xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md transition-all">
                    View More
                  </a>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/tourism/bali_rafting.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-between items-start text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="ps-10 p-6 text-3xl font-bold drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Rafting</h1>
                  <a href="" className="ms-10 mb-8 text-md px-5 py-3 bg-second rounded-2xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md transition-all">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
