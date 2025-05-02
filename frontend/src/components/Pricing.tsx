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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-lg shadow-md flex flex-col transition-all duration-300 hover:shadow-lg">
            <div className="bg-custom-black p-6 rounded-t-lg flex flex-col gap-3">
              <h1 className="text-4xl font-bold text-custom-white">Free</h1>
              <div>
                <span className="text-4xl font-bold text-custom-white">$0</span>{" "}
                <span className="font-light text-custom-white">USD/month</span>
              </div>
            </div>

            <div className="bg-custom-secondary-20 p-6 flex flex-col gap-5">
              <p className="text-custom-black font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
                aspernatur!
              </p>
              <button className="border border-custom-primary text-custom-black rounded-full py-3 px-4 cursor-pointer">
                Join for Free
              </button>
            </div>
          </div>

          <div className="rounded-lg shadow-md flex flex-col transition-all duration-300 hover:shadow-lg">
            <div className="bg-custom-black p-6 rounded-t-lg flex flex-col gap-3">
              <div className="flex justify-between">
                <h1 className="text-4xl font-bold text-custom-white">Pro</h1>
                <button className="bg-custom-primary text-custom-white rounded-lg py-1 px-2 cursor-pointer">
                  Recommended
                </button>
              </div>
              <div>
                <span className="text-4xl font-bold text-custom-white">$5</span>{" "}
                <span className="font-light text-custom-white">USD/month</span>
              </div>
            </div>

            <div className="bg-custom-secondary-20 p-6 flex flex-col gap-5">
              <p className="text-custom-black font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
                aspernatur!
              </p>
              <button className="bg-custom-primary text-custom-black rounded-full py-3 px-4 cursor-pointer">
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
              <button className="border border-custom-primary text-custom-black rounded-full py-3 px-4 cursor-pointer">
                Get Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
