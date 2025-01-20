import Navbar from '../../components/template/Navbar';
import Footer from '../../components/template/Footer';
import Section from '../../components/template/Section';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

export default function Craft() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <Section className="w-full">
        <div className="flex h-80 bg-cover bg-center bg-blend-overlay bg-black/80 bg-[url(/img/cultural/kerajinan.webp)] text-white dark:bg-black/90 transition-all">
          <h1 className="place-content-end font-bold text-5xl px-10 py-20 md:text-7xl md:px-16 drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Kerajinan</h1>
        </div>
      </Section>
      <Section className="bg-main p-10 dark:bg-gray-900 transition-all">
        <div className="container w-full mx-auto flex flex-col text-white md:p-8">
          <div className="flex justify-center p-2 md:pb-10">
            <h2 className="font-bold text-3xl md:text-4xl">Kerajinan</h2>
          </div>
          <div className="grid auto-rows-fr gap-8 md:grid-cols-2 pb-10 md:p-16">
            <div className="grid grid-rows-3 justify-items-center items-center">
              <h3 className="text-center font-medium md:text-2xl">Apa itu kerajinan?</h3>
              <article className="text-center font-thin md:text-xl dark:text-gray-400">
                Kerajinan adalah salah satu hal yang sering dilakukan oleh seseorang. Kerajinan juga akan membuahkan sebuah hasil atau benda. Benda-benda tersebut tentu memiliki nilai-nilai tertentu.
              </article>
              <button className="text-center bg-second px-10 py-3 rounded-2xl font-medium hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md transition-all dark:bg-blue-500 dark:hover:bg-gray-700">Selengkapnya</button>
            </div>
            <div className="h-80 bg-cover rounded-xl bg-[url(/img/cultural/kerajinan_bali.webp)]"></div>
          </div>
        </div>
      </Section>
      <Section className="bg-white dark:bg-gray-800 transition-all">
        <div className="container mx-auto w-full p-6 pb-20">
          <div className="flex flex-col items-center font-bold pt-8 pb-10 md:pt-16 md:pb-20">
            <h2 className="text-3xl md:text-4xl drop-shadow-lg border-b-4 border-second dark:text-white dark:border-blue-500" data-aos="fade-up">
              Kerajinan Bali
            </h2>
          </div>
          <div className="md:px-10 flex flex-col font-bold md:gap-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/cultural/patung.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h3 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300">Patung</h3>
                </div>
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/cultural/perhiasan_perak.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h3 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300">Perak</h3>
                </div>
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/cultural/produk_spa.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h3 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300">Produk Spa</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/cultural/kain.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h3 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300">Kain Tenun</h3>
                </div>
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/cultural/anyaman.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h3 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300">Anyaman</h3>
                </div>
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/cultural/batok_kelapa.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h3 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300">Batok Kelapa</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/cultural/topeng_ukir.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h3 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300">Topeng Ukir</h3>
                </div>
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/cultural/lukisan.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h3 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300">Lukisan</h3>
                </div>
                <div
                  className="flex flex-col h-80 w-full rounded-lg bg-[url(/img/cultural/keramik.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg"
                  data-aos="fade-up"
                >
                  <h3 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300">Keramik</h3>
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
