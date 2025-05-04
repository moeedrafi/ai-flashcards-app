export const Features = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="px-8 md:px-16 lg:px-32">
        <div className="text-center mb-12">
          <h1 className="text-custom-black text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Features
          </h1>

          <p className="text-lg max-w-2xl mx-auto text-custom-black font-light">
            Our platform provides everything you need to succeed in your
            studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          <div className="p-6 bg-custom-secondary-20 rounded-lg shadow-md flex flex-col items-center text-center gap-5 transition-all duration-300 hover:shadow-lg">
            <img src="/brain.svg" className="w-12 h-12" alt="mobile" />
            <h3 className="text-xl font-semibold">
              Designed for Better Recall
            </h3>
            <p className="text-gray-500">
              Built with spaced repetition and memory science in mind—so you
              actually remember what you study.
            </p>
          </div>

          <div className="p-6 bg-custom-secondary-20 rounded-lg shadow-md flex flex-col items-center text-center gap-5 transition-all duration-300 hover:shadow-lg">
            <img
              src="/lightning.svg"
              className="w-12 h-12 mb-0"
              alt="lightning"
            />
            <h3 className="text-xl font-semibold">Lightning Fast Workflow</h3>
            <p className="text-gray-500">
              Drag, drop, done. Get learning in under 30 seconds.
            </p>
          </div>

          <div className="p-6 bg-custom-secondary-20 rounded-lg shadow-md flex flex-col items-center text-center gap-5 transition-all duration-300 hover:shadow-lg">
            <img src="/bullseye.svg" className="w-12 h-12" alt="bullseye" />
            <h3 className="text-xl font-semibold">Focused on What Matters</h3>
            <p className="text-gray-500">
              We skip the fluff. Only the key concepts, and summaries—pulled
              straight from your content.
            </p>
          </div>

          <div className="p-6 bg-custom-secondary-20 rounded-lg shadow-md flex flex-col items-center text-center gap-5 transition-all duration-300 hover:shadow-lg">
            <img src="/mobile.svg" className="w-12 h-12" alt="mobile" />
            <h3 className="text-xl font-semibold">Study Anywhere</h3>
            <p className="text-gray-500">
              Mobile-optimized interface for on-the-go review. Flashcards on
              your phone, tablet, or laptop—whenever you need them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
