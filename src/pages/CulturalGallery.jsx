import Navbar from '../components/template/Navbar';
import Footer from '../components/template/Footer';
import Section from '../components/template/Section';

export default function CulturalGallery() {
  return (
    <>
      <Navbar />
      <Section className="w-full">
        <div className="flex h-80 bg-cover bg-blend-overlay bg-black/80 bg-[url(./img/cultural/culture_header.jpg)] text-white ">
          <h1 className="place-content-end font-bold text-7xl py-20 px-16">Cultural Gallery</h1>
        </div>
      </Section>
      <Section className="min-h-screen p-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="grid grid-rows-2 md:w-3/5">
            <div className="flex flex-col gap-5">
              <p>
                Kekayaan kebudayaan Bali menjadi daya tarik tersendiri bagi wisatawan untuk mengunjungi Pulau Dewata selain keindahan alamnya. Kebudayaan Bali adalah perpaduan harmonis antara tradisi Hindu yang kental, seni yang beragam,
                serta adat istiadat yang telah diwariskan turun-temurun.
              </p>
              <p>
                Kebudayaan Bali dapat didefinisikan sebagai keseluruhan dari sistem nilai, perilaku, dan hasil karya manusia Bali yang terbentuk dari proses interaksi manusia Bali dengan lingkungannya. Dari upacara keagamaan yang sakral
                hingga kesenian yang penuh warna. Setiap aspek kebudayaan menawarkan pengalaman yang unik dan tak terlupakan bagi setiap pengunjung baik lokal maupun asing.
              </p>
              <img src="" alt="" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="">
                <h1>Keindahan Budaya Bali</h1>
                <span></span>
              </div>
              <p></p>
              <p></p>
              <div className="">
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <p></p>
            </div>
          </div>
          <div className="grid grid-rows-2 md:w-2/5">
            <div className="">
              <img src="" alt="map" />
            </div>
            <div className="flex flex-col">
              <div className="">
                <span>Budaya Lain</span>
                <a href="">Tampilkan</a>
              </div>
              <div className="flex flex-col p-5 gap-4 md:flex-col md:p-0">
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/upacara_adat.jpg)] bg-center bg-cover bg-blend-overlay bg-black/50 place-content-between items-start text-white">
                  <h1 className="ps-10 p-6 text-3xl font-bold">Tradisi</h1>
                  <button className="ms-10 mb-8 text-md px-5 py-3 bg-[#1da868] rounded-2xl">View More</button>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/upacara_adat.jpg)] bg-center bg-cover bg-blend-overlay bg-black/50 place-content-between items-start text-white">
                  <h1 className="ps-10 p-6 text-3xl font-bold">Tradisi</h1>
                  <button className="ms-10 mb-8 text-md px-5 py-3 bg-[#1da868] rounded-2xl">View More</button>
                </div>
                <div className="flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/upacara_adat.jpg)] bg-center bg-cover bg-blend-overlay bg-black/50 place-content-between items-start text-white">
                  <h1 className="ps-10 p-6 text-3xl font-bold">Tradisi</h1>
                  <button className="ms-10 mb-8 text-md px-5 py-3 bg-[#1da868] rounded-2xl">View More</button>
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
