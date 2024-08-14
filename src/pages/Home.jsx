import NavbarHero from '../components/template/NavbarHero';
import Footer from '../components/template/Footer';
import Section from '../components/template/Section';

export default function Home() {
  return (
    <>
      <NavbarHero />
      <Section className="bg-[#295943] text-white">
        <div className="container mx-auto p-6">
          <div className="flex flex-col -mx-4 py-20 gap-6 md:flex-row">
            <div className="flex w-full lg:w-1/2 px-4 gap-4 md:mb-0 items-center justify-center">
              <div className="w-56 h-96 cursor-pointer">
                <img src="./img/homepage/sanur_bali.jpg" alt="culture" className="object-cover w-full h-full rounded-xl saturate-150 drop-shadow-xl shadow-lg" />
              </div>
              <div className="w-40 h-72 cursor-pointer">
                <img src="./img/homepage/kintamani_bali.jpg" alt="culture" className="object-cover w-full h-full rounded-xl saturate-150 drop-shadow-xl shadow-lg" />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 px-4 place-content-center items-center gap-8">
              <h1 className="text-4xl font-bold">Know everything about Bali</h1>
              <p className="text-justify">
                Bali adalah sebuah provinsi di Indonesia yang terletak pada bagian barat Kepulauan Nusa Tenggara dan beribu kota di Kota Denpasar. Pulau Bali, yang merupakan pulau terbesar di Provinsi Bali, memiliki beberapa julukan, di
                antaranya Pulau Dewata dan Pulau Seribu Pura.
              </p>
              <div className="flex justify-center gap-2">
                <input type="text" className="w-96 rounded-lg px-3 py-2 font-normal text-black outline outline-0" placeholder="Enter your email..." />
                <a href="" className="bg-white text-black px-4 py-2 uppercase font-bold rounded-lg hover:bg-[#1da868] hover:text-white hover:drop-shadow-lg hover:shadow-md transition-all">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-white">
        <div className="container mx-auto p-6 mb-20">
          <div className="flex flex-col items-center font-bold pt-8 pb-10 md:pt-16 md:pb-20">
            <span className="text-[#1da868] text-sm drop-shadow-lg">Top Destination</span>
            <h1 className="text-xl md:text-3xl drop-shadow-lg">Discover More</h1>
          </div>
          <div className="md:px-10 flex flex-col gap-16 font-bold">
            <div className="flex flex-col gap-8">
              <a href="/culturalgallery" className="text-lg md:text-xl border-b-4 w-40 border-[#1da868] hover:border-black transition-all drop-shadow-xl shadow-lg">
                Cultural Gallery
              </a>
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/upacara_adat.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Tradisi</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/tarian.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Tari Tarian</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/kerajinan.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Kerajinan</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <a href="/tourism" className="text-lg md:text-xl border-b-4 w-20 border-[#1da868] hover:border-black transition-all drop-shadow-xl shadow-lg">
                Tourism
              </a>
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/wisata.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Tempat</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/swing_bali.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Wahana</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/pantai.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Pantai</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <a href="/agriculture" className="text-lg md:text-xl border-b-4 w-28 border-[#1da868] hover:border-black transition-all drop-shadow-xl shadow-lg">
                Agriculture
              </a>
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/padi.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Padi</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/pohon_kopi.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Kopi</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/jeruk.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Jeruk</h1>
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
