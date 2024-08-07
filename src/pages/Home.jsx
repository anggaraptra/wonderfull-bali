import NavbarHero from '../components/template/NavbarHero';
import Footer from '../components/template/Footer';
import ImageCard from '../components/ImageCard';
import Section from '../components/template/Section';

export default function Home() {
  return (
    <>
      <NavbarHero />
      <Section className="bg-[#295943] text-white">
        <div className="container mx-auto p-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <h1 className="text-4xl font-bold">Welcome to the Cultural Gallery</h1>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec purus eget sapien fermentum ultricies. Integer ac mi nec elit dictum ultrices. Sed nec dolor at dolor pharetra pharetra. Nullam ac velit nec eros ultricies
                volutpat. Sed in justo at metus fermentum ultricies. Sed vestibulum, odio ac tincidunt ultricies, odio odio ultricies nunc, nec varius odio sem ac elit. Vestibulum nec odio nec elit dictum ultrices. Sed nec dolor at dolor
                pharetra pharetra. Nullam ac velit nec eros ultricies volutpat. Sed in justo at metus fermentum ultricies.
              </p>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img src="./img/Header.png" alt="culture" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </Section>
      <ImageCard />
      <Footer />
    </>
  );
}
