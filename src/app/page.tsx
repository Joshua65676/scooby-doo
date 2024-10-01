import Hero from "@/components/Hero";
import About from "@/components/About";
import RoadMap from "@/components/RoadMap";
import Tokenomics from "@/components/Tokenomics";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <RoadMap />
      <Tokenomics />
      {/* <Footer /> */}
    </main>
  );
}
