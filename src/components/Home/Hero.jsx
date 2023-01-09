const Hero = () => {
  return (
    <section>
      <div className="w-11/12 max-w-[1200px] mx-auto flex items-center justify-between space-x-10 my-32 xl:my-0 xl:min-h-[calc(100vh-90px)]">
        {/* text section */}
        <div className="w-full max-w-[687px] mx-auto lg:mx-[unset] lg:w-[calc(100%-283px)] xl:w-[calc(100%-483px)]">
          <h1 className="font-poppins text-text1 font-bold text-4xl md:text-h1 md:leading-[68px] text-center lg:text-left">
            Hone your english speaking skills over{" "}
            <span className="text-primary">one-on-one</span> video call
          </h1>
          <p className="font-poppins text-text1 text-md font-medium my-8 text-center lg:text-left">
            Practice english conversation with excellent communuicators across
            the country and speak like a PRO 😎.
          </p>
          <div className="flex items-center justify-center lg:justify-start space-y-6 md:space-y-0 md:space-x-6 flex-col md:flex-row">
            <button className="flex items-center bg-cta space-x-1 px-6 py-[10px] rounded-full hover:drop-shadow-lg ">
              <p className="font-poppins text-white text-md">Book a trial</p>
            </button>
            <button className="flex items-center outline outline-2 outline-cta space-x-1 px-6 py-[10px] rounded-full hover:drop-shadow-lg ">
              <p className="font-poppins text-cta text-md">Download our app</p>
            </button>
          </div>
        </div>
        {/* graphic section */}
        <div className="w-[283px] xl:w-[483px] h-[286px] border border-black rounded-[30px] hidden lg:block"></div>
      </div>
    </section>
  );
};

export default Hero;
