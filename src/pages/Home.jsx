import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Process from "../components/Process";
import ProjectShowcase from "../components/ProjectShowcase";
import RecentWorkMarquee from "../components/RecentWorkMarquee";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonial";
const Home = () => {
  return (
    <div className="bg-[#111] text-white">
      <Navbar />
      <Hero />
      <RecentWorkMarquee />
      <ProjectShowcase />
      {/* <About /> */}
      <Process />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
