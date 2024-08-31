import Navbar from '../components/template/Navbar';
import Footer from '../components/template/Footer';
import Section from '../components/template/Section';

export default function Home() {
  return (
    <>
      <Navbar />
      <Section className="bg-main text-white dark:bg-gray-900 transition-all">
        <div className="container mx-auto p-6">
          <div className="flex flex-col -mx-4 py-20 gap-6 md:flex-row">
            <div className="flex w-full lg:w-1/2 px-4 gap-4 md:mb-0 items-center justify-center">
              <div className="w-56 h-96 cursor-pointer">
                <img src="./img/homepage/sanur_bali.jpg" alt="culture" className="object-cover w-full h-full rounded-xl saturate-150 drop-shadow-xl shadow-lg dark:saturate-100 transition-all" />
              </div>
              <div className="w-40 h-72 cursor-pointer">
                <img src="./img/homepage/kintamani_bali.jpg" alt="culture" className="object-cover w-full h-full rounded-xl saturate-150 drop-shadow-xl shadow-lg dark:saturate-100 transition-all" />
              </div>
            </div>
            <div className="grid grid-rows-3 w-full lg:w-1/2 px-8 justify-items-center items-center">
              <h1 className="text-3xl md:text-4xl font-bold text-center">Pulau Dewata</h1>
              <p className="text-center dark:text-gray-400 transition-all">
                Bali adalah sebuah provinsi di Indonesia yang terletak pada bagian barat Kepulauan Nusa Tenggara dan beribu kota di Kota Denpasar. Pulau Bali, yang merupakan pulau terbesar di Provinsi Bali, memiliki beberapa julukan, di
                antaranya Pulau Dewata dan Pulau Seribu Pura.
              </p>
              <div className="flex justify-center gap-1">
                <input type="text" className="w-72 rounded-2xl px-3 py-2 font-normal text-black outline outline-0 md:w-80" placeholder="Masukkan Email ....." />
                <a
                  href=""
                  className="bg-white text-black px-4 py-2 uppercase font-bold rounded-2xl hover:bg-second hover:text-white hover:drop-shadow-lg hover:shadow-md transition-all dark:text-white dark:bg-gray-700 dark:hover:bg-blue-500"
                >
                  Daftar
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-white dark:bg-gray-800 transition-all">
        <div className="container mx-auto p-6 pb-20">
          <div className="flex flex-col items-center font-bold pt-8 pb-10 md:pt-16 md:pb-20">
            <span className="text-second text-sm drop-shadow-lg dark:text-blue-500 transition-all">Tujuan Populer</span>
            <h1 className="text-xl md:text-3xl drop-shadow-lg dark:text-white transition-all">Temukan Lagi</h1>
          </div>
          <div className="md:px-10 flex flex-col gap-16 font-bold">
            <div className="flex flex-col gap-8">
              <a href="/culturalgallery" className="text-lg md:text-xl border-b-4 w-36 border-second hover:border-black transition-all drop-shadow-xl shadow-lg dark:text-white dark:border-blue-500 dark:hover:border-gray-300">
                Galeri Budaya
              </a>
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/upacara_adat.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Tradisi</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/tarian.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Tari Tarian</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/kerajinan.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Kerajinan</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <a href="/tourism" className="text-lg md:text-xl border-b-4 w-24 border-second hover:border-black transition-all drop-shadow-xl shadow-lg dark:text-white dark:border-blue-500 dark:hover:border-gray-300">
                Pariwisata
              </a>
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/wisata.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Tempat</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/swing_bali.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Wahana</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/pantai.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Pantai</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <a href="/agriculture" className="text-lg md:text-xl border-b-4 w-24 border-second hover:border-black transition-all drop-shadow-xl shadow-lg dark:text-white dark:border-blue-500 dark:hover:border-gray-300">
                Pertanian
              </a>
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/padi.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Padi</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/pohon_kopi.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Kopi</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/jeruk.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)] dark:text-gray-300 transition-all">Jeruk</h1>
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
