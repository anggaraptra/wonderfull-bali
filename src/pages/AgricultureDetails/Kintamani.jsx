import Navbar from '../../components/template/Navbar';
import Footer from '../../components/template/Footer';
import Section from '../../components/template/Section';
import ShippingCard from '../../components/ShippingCard';

export default function Kintamani() {
  return (
    <>
      <Navbar />
      <Section className="flex flex-col items-center justify-center bg-cover min-h-screen bg-blend-overlay bg-black/80 bg-[url(/img/agriculture/kintamani.jpg)] text-white dark:bg-black/90 transition-all">
        <div className="">
          <h1 className="font-bold text-5xl md:text-8xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Kintamani</h1>
        </div>
      </Section>
      <Section className="w-full mx-auto">
        <ShippingCard />
      </Section>
      <Section className="w-full p-10 pt-40 pb-28 dark:bg-gray-800 transition-all">
        <div className="flex flex-col gap-16 md:gap-20 px-12 dark:text-white transition-all">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0">
            <div className="max-w-lg">
              <img src="/img/agriculture/jeruk_kintamani.jpg" alt="" className="h-auto max-w-full rounded-xl" />
            </div>
            <div className="flex flex-col gap-4 justify-center md:gap-10">
              <h1 className="font-bold text-3xl md:text-5xl">Jeruk</h1>
              <p className="text-justify md:text-xl dark:text-gray-400">Jeruk adalah buah dari spesies citrus dalam famili Rutaceae. Istilah &quot;jeruk&quot; umumnya mengacu pada Citrus × sinensis yang juga disebut jeruk manis. </p>
              <div className="flex flex-row items-center gap-4">
                <button className="px-5 py-2 bg-second text-white rounded-xl md:px-8 md:py-3 md:text-xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md transition-all dark:bg-blue-500 dark:hover:bg-gray-700">Tambahkan</button>
                <span className="text-second font-bold md:font-lg dark:text-blue-500">Rp 31.000</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0">
            <div className="max-w-lg">
              <img src="/img/agriculture/kopi_bali.jpg" alt="" className="h-auto max-w-full rounded-xl" />
            </div>
            <div className="flex flex-col gap-4 justify-center md:gap-10">
              <h1 className="font-bold text-3xl md:text-5xl">Kopi</h1>
              <p className="text-justify md:text-xl dark:text-gray-400">Kopi atau kahwa adalah tanaman industri pertanian yang dijadikan minuman hasil seduhan biji kopi yang telah disangrai dan dihaluskan menjadi bubuk. </p>
              <div className="flex flex-row items-center gap-4">
                <button className="px-5 py-2 bg-second text-white rounded-xl md:px-8 md:py-3 md:text-xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md transition-all dark:bg-blue-500 dark:hover:bg-gray-700">Tambahkan</button>
                <span className="text-second font-bold md:font-lg dark:text-blue-500">Rp 49.000</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0">
            <div className="max-w-lg">
              <img src="/img/agriculture/salak_bali.jpg" alt="" className="h-auto max-w-full rounded-xl" />
            </div>
            <div className="flex flex-col gap-4 justify-center md:gap-10">
              <h1 className="font-bold text-3xl md:text-5xl">Salak</h1>
              <p className="text-justify md:text-xl dark:text-gray-400">
                Salak adalah sejenis palma dengan buah yang biasa dimakan. Salak dikenal juga sebagai sala. Dalam bahasa Inggris disebut salak atau snake fruit, karena kulitnya mirip dengan sisik ular.
              </p>
              <div className="flex flex-row items-center gap-4">
                <button className="px-5 py-2 bg-second text-white rounded-xl md:px-8 md:py-3 md:text-xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md transition-all dark:bg-blue-500 dark:hover:bg-gray-700">Tambahkan</button>
                <span className="text-second font-bold md:font-lg dark:text-blue-500">Rp 35.000</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
