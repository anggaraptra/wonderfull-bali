import Navbar from '../components/template/Navbar';
import Footer from '../components/template/Footer';
import Section from '../components/template/Section';

export default function Tourism() {
  return (
    <>
      <Navbar />
      <Section className="w-full">
        <div className="flex h-80 bg-cover bg-blend-overlay bg-black/80 bg-[url(./img/tourism/tourism_header.jpg)] text-white">
          <h1 className="place-content-end font-bold text-7xl py-20 px-16">Tourism</h1>
        </div>
      </Section>
      <Section className="min-h-screen p-10">
        <div className="flex"></div>
      </Section>
      <Footer />
    </>
  );
}
