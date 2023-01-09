import OfferCard from "./OfferCard";

const Offer = () => {
  const offerData = [
    {
      id: 1,
      img: "/assets/offer-1.png",
      title: "Customised Curriculum",
      desc: "Customised sessions and module for Basic, Intermediate and Advanced learners.",
    },
    {
      id: 2,
      img: "/assets/offer-2.png",
      title: "Experimental Learning ",
      desc: "Do not study English, rather consume and use it.",
    },
    {
      id: 3,
      img: "/assets/offer-3.png",
      title: "Shadowing Method",
      desc: "Think and speak in English rather than translating it from mother tongue.",
    },
  ];

  return (
    <section>
      <div className="w-11/12 max-w-[1200px] mx-auto my-20">
        <h2 className="font-poppins font-semibold text-[26px] md:text-h2 text-text1 md:leading-[52px] text-center mb-20">
          What we offer ?
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {offerData.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
