import Navbar from '../../components/template/Navbar';
import Footer from '../../components/template/Footer';
import Section from '../../components/template/Section';
import ShippingCard from '../../components/ShippingCard';

export default function Gianyar() {
  return (
    <>
      <Navbar />
      <Section className="flex flex-col items-center justify-center bg-cover bg-bottom h-[40rem] bg-blend-overlay bg-black/70 bg-[url(/img/agriculture/gianyar.webp)] text-white dark:bg-black/80 transition-all">
        <h1 className="font-bold text-5xl md:text-8xl drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Gianyar</h1>
      </Section>
      <Section className="w-full mx-auto">
        <ShippingCard />
      </Section>
      <Section className="w-full p-10 pt-40 pb-28 dark:bg-gray-800 transition-all">
        <div className="container mx-auto flex flex-col gap-16 md:gap-20 px-12 dark:text-white transition-all">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0">
            <div className="max-w-lg">
              <img src="/img/agriculture/cabai_merah.webp" alt="" className="h-auto max-w-full rounded-xl" />
            </div>
            <div className="flex flex-col gap-4 justify-center md:gap-10">
              <h3 className="font-bold text-3xl md:text-5xl">Cabai Merah</h3>
              <article className="text-justify md:text-xl dark:text-gray-400">Cabai adalah buah dan tumbuhan anggota genus Capsicum. Buahnya dapat digolongkan sebagai sayuran maupun bumbu, tergantung bagaimana pemanfaatannya.</article>
              <div className="flex flex-row items-center gap-4">
                <button className="px-5 py-2 bg-second text-white rounded-xl md:px-8 md:py-3 md:text-xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md dark:bg-blue-500 dark:hover:bg-gray-700 transition-all">Tambahkan</button>
                <span className="text-second font-bold md:font-lg dark:text-blue-500">Rp 55.000</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0">
            <div className="max-w-lg">
              <img src="/img/agriculture/kelapa.webp" alt="" className="h-auto max-w-full rounded-xl" />
            </div>
            <div className="flex flex-col gap-4 justify-center md:gap-10">
              <h3 className="font-bold text-3xl md:text-5xl">Kelapa</h3>
              <article className="text-justify md:text-xl dark:text-gray-400">
                Kelapa atau nyiur adalah anggota tunggal dalam genus Cocos dari Arecaceae. Arti kata kelapa dapat merujuk pada keseluruhan pohon kelapa, biji, atau buah, yang adalah pohon.
              </article>
              <div className="flex flex-row items-center gap-4">
                <button className="px-5 py-2 bg-second text-white rounded-xl md:px-8 md:py-3 md:text-xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md transition-all dark:bg-blue-500 dark:hover:bg-gray-700">Tambahkan</button>
                <span className="text-second font-bold md:font-lg dark:text-blue-500">Rp 14.000</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0">
            <div className="max-w-lg">
              <img src="/img/agriculture/jagung.webp" alt="" className="h-auto max-w-full rounded-xl" />
            </div>
            <div className="flex flex-col gap-4 justify-center md:gap-10">
              <h3 className="font-bold text-3xl md:text-5xl">Jagung</h3>
              <article className="text-justify md:text-xl dark:text-gray-400">
                Jagung adalah salah satu tanaman pangan penghasil karbohidrat yang terpenting di dunia. Bulir jagung adalah salah satu pangan pokok, bagi beberapa daerah di Indonesia.
              </article>
              <div className="flex flex-row items-center gap-4">
                <button className="px-5 py-2 bg-second text-white rounded-xl md:px-8 md:py-3 md:text-xl hover:bg-green-700 hover:drop-shadow-lg hover:shadow-md transition-all dark:bg-blue-500 dark:hover:bg-gray-700">Tambahkan</button>
                <span className="text-second font-bold md:font-lg dark:text-blue-500">Rp 10.000</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
