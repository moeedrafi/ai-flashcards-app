export const Hero = () => {
  return (
    <section className="py-20 md:py-28 max-w-3xl mx-auto">
      <div className="bg-[#FFF9F9] flex flex-col items-center text-center space-y-8">
        <h1 className="text-[#00252C] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
          Transform your Learning Experience
        </h1>

        <p className="text-lg md:text-xl max-w-2xl text-[#00252C] font-light">
          Our platform helps students of all sizes build beautiful websites,
          increase conversions, and grow their online presence with powerful
          tools and intuitive design.
        </p>

        <button className="bg-[#00A7C5] px-8 py-3 text-[#FFF9F9] rounded-lg hover:bg-[#3DA9FC] cursor-pointer">
          Get started
        </button>

        <div className="w-full">
          <img
            src="/learning.svg"
            alt="learning"
            className="w-[1200px] h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};
