/** @format */

import React from "react";
import Titre from "./Titre";
import Button from "./Button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="flex  items-center max-[878px]:flex-col  max-md:flex-col sm:justify-center"
    >
      <motion.section
        initial={{
          x: -40,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        className="max-w-[500px]"
      >
        <img src="/ordi.png" alt="" className="sm:px-4 sm:py-2" />
      </motion.section>
      <section className="text-white mx-4 mt-2 sm:mt-0 sm:ml-8">
        <motion.div
          initial={{
            x: 40,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
          className="mt-[100px] sm:mt-10"
        >
          {" "}
          {/* Ajout de la classe mt-8 ici */}
          <div>
            <Titre titre="I LOVE BEING A PYTHON DEVELOPER!" />
            <h2 className="max-w-[500px] text-left sm:text-left">
              My name is Ando Nirina RANDRIANJAFY, and as a Python developer
              with a focus on back-end development and data processing, i am
              passionate about crafting robust and efficient solutions. <br />
              With a strong foundation in Python programming, i aim to blend
              code efficiency with innovative problem-solving. My goal is to
              develop reliable and scalable applications that deliver seamless
              experiences and meet the evolving needs of users.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 mt-8 ">
            <Button btn="CLEAN CODE" />
            <Button btn="WEB DESIGN" />
            <Button btn="WEB DEVELOPMENT" className="w-[200px]" />
          </div>
          <div className="flex flex-wrap gap-4 mt-4 ">
            <Button btn="DATA ANALYST" />
            <Button btn="AI INTEGRATION" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
