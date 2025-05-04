import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { Pricing } from "@/components/home/Pricing";
import { Features } from "@/components/home/Features";

const Home = () => {
  return (
    <section className="min-h-screen space-y-8">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </section>
  );
};

export default Home;
