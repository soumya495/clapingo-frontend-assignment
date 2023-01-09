import WorkCard from "./WorkCard";

const Work = () => {
  const workData = [
    {
      id: 1,
      title: "1. Create Account",
      desc: "Create your account using phone number or email and take a free trial at ₹1.",
    },
    {
      id: 2,
      title: "2. Subscribe",
      desc: "Choose your preferred duration and select subscription package for your sessions. ",
    },
    {
      id: 3,
      title: "3. Select time slot",
      desc: "Subscribe & select any time slot between 10 AM to 12 midnight.",
    },
    {
      id: 4,
      title: "4. You are done",
      desc: "That’s it! Start practicing and reach your learning goal in speaking.",
    },
  ];

  return (
    <section>
      <div className="w-11/12 max-w-[1200px] mx-auto my-20">
        <h2 className="font-poppins font-semibold text-[26px] md:text-h2 text-text1 md:leading-[52px] text-center lg:text-left mb-20">
          How it works ?
        </h2>
        <div className="relative lg:hidden">
          <div className="-z-[1] bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] aspect-square blur-3xl"></div>
          <img
            src="/assets/subscribe.png"
            alt="demo-feature"
            className="max-w-[235px] mx-auto"
          />
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[270px] h-[175px] blur-md"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(251, 251, 253, 0) -50%, #FBFBFD 74.21%)",
            }}
          ></div>
        </div>
        <div className="flex justify-between md:space-x-6 space-y-12 items-center md:space-y-0 mt-20 lg:mt-0 flex-col md:flex-row">
          <div className="flex flex-col justify-center md:justify-between space-y-12">
            {workData.slice(0, 2).map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
          <div className="relative hidden lg:block">
            <div className="-z-[1] bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] aspect-square blur-3xl"></div>
            <img
              src="/assets/subscribe.png"
              alt="demo-feature"
              className="max-w-[235px]"
            />
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[270px] h-[175px] blur-md"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(251, 251, 253, 0) -50%, #FBFBFD 74.21%)",
              }}
            ></div>
          </div>
          <div className="flex flex-col justify-center md:justify-between space-y-12">
            {workData.slice(2, 4).map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
