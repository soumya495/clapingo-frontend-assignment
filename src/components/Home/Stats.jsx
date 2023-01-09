import StatsCard from "./StatsCard";

const Stats = () => {
  const statsData = [
    {
      id: 1,
      title: "50K",
      desc: "Mobile Downloads",
    },
    {
      id: 2,
      title: "80K",
      desc: "Happy Learners",
    },
    {
      id: 3,
      title: "53K",
      desc: "Sessions per month",
    },
    {
      id: 4,
      title: "200",
      desc: "Speakers around the globe",
    },
  ];

  return (
    <section className="bg-gradient-to-b lg:bg-gradient-to-r from-[#00D2FF] to-[#00d2ff00] bg-cover lg:bg-530 bg-no-repeat">
      <div className="w-11/12 max-w-[1200px] mx-auto flex space-y-20 lg:space-y-0 lg:space-x-10 items-center justify-between py-20 flex-col lg:flex-row">
        {/* stats cards */}
        <div className="flex flex-col space-y-4 md:space-y-8">
          <div className="flex items-center space-x-4 md:space-x-8 ml-4">
            {statsData.slice(0, 2).map((stat) => (
              <StatsCard key={stat.id} stat={stat} />
            ))}
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 ml-8 md:ml-12">
            {statsData.splice(2, 3).map((stat) => (
              <StatsCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
        {/* text content */}
        <div className="max-w-[510px] mx-auto lg:mx-[unset]">
          <p className="font-poppins text-text1 text-center lg:text-left lg:text-primary text-sm font-medium">
            Book a trial
          </p>
          <h2 className="font-poppins font-semibold text-[26px] md:text-h2 text-text1 md:leading-[52px] text-center lg:text-left">
            Start your English speaking journey today!
          </h2>
          <p className="font-poppins my-4 max-w-[410px] text-center lg:text-left mx-auto lg:mx-[unset]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            pellentesque praesent vitae sit sagittis venenatis.
          </p>
          <button className="flex items-center bg-cta space-x-1 px-6 py-[10px] rounded-full hover:drop-shadow-lg mx-auto lg:mx-[unset]">
            <p className="font-poppins text-white text-md">Book a trial</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
