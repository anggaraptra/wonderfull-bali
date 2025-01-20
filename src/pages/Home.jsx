import Navbar from '../components/template/Navbar';
import Footer from '../components/template/Footer';
import Section from '../components/template/Section';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <Section className="bg-main text-white dark:bg-gray-900 transition-all">
        <div className="container mx-auto p-6">
          <div className="flex flex-col -mx-4 py-20 gap-6 md:flex-row">
            <div className="flex w-full lg:w-1/2 px-4 gap-4 md:mb-0 items-center justify-center" data-aos="fade-up">
              <div className="w-[40rem] h-[20rem] md:w-56 md:h-96 cursor-pointer">
                <img src="/img/homepage/sanur_bali.webp" alt="culture" className="object-cover w-full h-full rounded-xl saturate-150 drop-shadow-xl shadow-lg dark:saturate-100 transition-all" />
              </div>
              <div className="w-[40rem] h-[20rem] md:w-40 md:h-72 cursor-pointer">
                <img src="/img/homepage/kintamani_bali.webp" alt="culture" className="object-cover w-full h-full rounded-xl saturate-150 drop-shadow-xl shadow-lg dark:saturate-100 transition-all" />
              </div>
            </div>
            <div className="grid grid-rows-3 w-full lg:w-1/2 px-8 justify-items-center items-center">
              <h2 className="text-3xl md:text-4xl font-bold text-center" data-aos="fade-up">
                Pulau Dewata
              </h2>
              <article className="text-center dark:text-gray-400 transition-all" data-aos="fade-up">
                Bali adalah sebuah provinsi di Indonesia yang terletak pada bagian barat Kepulauan Nusa Tenggara dan beribu kota di Kota Denpasar. Pulau Bali, yang merupakan pulau terbesar di Provinsi Bali, memiliki beberapa julukan, di
                antaranya Pulau Dewata dan Pulau Seribu Pura.
              </article>
              <div className="flex justify-center gap-1" data-aos="fade-up">
                <input type="text" className="w-72 rounded-2xl px-3 py-2 font-normal text-black outline outline-0 md:w-80" placeholder="Masukkan Email ....." />
                <button className="bg-white text-black px-4 py-2 uppercase font-bold rounded-2xl hover:bg-second hover:text-white hover:drop-shadow-lg hover:shadow-md transition-all dark:text-white dark:bg-gray-700 dark:hover:bg-blue-500">
                  Daftar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-white dark:bg-gray-800 transition-all">
        <div className="container mx-auto p-6 pb-20">
          <header className="flex flex-col items-center font-bold pt-8 pb-10 md:pt-16 md:pb-20">
            <span className="text-second text-sm drop-shadow-lg dark:text-blue-500 transition-all" data-aos="fade-down">
              Tujuan Populer
            </span>
            <h3 className="text-xl md:text-3xl drop-shadow-lg dark:text-white transition-all" data-aos="fade-up">
              Temukan Lagi
            </h3>
          </header>
          <div className="md:px-10 flex flex-col gap-16 font-bold">
            <div className="flex flex-col gap-8">
              <a
                href="/culturalgallery"
                className="text-lg md:text-xl border-b-4 w-36 border-second hover:border-black transition-all drop-shadow-xl shadow-lg dark:text-white dark:border-blue-500 dark:hover:border-gray-300"
                data-aos="fade-right"
              >
                Galeri Budaya
              </a>
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/homepage/upacara_adat.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h4 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Tradisi</h4>
                </div>
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/homepage/tarian.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h4 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Tari Tarian</h4>
                </div>
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/homepage/kerajinan.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h4 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Kerajinan</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <a href="/tourism" className="text-lg md:text-xl border-b-4 w-24 border-second hover:border-black transition-all drop-shadow-xl shadow-lg dark:text-white dark:border-blue-500 dark:hover:border-gray-300" data-aos="fade-right">
                Pariwisata
              </a>
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/homepage/wisata.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h4 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Tempat</h4>
                </div>
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/homepage/swing_bali.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h4 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Wahana</h4>
                </div>
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/homepage/pantai.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h4 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Pantai</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <a
                href="/agriculture"
                className="text-lg md:text-xl border-b-4 w-24 border-second hover:border-black transition-all drop-shadow-xl shadow-lg dark:text-white dark:border-blue-500 dark:hover:border-gray-300"
                data-aos="fade-right"
              >
                Pertanian
              </a>
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/homepage/padi.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h4 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Padi</h4>
                </div>
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/homepage/pohon_kopi.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h4 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Kopi</h4>
                </div>
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/homepage/jeruk.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h4 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Jeruk</h4>
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
