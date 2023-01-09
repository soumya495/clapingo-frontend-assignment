import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
import Offer from "../components/Home/Offer";
import Stats from "../components/Home/Stats";
import Work from "../components/Home/Work";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Offer />
      <Work />
    </>
  );
};

export default Home;
