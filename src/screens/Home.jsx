import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
import Offer from "../components/Home/Offer";
import Stats from "../components/Home/Stats";
import Work from "../components/Home/Work";

const Home = () => {
  const navigate = useNavigate();

  function isLoggedIn() {
    const localData = localStorage.getItem("user");
    return localData !== null;
  }

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/profile");
    }
  }, []);

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
