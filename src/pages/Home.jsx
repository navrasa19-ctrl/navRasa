import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Process from "../components/Process";
import ProjectShowcase from "../components/ProjectShowcase";
import RecentWorkMarquee from "../components/RecentWorkMarquee";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="bg-[#111] text-white">
      <Navbar />
      <Hero />
      <RecentWorkMarquee />
      <ProjectShowcase />
      {/* <About /> */}
      <Process />
      <Footer />
    </div>
  );
};

export default Home;
