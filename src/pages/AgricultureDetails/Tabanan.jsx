import Navbar from '../../components/template/Navbar';
import Footer from '../../components/template/Footer';
import Section from '../../components/template/Section';
import ShippingCard from '../../components/ShippingCard';

export default function Tabanan() {
  return (
    <>
      <Navbar />
      <Section className="flex flex-col items-center justify-center bg-cover min-h-screen bg-blend-overlay bg-black/70 bg-[url(./img/agriculture/tabanan.jpg)] text-white dark:bg-black/80 transition-all">
        <div className="">
          <h1 className="font-bold text-5xl md:text-8xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Tabanan</h1>
        </div>
      </Section>
      <Section className="w-full mx-auto">
        <ShippingCard />
      </Section>
      <Section className="w-full p-10 pt-40 pb-28 dark:bg-gray-800 transition-all">
        <div className="flex flex-col gap-16 md:gap-20 dark:text-white transition-all">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0">
            <div className="max-w-lg">
              <img src="./img/agriculture/beras.jpg" alt="" className="h-auto max-w-full rounded-xl" />
            </div>
            <div className="flex flex-col gap-4 justify-center md:gap-10">
              <h1 className="font-bold text-3xl md:text-5xl">Beras</h1>
              <p className="text-justify md:text-xl dark:text-gray-400">
                Beras adalah bagian bulir padi yang telah dipisah dari sekam. Sekam secara anatomi disebut &apos;palea&apos; dan &apos;lemma&apos;. Pada salah satu tahap pemrosesan hasil panen padi, gabah ditumbuk dengan lesung atau
                digiling sehingga bagian luarnya terlepas dari isinya.
              </p>
              <div className="flex flex-row items-center gap-4">
                <button className="px-5 py-2 bg-second text-white rounded-xl md:px-8 md:py-3 md:text-xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">Tambahkan</button>
                <span className="text-second font-bold md:font-lg dark:text-blue-500">Rp 120.000</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0">
            <div className="max-w-lg">
              <img src="./img/agriculture/stroberi.jpg" alt="" className="h-auto max-w-full rounded-xl" />
            </div>
            <div className="flex flex-col gap-4 justify-center md:gap-10">
              <h1 className="font-bold text-3xl md:text-5xl">Stroberi</h1>
              <p className="text-justify md:text-xl dark:text-gray-400">
                Stroberi atau tepatnya stroberi kebun adalah sebuah varietas stroberi yang paling banyak dikenal di dunia. Dalam genus Fragaria, buah ini berada dalam keluarga Rosaceae
              </p>
              <div className="flex flex-row items-center gap-4">
                <button className="px-5 py-2 bg-second text-white rounded-xl md:px-8 md:py-3 md:text-xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">Tambahkan</button>
                <span className="text-second font-bold md:font-lg dark:text-blue-500">Rp 66.000</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0">
            <div className="max-w-lg">
              <img src="./img/agriculture/coklat.jpg" alt="" className="h-auto max-w-full rounded-xl" />
            </div>
            <div className="flex flex-col gap-4 justify-center md:gap-10">
              <h1 className="font-bold text-3xl md:text-5xl">Kakao</h1>
              <p className="text-justify md:text-xl dark:text-gray-400">
                Kakao adalah biji dari pohon Theobroma cacao yang berasal dari Amerika Selatan. Biji kakao yang telah melalui proses fermentasi diolah menjadi produk yang dikenal sebagai cokelat.
              </p>
              <div className="flex flex-row items-center gap-4">
                <button className="px-5 py-2 bg-second text-white rounded-xl md:px-8 md:py-3 md:text-xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">Tambahkan</button>
                <span className="text-second font-bold md:font-lg dark:text-blue-500">Rp 53.000</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
