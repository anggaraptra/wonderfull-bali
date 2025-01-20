import Navbar from '../components/template/Navbar';
import Footer from '../components/template/Footer';
import Section from '../components/template/Section';
import Iframe from 'react-iframe';
import { CiLocationOn } from 'react-icons/ci';

export default function CulturalGallery() {
  return (
    <>
      <Navbar />
      <Section className="w-full">
        <header className="flex h-80 bg-cover bg-center bg-blend-overlay bg-black/80 bg-[url(/img/cultural/culture_header.webp)] text-white dark:bg-black/90 transition-all">
          <h1 className="place-content-end font-bold text-5xl px-10 py-20 md:text-7xl md:px-16 drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Galeri Budaya</h1>
        </header>
      </Section>
      <Section className="p-10 pt-12 pb-20 dark:bg-gray-800 transition-all">
        <div className="w-full container mx-auto flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-5 md:w-3/4 dark:text-gray-400 transition-all">
            <div className="flex flex-col gap-5">
              <article className="text-justify">
                Kekayaan kebudayaan Bali menjadi daya tarik tersendiri bagi wisatawan untuk mengunjungi Pulau Dewata selain keindahan alamnya. Kebudayaan Bali adalah perpaduan harmonis antara tradisi Hindu yang kental, seni yang beragam,
                serta adat istiadat yang telah diwariskan turun-temurun.
              </article>
              <article className="text-justify">
                Kebudayaan Bali dapat didefinisikan sebagai keseluruhan dari sistem nilai, perilaku, dan hasil karya manusia Bali yang terbentuk dari proses interaksi manusia Bali dengan lingkungannya. Dari upacara keagamaan yang sakral
                hingga kesenian yang penuh warna. Setiap aspek kebudayaan menawarkan pengalaman yang unik dan tak terlupakan bagi setiap pengunjung baik lokal maupun asing.
              </article>
              <img src="/img/cultural/bali_tradition.webp" className="rounded-xl drop-shadow-xl shadow-lg cursor-pointer saturate-[0.7] transition-all" alt="" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-medium dark:text-white">Keindahan Budaya Bali</h2>
                <div className="flex gap-2 items-center">
                  <span>
                    <CiLocationOn />
                  </span>
                  <span className="text-second font-bold dark:text-blue-500 transition-all">Bali, Indonesia</span>
                </div>
              </div>
              <article className="text-justify">
                Ada banyak jenis kesenian di Bali yang mencerminkan kekayaan budaya dan tradisi yang kaya di pulau itu. Salah satunya adalah seni tari, yang memiliki berbagai jenis dengan keindahan gerak dan filosofi yang unik. Beberapa
                seni tari yang bisa dijumpai di Bali adalah Tari Kecak, Tari Pendet, Tari Baris, Tari Legong, Tari Barong, dan Tari Topeng.
              </article>
              <article className="text-justify">
                Setiap jenis tarian berasal dari berbagai daerah di Bali. Setiap tarian tradisonal tersebut memiliki keunikan tersendiri dalam gerakan, kostum, musik, dan cerita yang disampaikan. Ini mencerminkan kekayaan budaya dan
                nilai-nilai tradisional yang diwariskan dari generasi ke generasi pada setiap daerah yang berbeda-beda.
              </article>
              <div className="flex flex-col w-full gap-4 justify-center items-center md:grid md:grid-cols-2">
                <img src="/img/cultural/naga.webp" className="rounded-xl drop-shadow-xl shadow-lg cursor-pointer saturate-50 hover:saturate-100 transition-all" alt="" />
                <img src="/img/cultural/tari_kecak.webp" className="rounded-xl drop-shadow-xl shadow-lg cursor-pointer saturate-50 hover:saturate-100 transition-all" alt="" />
              </div>
              <article className="text-justify">
                Selain tarian, ada banyak jenis kebudayaan Bali yang lainnya. Seperti rumah adat, pakaian adat, dan tradisi. Khususnya untuk tradisi karena memiliki keunikan yang berbeda di tiap daerah. Itulah kebudayaan Bali yang beragam
                dan juga memiliki ciri khasnya tersendiri. Kekayaan budaya ini perlu dilestarikan agar menjadi warisan anak cucu.
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-5 md:w-2/5 justify-between">
            <div className="text-center w-full h-full">
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.40562037026!2d115.14187046350995!3d-8.672504757430751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9374a!2sDenpasar%2C%20Kota%20Denpasar%2C%20Bali!5e0!3m2!1sid!2sid!4v1723537962569!5m2!1sid!2sid"
                width="400"
                height="300"
                style="border:0;"
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-xl drop-shadow-xl shadow-lg"
              ></Iframe>
            </div>
            <div className="flex gap-3 flex-col">
              <div className="flex justify-between">
                <h2 className="font-medium dark:text-white transition-all">Budaya Lain</h2>
                <a href="" className="text-second hover:text-green-700  hover:drop-shadow-xl dark:text-blue-500 dark:hover:text-gray-700 transition-all">
                  Tampilkan
                </a>
              </div>
              <div className="flex flex-col p-5 gap-4 md:grid md:grid-rows-4 md:flex-col md:p-0">
                <div className="flex flex-col h-64 rounded-lg bg-[url(/img/cultural/kerajinan.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-between items-start text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <div className="flex flex-col ps-10 p-6 gap-1 items-start">
                    <h3 className="text-3xl font-bold drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Kerajinan</h3>
                    <span className="text-xs">Bali, Indonesia</span>
                  </div>
                  <a href="/craft" className="ms-10 mb-8 text-md px-5 py-3 bg-second rounded-2xl hover:bg-green-700 hover:drop-shadow-xl dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">
                    View More
                  </a>
                </div>
                <div className="flex flex-col h-64 rounded-lg bg-[url(/img/cultural/canang.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-between items-start text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <div className="flex flex-col ps-10 p-6 gap-1 items-start">
                    <h3 className="text-3xl font-bold drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Kebudayaan</h3>
                    <span className="text-xs">Bali, Indonesia</span>
                  </div>
                  <a href="/culture" className="ms-10 mb-8 text-md px-5 py-3 bg-second rounded-2xl hover:bg-green-700 hover:drop-shadow-xl dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">
                    View More
                  </a>
                </div>
                <div className="flex flex-col h-64 rounded-lg bg-[url(/img/cultural/tarian.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-between items-start text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <div className="flex flex-col ps-10 p-6 gap-1 items-start">
                    <h3 className="text-3xl font-bold drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Tari-Tarian</h3>
                    <span className="text-xs">Bali, Indonesia</span>
                  </div>
                  <a href="" className="ms-10 mb-8 text-md px-5 py-3 bg-second rounded-2xl hover:bg-green-700 hover:drop-shadow-xl dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">
                    View More
                  </a>
                </div>
                <div className="flex flex-col h-64 rounded-lg bg-[url(/img/cultural/gebogan.webp)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-between items-start text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <div className="flex flex-col ps-10 p-6 gap-1 items-start">
                    <h3 className="text-3xl font-bold drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Adat Istiadat</h3>
                    <span className="text-xs">Bali, Indonesia</span>
                  </div>
                  <a href="" className="ms-10 mb-8 text-md px-5 py-3 bg-second rounded-2xl hover:bg-green-700 hover:drop-shadow-xl dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">
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
