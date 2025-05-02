export const Pricing = () => {
  return (
    <section className="py-16">
      <div className="px-8 md:px-16 lg:px-32">
        <div className="text-center mb-12">
          <h1 className="text-custom-black text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Pricing
          </h1>
          <p className="text-custom-black font-light text-lg">
            Select the pricing that suits you best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="rounded-lg shadow-md flex flex-col transition-all duration-300 hover:shadow-lg">
            <div className="bg-custom-black p-6 rounded-t-lg flex flex-col gap-3">
              <h3 className="text-4xl font-bold text-custom-white">Free</h3>
              <div>
                <span className="text-4xl font-bold text-custom-white">$0</span>{" "}
                <span className="font-light text-custom-white">USD/month</span>
              </div>
            </div>

            <div className="bg-custom-secondary-20 p-6 flex flex-col gap-5 rounded-b-lg">
              <p className="text-custom-black font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
                aspernatur!
              </p>
              <button className="border border-custom-black text-custom-black rounded-full py-3 px-4 cursor-pointer hover:bg-custom-black hover:text-custom-white">
                Join for Free
              </button>
            </div>
          </div>

          <div className="rounded-lg shadow-md flex flex-col transition-all duration-300 hover:shadow-lg">
            <div className="bg-sky-100 -mt-7 rounded-lg flex flex-col">
              <div className="text-custom-black text-center font-medium mb-1">
                Recommended
              </div>
            </div>
            <div className="bg-custom-black p-6 rounded-t-lg flex flex-col gap-3">
              <h1 className="text-4xl font-bold text-custom-white">Pro</h1>
              <div>
                <span className="text-4xl font-bold text-custom-white">$5</span>{" "}
                <span className="font-light text-custom-white">USD/month</span>
              </div>
            </div>

            <div className="bg-custom-secondary-20 p-6 flex flex-col gap-5 rounded-b-lg">
              <p className="text-custom-black font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
                aspernatur!
              </p>
              <button className="bg-custom-black text-custom-white rounded-full py-3 px-4 cursor-pointer hover:bg-custom-black/80">
                Get Pro
              </button>
            </div>
          </div>

          <div className="rounded-lg shadow-md flex flex-col transition-all duration-300 hover:shadow-lg">
            <div className="bg-custom-black p-6 rounded-t-lg flex flex-col gap-3">
              <h1 className="text-4xl font-bold text-custom-white">Premium</h1>
              <div>
                <span className="text-4xl font-bold text-custom-white">
                  $24
                </span>{" "}
                <span className="font-light text-custom-white">USD/month</span>
              </div>
            </div>

            <div className="bg-custom-secondary-20 p-6 flex flex-col gap-5">
              <p className="text-custom-black font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
                aspernatur!
              </p>
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
