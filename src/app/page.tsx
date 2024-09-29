
import Navigation from "./components/navigation/Navigation";
import SeachBar from "./components/seachBar/SeachBar";
import Banner from "./components/banner/Banner";
import Info from "./components/info/Info";
import Locations from "./components/locations/Locations";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main>
      <section>
        <Navigation />
        <SeachBar />
        <Banner />
        <Info />
        <Locations />
        <Footer />
      </section>
    </main>
  );
}