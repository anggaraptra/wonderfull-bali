import Navbar from '../../components/template/Navbar';
import Footer from '../../components/template/Footer';
import Section from '../../components/template/Section';
import Iframe from 'react-iframe';
import { CiLocationOn } from 'react-icons/ci';

export default function Culture() {
  return (
    <>
      <Navbar />
      <Section className="w-full">
        <div className="flex h-80 bg-cover bg-blend-overlay bg-black/80 bg-[url(./img/cultural/canang.jpg)] text-white ">
          <h1 className="place-content-end font-bold text-5xl px-10 py-20 md:text-7xl md:px-16 drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Kebudayaan</h1>
        </div>
      </Section>
      <Section className="p-10 pt-12 pb-20">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-5 md:w-3/4">
            <div className="flex flex-col gap-5">
              <p className="text-justify">
                Pesona keindahan alam di Pulau Bali memang sudah tidak perlu diragukan lagi. Sepanjang pulau kita dapat menikmati keindahan alam yang terbentang, mulai dari gunung, pantai bahkan danau. Namun, ada hal unik yang membuat Bali
                menjadi lebih istimewa, yaitu pelestarian budaya yang sangat terasa pada sendi kehidupan masyarakatnya.
              </p>
              <p className="text-justify">
                Berkunjung ke Bali terasa lebih spesial jika kita berhasil mendapatkan momen seru dengan menyaksikan upacara adat di Bali. Umumnya upacara adat tersebut dapat disaksikan oleh wisatawan untuk sekadar menyaksikan atau
                mendokumentasikannya.
              </p>
              <img src="./img/cultural/ngaben.jpg" className="rounded-xl drop-shadow-xl shadow-lg cursor-pointer transition-all" alt="" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-medium">Upacara Ngaben</h1>
                <div className="flex gap-2 items-center">
                  <span>
                    <CiLocationOn />
                  </span>
                  <span className="text-second font-bold">Bali, Indonesia</span>
                </div>
              </div>
              <p className="text-justify">
                Pada dasarnya, Upacara Ngaben merupakan ritual yang dipercaya oleh masyarakat Pulau Dewata untuk mengembalikan roh orang yang sudah meninggal kembali ke alam asalnya dengan lebih cepat dibandingkan dengan penguburan biasa
                lewat tanah.
              </p>
              <p className="text-justify">
                Berdasarkan etimologi, kata “ngaben” sendiri konon berasal dari kata “ngabu” yang bisa diartikan sebagai “menjadi abu”. Hal ini tentunya sesuai dengan prinsip dasar Upacara Ngaben, di mana mayat seseorang akan dibakar sampai
                tidak tersisa apapun dari badannya dan akan menjadi abu. Masyarakat Pulau Bali, yang mayoritas merupakan umat Hindu, punya kepercayaan bahwa terdapat 5 komponen untuk membentuk manusia.
              </p>
              <div className="flex flex-col w-full gap-4 justify-center items-center md:grid md:grid-cols-2">
                <img src="./img/cultural/ngaben_2.jpg" className="rounded-xl drop-shadow-xl shadow-lg cursor-pointer saturate-50 hover:saturate-100 transition-all" alt="" />
                <img src="./img/cultural/ngaben_3.jpg" className="rounded-xl drop-shadow-xl shadow-lg cursor-pointer saturate-50 hover:saturate-100 transition-all" alt="" />
              </div>
              <p className="text-justify">
                Ketika seseorang meninggal, Atma yang dimiliki seseorang masih akan tersimpan di dalam tubuh seseorang. Upacara Ngaben ini diadakan oleh masyarakat dengan tujuan untuk membebaskan Atma yang belum bisa keluar dari tubuh
                mereka, agar bisa kembali ke Yang Maha Kuasa. Setelah itu, Atma dipercaya akan bereinkarnasi suatu saat nanti.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 md:w-2/5">
            <div className="text-center">
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.40562037026!2d115.14187046350995!3d-8.672504757430751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9374a!2sDenpasar%2C%20Kota%20Denpasar%2C%20Bali!5e0!3m2!1sid!2sid!4v1723537962569!5m2!1sid!2sid"
                width="400"
                height="300"
                style="border:0;"
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl drop-shadow-xl shadow-lg"
              ></Iframe>
            </div>
            <div className="flex gap-3 flex-col">
              <div className="flex justify-between">
                <span className="font-medium">Kebudayaan Lain</span>
                <a href="" className="text-second hover:text-green-700  hover:drop-shadow-xl transition-all">
                  Tampilkan
                </a>
              </div>
              <div className="flex flex-col p-5 gap-4 md:grid md:grid-rows-4 md:flex-col md:p-0">
                <div className="flex flex-col h-64 rounded-lg bg-[url(./img/cultural/upacara_melasti.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-between items-start text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <div className="flex flex-col ps-10 p-6 gap-1 items-start">
                    <h1 className="text-3xl font-bold drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Melasti</h1>
                    <span className="text-xs">Bali, Indonesia</span>
                  </div>
                  <a href="/craft" className="ms-10 mb-8 text-md px-5 py-3 bg-second rounded-2xl hover:bg-green-700 hover:drop-shadow-xl transition-all">
                    View More
                  </a>
                </div>
                <div className="flex flex-col h-64 rounded-lg bg-[url(./img/cultural/galungan.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-between items-start text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <div className="flex flex-col ps-10 p-6 gap-1 items-start">
                    <h1 className="text-3xl font-bold drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Galungan</h1>
                    <span className="text-xs">Bali, Indonesia</span>
                  </div>
                  <a href="/culture" className="ms-10 mb-8 text-md px-5 py-3 bg-second rounded-2xl hover:bg-green-700 hover:drop-shadow-xl transition-all">
                    View More
                  </a>
                </div>
                <div className="flex flex-col h-64 rounded-lg bg-[url(./img/cultural/odalan.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-between items-start text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <div className="flex flex-col ps-10 p-6 gap-1 items-start">
                    <h1 className="text-3xl font-bold drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Odalan</h1>
                    <span className="text-xs">Bali, Indonesia</span>
                  </div>
                  <a href="" className="ms-10 mb-8 text-md px-5 py-3 bg-second rounded-2xl hover:bg-green-700 hover:drop-shadow-xl transition-all">
                    View More
                  </a>
                </div>
                <div className="flex flex-col h-64 rounded-lg bg-[url(./img/cultural/metatah.jpg)] bg-center bg-cover bg-blend-overlay bg-black/70 place-content-between items-start text-white hover:bg-black/50 cursor-pointer transition-all drop-shadow-xl shadow-lg">
                  <div className="flex flex-col ps-10 p-6 gap-1 items-start">
                    <h1 className="text-3xl font-bold drop-shadow-[1px_4px_2px_rgba(0,0,0,0.8)]">Metatah</h1>
                    <span className="text-xs">Bali, Indonesia</span>
                  </div>
                  <a href="" className="ms-10 mb-8 text-md px-5 py-3 bg-second rounded-2xl hover:bg-green-700 hover:drop-shadow-xl transition-all">
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
