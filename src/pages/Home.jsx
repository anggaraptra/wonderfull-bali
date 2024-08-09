import NavbarHero from '../components/template/NavbarHero';
import Footer from '../components/template/Footer';
import Section from '../components/template/Section';

export default function Home() {
  return (
    <>
      <NavbarHero />
      <Section className="bg-[#295943] text-white">
        <div className="container mx-auto p-6">
          <div className="flex flex-wrap -mx-4 py-20">
            <div className="flex w-full lg:w-1/2 px-4 gap-4 mb-10 md:mb-0 items-center justify-center">
              <div className="w-56 h-96">
                <img src="./img/homepage/sanur_bali.jpg" alt="culture" className="object-cover w-full h-full rounded-xl" />
              </div>
              <div className="w-40 h-72">
                <img src="./img/homepage/kintamani_bali.jpg" alt="culture" className="object-cover w-full h-full rounded-xl" />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 px-4 place-content-center items-center gap-8">
              <h1 className="text-4xl font-bold">Know everything about Bali</h1>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec purus eget sapien fermentum ultricies. Integer ac mi nec elit dictum ultrices. Sed nec dolor at dolor pharetra pharetra. Nullam ac velit nec eros ultricies
                volutpat. Sed in justo at metus fermentum ultricies. Sed vestibulum, odio ac tincidunt ultricies, odio odio ultricies nunc, nec varius odio sem ac elit. Vestibulum nec odio nec elit dictum ultrices. Sed nec dolor at dolor
                pharetra pharetra. Nullam ac velit nec eros ultricies volutpat. Sed in justo at metus fermentum ultricies.
              </p>
              <div className="flex justify-center gap-2">
                <input type="text" className="w-96 rounded-lg px-3 py-2 font-normal text-black outline outline-0" placeholder="Enter your email..." />
                <button className="bg-white text-black px-4 py-2 uppercase font-bold rounded-lg">Register</button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-white">
        <div className="container mx-auto p-6 mb-20">
          <div className="flex flex-col items-center font-bold pt-8 pb-10 md:pt-16 md:pb-20">
            <span className="text-[#1da868] text-sm">Top Destination</span>
            <h1 className="text-xl md:text-3xl">Discover More</h1>
          </div>
          <div className="md:px-10 flex flex-col gap-16 font-bold">
            <div className="flex flex-col gap-8">
              <h1 className="text-lg md:text-xl border-b-4 w-40 border-[#1da868]">Cultural Gallery</h1>
              <div className="flex flex-row gap-4">
                <div className={`flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/upacara_adat.jpg)] bg-center bg-cover bg-blend-overlay bg-black/50 place-content-end text-white`}>
                  <h1 className="text-center p-6 text-2xl">Tradisi</h1>
                </div>
                <div className={`flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/tarian.jpg)] bg-center bg-cover bg-blend-overlay bg-black/50 place-content-end text-white`}>
                  <h1 className="text-center p-6 text-2xl">Tari Tarian</h1>
                </div>
                <div className={`flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/kerajinan.jpg)] bg-center bg-cover bg-blend-overlay bg-black/50 place-content-end text-white`}>
                  <h1 className="text-center p-6 text-2xl">Kerajinan</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-lg md:text-xl border-b-4 w-20 border-[#1da868]">Tourism</h1>
              <div className="flex flex-row gap-4">
                <div className={`flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/wisata.jpg)] bg-center bg-cover bg-blend-overlay bg-black/50 place-content-end text-white`}>
                  <h1 className="text-center p-6 text-2xl">Tempat</h1>
                </div>
                <div className={`flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/swing_bali.jpg)] bg-center bg-cover bg-blend-overlay bg-black/50 place-content-end text-white`}>
                  <h1 className="text-center p-6 text-2xl">Wahana</h1>
                </div>
                <div className={`flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/pantai.jpg)] bg-center bg-cover bg-blend-overlay bg-black/50 place-content-end text-white`}>
                  <h1 className="text-center p-6 text-2xl">Pantai</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-lg md:text-xl border-b-4 w-28 border-[#1da868]">Agriculture</h1>
              <div className="flex flex-row gap-4">
                <div className={`flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/padi.jpg)] bg-center bg-cover bg-blend-overlay bg-black/50 place-content-end text-white`}>
                  <h1 className="text-center p-6 text-2xl">Padi</h1>
                </div>
                <div className={`flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/pohon_kopi.jpg)] bg-center bg-cover bg-blend-overlay bg-black/50 place-content-end text-white`}>
                  <h1 className="text-center p-6 text-2xl">Kopi</h1>
                </div>
                <div className={`flex flex-col h-80 w-full rounded-lg bg-[url(./img/homepage/jeruk.jpg)] bg-center bg-cover bg-blend-overlay bg-black/50 place-content-end text-white`}>
                  <h1 className="text-center p-6 text-2xl">Jeruk</h1>
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
