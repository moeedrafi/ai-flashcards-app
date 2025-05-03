import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { Features } from "@/components/Features";

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
