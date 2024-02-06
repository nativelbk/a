/** @format */
import { Link } from "react-scroll";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [showAndo, setShowAndo] = useState(false);

  useEffect(() => {
    if (scrollYProgress.current > 0.01) {
      setShowAndo(true);
    } else {
      setShowAndo(false);
    }
  }, [scrollYProgress?.current]);
  return (
    <div className="flex flex-wrap fixed  w-full z-40 items-center py-8 justify-around">
      {showAndo ? (
        <motion.div
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, y: 50, scale: 1.2 }}
          className="bg-blue px-[10px] ml-4 py-2 font-bold "
        >
          ANDO NIRINA
        </motion.div>
      ) : (
        <div className="bg-blue px-[56px] ml-4 py-2 font-bold ">HOME</div>
      )}
      <nav className="mt-4 md:mt-0">
        <ul className="flex flex-wrap gap-6 md:gap-14  text-white justify-around">
          <Link
            activeClass="active"
            activeStyle={{ color: "#38b6ff" }}
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            aria-current="page"
            className="mb-2 md:mb-0 cursor-pointer "
          >
            ABOUT ME
          </Link>
          <Link
            activeClass="active"
            activeStyle={{ color: "#38b6ff" }}
            to="xp"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            aria-current="page"
            className="mb-2 md:mb-0 cursor-pointer"
          >
            EXPERIENCES
          </Link>
          <Link
            activeClass="active"
            activeStyle={{ color: "#38b6ff" }}
            to="pro"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            aria-current="page"
            className="mb-2 md:mb-0 cursor-pointer"
          >
            PROJECT
          </Link>
          <Link
            // activeClass="active"
            activeStyle={{ color: "#38b6ff" }}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            aria-current="page"
            to="contact"
            className="mb-2 md:mb-0 cursor-pointer"
          >
            CONTACT
          </Link>
          <div className="flex ml-3 items-center">
            <div className="w-20 md:w-[200px] h-1 bg-white"></div>
            <div className="w-4 h-4 rounded-full border-2 bg-transparent"></div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
