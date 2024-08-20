import Navbar from '../../components/template/Navbar';
import Footer from '../../components/template/Footer';
import Section from '../../components/template/Section';
import { FiTruck } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';

export default function Kintamani() {
  return (
    <>
      <Navbar />
      <Section className="flex flex-col items-center justify-center bg-cover min-h-screen bg-blend-overlay bg-black/80 bg-[url(./img/agriculture/kintamani.jpg)] text-white">
        <div className="">
          <h1 className="font-bold text-5xl md:text-8xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Kintamani</h1>
        </div>
      </Section>
      <Section className="w-full mx-auto">
        <div className="relative">
          <div className="absolute mx-auto bottom-[-2.3rem] left-[2.2rem] md:left-[27rem]">
            <div className="px-10 py-5 text-center rounded-xl bg-white shadow-md">
              <div className="flex flex-row text-black justify-between gap-6 md:gap-8">
                <div className="flex flex-row items-center justify-between gap-4 md:gap-6">
                  <div className="text-second md:text-3xl">
                    <FiTruck />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-sm font-bold md:text-xl">Pengiriman</h1>
                    <span className="text-xs text-main md:text-md">Semua Pesanan</span>
                  </div>
                </div>
                <div className="border-l-2"></div>
                <div className="flex flex-row items-center justify-between gap-4">
                  <div className="text-second md:text-3xl">
                    <CiLocationOn />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-sm font-bold md:text-xl">Lokasi Toko</h1>
                    <span className="text-xs text-main md:text-md">Temukan Toko Terdekat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="w-full p-10 pt-40 pb-28">
        <div className="flex flex-col gap-16 md:gap-20">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0">
            <div className="max-w-lg">
              <img src="./img/agriculture/jeruk_kintamani.jpg" alt="" className="h-auto max-w-full rounded-xl" />
            </div>
            <div className="flex flex-col gap-4 justify-center md:gap-10">
              <h1 className="font-bold text-3xl md:text-5xl">Jeruk</h1>
              <p className="text-justify md:text-xl">Jeruk adalah buah dari spesies citrus dalam famili Rutaceae. Istilah &quot;jeruk&quot; umumnya mengacu pada Citrus × sinensis yang juga disebut jeruk manis. </p>
              <div className="flex flex-row items-center gap-4">
                <button className="px-5 py-2 bg-second text-white rounded-xl md:px-8 md:py-3 md:text-xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md transition-all">Tambahkan</button>
                <span className="text-second font-bold md:font-lg">Rp 31.000</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0">
            <div className="max-w-lg">
              <img src="./img/agriculture/kopi_bali.jpg" alt="" className="h-auto max-w-full rounded-xl" />
            </div>
            <div className="flex flex-col gap-4 justify-center md:gap-10">
              <h1 className="font-bold text-3xl md:text-5xl">Kopi</h1>
              <p className="text-justify md:text-xl">Kopi atau kahwa adalah tanaman industri pertanian yang dijadikan minuman hasil seduhan biji kopi yang telah disangrai dan dihaluskan menjadi bubuk. </p>
              <div className="flex flex-row items-center gap-4">
                <button className="px-5 py-2 bg-second text-white rounded-xl md:px-8 md:py-3 md:text-xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md transition-all">Tambahkan</button>
                <span className="text-second font-bold md:font-lg">Rp 49.000</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0">
            <div className="max-w-lg">
              <img src="./img/agriculture/salak_bali.jpg" alt="" className="h-auto max-w-full rounded-xl" />
            </div>
            <div className="flex flex-col gap-4 justify-center md:gap-10">
              <h1 className="font-bold text-3xl md:text-5xl">Salak</h1>
              <p className="text-justify md:text-xl">
                Salak adalah sejenis palma dengan buah yang biasa dimakan. Salak dikenal juga sebagai sala. Dalam bahasa Inggris disebut salak atau snake fruit, karena kulitnya mirip dengan sisik ular.
              </p>
              <div className="flex flex-row items-center gap-4">
                <button className="px-5 py-2 bg-second text-white rounded-xl md:px-8 md:py-3 md:text-xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md transition-all">Tambahkan</button>
                <span className="text-second font-bold md:font-lg">Rp 35.000</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
