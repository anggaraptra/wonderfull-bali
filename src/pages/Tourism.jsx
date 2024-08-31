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
        <div className="flex h-80 bg-cover bg-blend-overlay bg-black/80 bg-[url(./img/tourism/tourism_header.jpg)] text-white dark:bg-black/90 transition-all">
          <h1 className="place-content-end font-bold text-5xl px-10 py-20 md:text-7xl md:px-16 drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Pariwisata</h1>
        </div>
      </Section>
      <Section className="p-10 dark:bg-gray-800 transition-all">
        {/* <div className="grid grid-rows-3 gap-5 content-between md:grid-cols-3"> */}
        <div className="flex flex-col gap-10 md:flex-row md:content-center md:items-center md:align-center md:p-16 dark:text-white transition-all">
          <div className="flex flex-col gap-5 items-center text-center">
            <div className="text-8xl">
              <IoPricetagOutline />
            </div>
            <h1 className="font-bold text-3xl">Harga Terbaik</h1>
            <p className="px-8 dark:text-gray-400 transition-all">Harga terbaik, kualitas terjamin! kami berkomitmen memberikan anda penawaran yang tak tertandingi. Ayo beli sekarang dan rasakan bedanya.</p>
            <div className="">
              <button className="bg-second px-6 py-3 rounded-2xl text-white uppercase hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">SELENGKAPNYA</button>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center text-center">
            <div className="text-8xl">
              <IoMapOutline />
            </div>
            <h1 className="font-bold text-3xl">Tur Kota</h1>
            <p className="px-8 dark:text-gray-400 transition-all">Jelajahi keindahan kota dengan cara yang berbeda!. Ikuti tur kota esklusif kami dan temukan spot-spot menakjubkan yang belum pernah anda lihat sebelumnya.</p>
            <div className="">
              <button className="bg-second px-6 py-3 rounded-2xl text-white uppercase hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">SELENGKAPNYA</button>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center text-center">
            <div className="text-8xl">
              <CiCamera />
            </div>
            <h1 className="font-bold text-3xl">Fotografi</h1>
            <p className="px-8 dark:text-gray-400 transition-all">Tangkap keindahan setiap momen! jadikan setiap detik anda terabadikan dengan sempurna. Jangan biarkan momen berharga terlewat begitu saja!.</p>
            <div className="">
              <button className="bg-second px-6 py-3 rounded-2xl text-white uppercase hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">SELENGKAPNYA</button>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-main text-white dark:bg-gray-900">
        <div className="container mx-auto p-6">
          <div className="flex flex-col -mx-4 py-20 gap-6 md:flex-row">
            <div className="flex flex-col w-full lg:w-1/2 px-4 place-content-center items-center gap-8">
              <h1 className="text-4xl font-bold">Fasilitas</h1>
              <p className="text-center px-10 dark:text-gray-400 transition-all">
                Nikmati fasilitas terlengkap dan terbaik!. Fasilitas premium untuk kenyamanan maksimal!. Kami sediakan semua yang anda butuhkan untuk menikmati pengalaman berlibur yang tak terlupakan.
              </p>
              <div className="flex justify-center gap-2">
                <a
                  href=""
                  className="bg-white text-black px-6 py-4 uppercase font-bold rounded-xl hover:bg-second hover:text-white   hover:drop-shadow-lg hover:shadow-md dark:text-white dark:bg-gray-700 dark:hover:bg-blue-500 transition-all"
                >
                  Tampilkan
                </a>
              </div>
            </div>
            <div className="grid grid-rows-4 gap-4 px-8 md:grid-cols-2 md:grid-rows-2 md:px-0">
              <div className="flex flex-col gap-3 bg-second p-10 px-14 rounded-xl items-center drop-shadow-lg shadow-lg dark:bg-blue-500 transition-all">
                <div className="text-4xl">
                  <FaBusAlt />
                </div>
                <h1 className="text-3xl font-bold">Kendaraan</h1>
                <span className="text-xs">Gratis Transportasi</span>
              </div>
              <div className="flex flex-col gap-3 bg-second p-10 px-14 rounded-xl items-center drop-shadow-lg shadow-lg dark:bg-blue-500 transition-all">
                <div className="text-4xl">
                  <FaGlobeAsia />
                </div>
                <h1 className="text-3xl font-bold">Tur Kota</h1>
                <span className="text-xs">Termasuk Tur</span>
              </div>
              <div className="flex flex-col gap-3 bg-second p-10 px-14 rounded-xl items-center drop-shadow-lg shadow-lg dark:bg-blue-500 transition-all">
                <div className="text-4xl">
                  <FiHome />
                </div>
                <h1 className="text-3xl font-bold">Penginapan</h1>
                <span className="text-xs">Tempat Penginapan</span>
              </div>
              <div className="flex flex-col gap-3 bg-second p-10 px-14 rounded-xl items-center drop-shadow-lg shadow-lg dark:bg-blue-500 transition-all">
                <div className="text-4xl">
                  <FaPersonHiking />
                </div>
                <h1 className="text-3xl font-bold">Pendakian</h1>
                <span className="text-xs">Tur Pendakian</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="p-10 dark:bg-gray-800 dark:text-white transition-all">
        <div className="container mx-auto p-6 mb-20">
          <div className="flex flex-col items-center font-bold pt-8 pb-10 md:pt-6 md:pb-20">
            <h1 className="text-xl md:text-3xl drop-shadow-xl">Destinasi Top</h1>
          </div>
          <div className="md:px-10 flex flex-col gap-16">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/tourism/melukat.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-between items-start text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="ps-10 p-6 text-3xl font-bold drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300">Melukat</h1>
                  <a href="" className="ms-10 mb-8 text-md px-5 py-3 bg-second rounded-2xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">
                    Lihat
                  </a>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/tourism/kuta_beach.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-between items-start text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="ps-10 p-6 text-3xl font-bold drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300">Kuta Beach</h1>
                  <a href="" className="ms-10 mb-8 text-md px-5 py-3 bg-second rounded-2xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">
                    Lihat
                  </a>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/tourism/bali_rafting.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-between items-start text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="ps-10 p-6 text-3xl font-bold drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300">Rafting</h1>
                  <a href="" className="ms-10 mb-8 text-md px-5 py-3 bg-second rounded-2xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">
                    Lihat
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
