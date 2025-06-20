import ReactTypingEffect from "react-typing-effect";
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile21.png';
import Particles from "@tsparticles/react";
import { useParticles } from "../../utils/useParticles";

const About = () => {
  const {init, particlesLoaded, options} = useParticles()

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="pointer-events-none"
          
        />
      )}

      <section
        id="about"
        className="py-18 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
      >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Adarsh Bhandari
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#4286f4] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Fullstack Developer",
                "Frontend Developer",
                "UI/UX Designer",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#4286f4]">{cursor}</span>
              )}
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I love building web apps
            that are smooth, functional, and user-friendly.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1h7bivhEbrdcFeAU3iCA1hNwL4Ka7kjhR/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full cursor-pointer mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #a1cfff, #4286f4)',
              boxShadow: '0 0 2px #a1cfff, 0 0 2px #8245ec, 0 0 10px #a1cfff',
            }}
          >
            Download Resume
          </a>
        </div>

         {/* Right Side */}
        <div className="md:w-[50%] flex justify-center md:justify-end z-40 ">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-blue-200 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Adarsh Bhandari"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
