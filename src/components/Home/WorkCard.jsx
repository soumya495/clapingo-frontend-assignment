const WorkCard = ({ work }) => {
  return (
    <div className="bg-white border border-1 min-h-[150px] border-gray-300 max-w-[370px] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] rounded-lg p-6">
      <p className="font-poppins font-semibold text-text1 text-xl">
        {work.title}
      </p>
      <p className="font-poppins text-sm mt-2 font-medium text-gray-500 pr-12">
        {work.desc}
      </p>
    </div>
  );
};

export default WorkCard;
