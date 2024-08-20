import Navbar from '../../components/template/Navbar';
import Footer from '../../components/template/Footer';
import Section from '../../components/template/Section';

export default function Craft() {
  return (
    <>
      <Navbar />
      <Section className="w-full">
        <div className="flex h-80 bg-cover bg-blend-overlay bg-black/80 bg-[url(./img/cultural/kerajinan.jpg)] text-white">
          <h1 className="place-content-end font-bold text-5xl px-10 py-20 md:text-7xl md:px-16 drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Kerajinan</h1>
        </div>
      </Section>
      <Section className="bg-main p-10 dark:bg-gray-900">
        <div className="flex flex-col text-white md:p-8">
          <div className="flex justify-center p-2 md:pb-10">
            <h1 className="font-bold text-3xl md:text-4xl">Kerajinan</h1>
          </div>
          <div className="grid auto-rows-fr gap-8 md:grid-cols-2 pb-10 md:p-16">
            <div className="grid grid-rows-3 justify-items-center items-center">
              <h1 className="text-center font-medium md:text-2xl">Apa itu kerajinan?</h1>
              <p className="text-center font-thin md:text-xl">
                Kerajinan adalah salah satu hal yang sering dilakukan oleh seseorang. Kerajinan juga akan membuahkan sebuah hasil atau benda. Benda-benda tersebut tentu memiliki nilai-nilai tertentu.
              </p>
              <div className="">
                <a href="" className="text-center bg-second px-10 py-3 rounded-2xl font-medium hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md transition-all">
                  Selengkapnya
                </a>
              </div>
            </div>
            <div className="h-80 bg-cover rounded-xl bg-[url(./img/cultural/kerajinan_bali.jpg)]"></div>
          </div>
        </div>
      </Section>
      <Section className="bg-white">
        <div className="container mx-auto p-6 mb-20">
          <div className="flex flex-col items-center font-bold pt-8 pb-10 md:pt-16 md:pb-20">
            <h1 className="text-3xl md:text-4xl drop-shadow-lg border-b-4 border-second">Kerajinan Bali</h1>
          </div>
          <div className="md:px-10 flex flex-col font-bold md:gap-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/cultural/patung.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Patung</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/cultural/perhiasan_perak.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Perak</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/cultural/produk_spa.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Produk Spa</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/cultural/kain.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Kain Tenun</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/cultural/anyaman.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Anyaman</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/cultural/batok_kelapa.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Batok Kelapa</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col p-5 gap-4 md:flex-row md:p-0">
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/cultural/topeng_ukir.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Topeng Ukir</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/cultural/lukisan.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Lukisan</h1>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/cultural/keramik.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-end text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <h1 className="text-center p-6 text-2xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Keramik</h1>
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
