import Navbar from '../components/template/Navbar';
import Footer from '../components/template/Footer';
import GalleryHome from '../components/GalleryHome';

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Homepage</h1>
      <h1 className="text-center">Discover More</h1>
      <h1 className="pl-6">Cultural Gallery</h1>
      <GalleryHome />
      <h1 className="pl-6">Agriculture</h1>
      <GalleryHome />
      <h1 className="pl-6">Tourism</h1>
      <GalleryHome />
      <Footer />
    </>
  );
}
