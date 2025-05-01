import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";

const Home = () => {
  return (
    <section className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
    </section>
  );
};

export default Home;
