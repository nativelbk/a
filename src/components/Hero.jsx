/** @format */
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="flex flex-col gap-5 md:flex-row min-h-[70vh] mt-[130px] items-center justify-center ">
      <div className="flex flex-col justify-start gap-4 text-center md:text-left md:w-[50%]">
        <h5 className="text-blue text-bold text-[20px] h1-italic">Hello!!!</h5>
        <h1 className="text-white font-black text-h1 font-league-spartan  max-sm:text-[28px] max-w-full md:max-w-[500px]">
          I'm Ando Nirina RANDRIANJAFY
        </h1>

        <div className="font-bold flex items-center justify-center w-full md:w-[350px] h-[40px] bg-blue">
          <Typewriter
            words={["PYTHON DEVELOPER", "DATA", "WEB DEVELOPER "]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <a
          className="resume font-bold flex items-center justify-center w-full md:w-[350px] h-[40px] bg-white rounded hover:bg-[rgb(255,255,255,.8)]"
          href="https://drive.google.com/file/d/1Wpvku72k_UxEbR7gMS8XbtRcog8U6bkv/view?usp=sharing "
        >
          CV
        </a>
      </div>
      <div className="w-full md:w-[400px] h-[400px] flex justify-center items-center">
        <img src="/sary.png" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Hero;
