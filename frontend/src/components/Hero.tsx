export const Hero = () => {
  return (
    <section className="py-20 md:py-28 max-w-3xl mx-auto">
      <div className="bg-custom-white flex flex-col items-center text-center space-y-6">
        <h1 className="text-custom-black text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
          Transform your Learning Experience
        </h1>

        <p className="text-lg md:text-xl max-w-2xl text-custom-black font-light">
          Our platform helps students of all sizes build beautiful websites,
          increase conversions, and grow their online presence with powerful
          tools and intuitive design.
        </p>

        <button className="bg-custom-primary px-8 py-3 text-custom-white rounded-lg hover:bg-custom-ascent cursor-pointer">
          Get started
        </button>

        <div className="w-full flex justify-center">
          <img
            src="/learning.svg"
            alt="learning"
            className="w-[600px] h-[300px] md:w-[1200px] md:h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};
