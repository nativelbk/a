/** @format */

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function App() {
  const [g1, setG1] = useState(true);
  const [g2, setG2] = useState(true);
  const [g3, setG3] = useState(true);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setInterval(() => {
      setG1((a) => !a);
      setG2((a) => !a);
      setG3((a) => !a);
    }, 1000);
  }, []);
  return (
    <>
      <main ref={ref} className=" relative flex flex-col min-h-screen ">
        <Navbar />
        <Hero />
        {g1 && (
          <motion.img
            whileInView={{
              opacity: 1,
              y: 2,
            }}
            transition={{ duration: 5 }}
            initial={{ opacity: 0 }}
            src="./grad1.svg"
            className="absolute w-[300px] bottom-[-52px] left-[-206px]"
            alt=""
          />
        )}
        {g2 && (
          <motion.img
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            src="./grad2.svg"
            className="absolute w-[300px] bottom-5 left-[-200px]"
            alt=""
          />
        )}
        {g3 && (
          <img
            src="./grad3.svg"
            className="absolute w-[300px] bottom-5 left-[-220px]"
            alt=""
          />
        )}
      </main>
      <div className=" pt-5 min-h-screen flex justify-center items-center about-img ">
        <About />
      </div>
      <div className="experience py-[50px]  min-h-screen flex justify-center items-center">
        <Experiences />
      </div>
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
