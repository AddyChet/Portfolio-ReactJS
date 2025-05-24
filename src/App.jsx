import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import Cursor from "./components/Cursor";
import Contact from "./components/Contact/Contact";


const App = () => {
  return (
    <div className="bg-[#050414] ">
      <Cursor/>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      {/* className="relative pt-20" */}
      <div className="relative pt-2">
        <Navbar />
        <About />
         <Skills />
         <Work />
         <Contact/>
         <Footer />
      </div>
    </div>
  );
};

export default App;
