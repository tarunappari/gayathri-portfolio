import { Navbar } from "@/components/common/Navbar";
import About from "@/components/landingpage/About";
import BlogSection from "@/components/landingpage/BlogSection";
import ContactSection from "@/components/landingpage/ContactSection";
import Experience from "@/components/landingpage/Experience";
import HeroSection from "@/components/landingpage/HeroSection";
import Recognition from "@/components/landingpage/Recognition";
import Skills from "@/components/landingpage/Skills";
export default function Home() {
  return (
    <div className="pageContainer">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Recognition />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
