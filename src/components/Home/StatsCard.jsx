const StatsCard = ({ stat }) => {
  return (
    <div className="bg-statBg min-w-[150px] md:min-w-[200px] py-3 px-4 rounded-md">
      <p className="font-poppins text-white text-center font-medium text-[32px]">
        {stat.title}
        <span className="text-primary">+</span>
      </p>
      <p className="font-poppins text-center text-white text-sm">{stat.desc}</p>
    </div>
  );
};

export default StatsCard;
