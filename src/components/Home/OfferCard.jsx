const OfferCard = ({ offer }) => {
  return (
    <div className="w-11/12 max-w-[380px] aspect-square rounded-xl overflow-hidden relative">
      <img src={offer.img} alt={offer.title} />
      <div
        className="absolute -bottom-1 w-full h-[45%] md:h-[35%] backdrop-blur-xl px-8 py-5"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(196, 196, 196, 0) -14.34%, #C4C4C4 116.43%)",
        }}
      >
        <p className="font-poppins font-semibold text-[20px] text-cyann">
          {offer.title}
        </p>
        <p className="font-poppins text-sm font-medium text-white my-1 leading-[21px]">
          {offer.desc}
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
