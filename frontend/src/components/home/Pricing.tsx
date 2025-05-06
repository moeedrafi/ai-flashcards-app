import { Heading } from "@/components/Heading";

export const Pricing = () => {
  return (
    <section className="py-16">
      <div className="px-8 md:px-16 lg:px-32">
        {/* HEADING */}
        <Heading
          heading="Pricing"
          subHeading="Select the pricing that suits you best"
        />

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-lg md:max-w-5xl mx-auto">
          <div className="rounded-lg shadow-md flex flex-col transition-all duration-300 hover:shadow-lg">
            {/* PRICING */}
            <div className="bg-custom-black p-6 rounded-t-lg flex flex-col gap-3">
              <h3 className="text-4xl font-bold text-custom-white">Free</h3>
              <div>
                <span className="text-4xl font-bold text-custom-white">$0</span>{" "}
                <span className="font-light text-custom-white">USD/month</span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="bg-custom-secondary-20 p-6 flex flex-col gap-5 rounded-b-lg flex-1">
              <ul className="space-y-3 flex-1">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-custom-black text-custom-white h-5 w-5 text-xs font-medium mr-2 mt-0.5 rounded-full">
                    ✓
                  </span>
                  <span className="text-custom-black font-light">
                    Upload up to 1 PDF per day
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-custom-black text-custom-white h-5 w-5 text-xs font-medium mr-2 mt-0.5 rounded-full">
                    ✓
                  </span>
                  <span className="text-custom-black font-light">
                    Generate up to 15 flashcards
                  </span>
                </li>
              </ul>
              <button className="border border-custom-black text-custom-black rounded-full py-3 px-4 cursor-pointer hover:bg-custom-black hover:text-custom-white">
                Join for Free
              </button>
            </div>
          </div>

          <div className="mt-5 md:mt-0 rounded-lg shadow-md flex flex-col transition-all duration-300 hover:shadow-lg">
            {/* RECOMMENDED */}
            <div className="bg-sky-100 -mt-7 rounded-t-lg flex flex-col">
              <div className="text-custom-black text-center font-medium mb-1">
                Recommended
              </div>
            </div>

            {/* PRICING */}
            <div className="bg-custom-black p-6 flex flex-col gap-3">
              <h1 className="text-4xl font-bold text-custom-white">Pro</h1>
              <div>
                <span className="text-4xl font-bold text-custom-white">$5</span>{" "}
                <span className="font-light text-custom-white">USD/month</span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="bg-custom-secondary-20 p-6 flex flex-col gap-5 rounded-b-lg flex-1">
              <ul className="space-y-3 flex-1">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-custom-black text-custom-white h-5 w-5 text-xs font-medium mr-2 mt-0.5 rounded-full">
                    ✓
                  </span>
                  <span className="text-custom-black font-light">
                    Upload up to 10 PDFs/day
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-custom-black text-custom-white h-5 w-5 text-xs font-medium mr-2 mt-0.5 rounded-full">
                    ✓
                  </span>
                  <span className="text-custom-black font-light">
                    Generate up to 100 flashcards per file
                  </span>
                </li>
              </ul>
              <button className="bg-custom-black text-custom-white rounded-full py-3 px-4 cursor-pointer hover:bg-custom-black/80">
                Get Pro
              </button>
            </div>
          </div>

          <div className="rounded-lg shadow-md flex flex-col transition-all duration-300 hover:shadow-lg">
            {/* PRICING */}
            <div className="bg-custom-black p-6 rounded-t-lg flex flex-col gap-3">
              <h1 className="text-4xl font-bold text-custom-white">Premium</h1>
              <div>
                <span className="text-4xl font-bold text-custom-white">
                  $24
                </span>{" "}
                <span className="font-light text-custom-white">USD/month</span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="bg-custom-secondary-20 p-6 flex flex-col gap-5 flex-1">
              <ul className="space-y-3 flex-1">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-custom-black text-custom-white h-5 w-5 text-xs font-medium mr-2 mt-0.5 rounded-full">
                    ✓
                  </span>
                  <span className="text-custom-black font-light">
                    Unlimited uploads
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-custom-black text-custom-white h-5 w-5 text-xs font-medium mr-2 mt-0.5 rounded-full">
                    ✓
                  </span>
                  <span className="text-custom-black font-light">
                    Unlimited flashcards per file
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-custom-black text-custom-white h-5 w-5 text-xs font-medium mr-2 mt-0.5 rounded-full">
                    ✓
                  </span>
                  <span className="text-custom-black font-light">
                    AI quiz mode (coming soon)
                  </span>
                </li>
              </ul>
              <button className="border border-custom-black text-custom-black rounded-full py-3 px-4 cursor-pointer hover:bg-custom-black hover:text-custom-white">
                Get Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
