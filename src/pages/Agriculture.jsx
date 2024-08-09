import Navbar from '../components/template/Navbar';
import Footer from '../components/template/Footer';
import Section from '../components/template/Section';

export default function Agriculture() {
  return (
    <>
      <Navbar />
      <Section className="flex h-80 bg-cover min-h-screen bg-blend-overlay bg-black/80 bg-[url(./img/agriculture/agri_header.jpg)] text-white">
        <div className="flex flex-col">
          <div className="py-44 px-20">
            <h1 className="font-bold text-7xl mb-10">Agriculture & Organic Market</h1>
            <button className="p-4 px-8 bg-[#1da868] rounded-xl">Buy Now</button>
          </div>
        </div>
      </Section>
      <Section className="min-h-screen p-10">
        <div className="flex"></div>
      </Section>
      <Footer />
    </>
  );
}
