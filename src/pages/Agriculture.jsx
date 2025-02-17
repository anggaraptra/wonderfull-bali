import Navbar from '../components/template/Navbar';
import Footer from '../components/template/Footer';
import Section from '../components/template/Section';

export default function Agriculture() {
  return (
    <>
      <Navbar />
      <Section className="w-full">
        <div className="flex h-80 bg-cover bg-center bg-blend-overlay bg-black/80 bg-[url(/img/agriculture/agri_header.webp)] text-white dark:bg-black/90 transition-all">
          <h1 className="place-content-end font-bold text-5xl px-10 py-20 md:text-7xl md:px-16 drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Pertanian</h1>
        </div>
      </Section>
      <Section className="p-10 dark:bg-gray-800 transition-all flex flex-col justify-center items-center">
        <div className="p-8 pb-14">
          <h2 className="text-4xl font-bold border-b-[3px] border-main dark:text-white dark:border-blue-500 transition-all">Daerah</h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 mb-20 md:flex-row">
          <div className="relative w-80 h-[22rem] overflow-hidden rounded-xl shadow-md dark:bg-gray-900 dark:text-white transition-all">
            <img src="/img/agriculture/tabanan.webp" alt="" className="bg-cover h-[13.2rem] brightness-50" />
            <div className="absolute top-[12rem] left-[5.7rem] px-4 py-2 text-center">
              <a href="/tabanan" className="bg-second hover:bg-green-700 text-white py-2 px-4 rounded-xl hover:drop-shadow-lg hover:shadow-md dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">
                Tampilkan
              </a>
            </div>
            <div className="text-center mt-14">
              <h3 className="text-3xl font-bold">Tabanan</h3>
            </div>
          </div>
          <div className="relative w-80 h-[22rem] overflow-hidden rounded-xl shadow-md dark:bg-gray-900 dark:text-white transition-all">
            <img src="/img/agriculture/gianyar.webp" alt="" className="bg-cover brightness-50" />
            <div className="absolute top-[12rem] left-[5.7rem] px-4 py-2 text-center">
              <a href="/gianyar" className="bg-second hover:bg-green-700 text-white py-2 px-4 rounded-xl hover:drop-shadow-lg hover:shadow-md dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">
                Tampilkan
              </a>
            </div>
            <div className="text-center mt-14">
              <h3 className="text-3xl font-bold">Gianyar</h3>
            </div>
          </div>
          <div className="relative w-80 h-[22rem] overflow-hidden rounded-xl shadow-md dark:bg-gray-900 dark:text-white transition-all">
            <img src="/img/agriculture/kintamani.webp" alt="" className="bg-cover brightness-50" />
            <div className="absolute top-[12rem] left-[5.7rem] px-4 py-2 text-center">
              <a href="/kintamani" className="bg-second hover:bg-green-700 text-white py-2 px-4 rounded-xl hover:drop-shadow-lg hover:shadow-md dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">
                Tampilkan
              </a>
            </div>
            <div className="text-center mt-14">
              <h3 className="text-3xl font-bold">Kintamani</h3>
            </div>
          </div>
        </div>
      </Section>
      <Section className="w-full h-full dark:border-gray-800">
        <div className="h-[20rem] md:h-[30rem] flex flex-col justify-center items-center bg-cover bg-center bg-blend-overlay bg-black/70 bg-[url(/img/agriculture/agri_bg.webp)] text-white p-20 gap-10 md:gap-14 md:py-26">
          <h2 className="font-bold text-xl text-center md:text-5xl md:px-60 drop-shadow-[0_5px_0_rgba(0,0,0,1)]">Support Petani-petani dan UMKM Lokal Bali</h2>
          <a href="" className="px-5 py-3 bg-second rounded-xl font-medium md:text-lg md:px-10 md:py-5 hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">
            Klik Disini
          </a>
        </div>
      </Section>
      <Footer />
    </>
  );
}
