import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
import Offer from "../components/Home/Offer";
import Stats from "../components/Home/Stats";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Offer />
    </>
  );
};

export default Home;
