/** @format */

import Skill from "./Skiil";
import Titre from "./Titre";
const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col  justify-between items-start">
      <Titre titre="SKILLS" className="pl-[120px] " />
      <div className="text-white ml-[120px] mt-12 flex flex-col gap-8  ">
        <div className="flex flex-col gap-6">
          <h4 className=" font-extrabold ">Technologies</h4>
          <div className="flex flex-wrap  gap-12  ">
            <Skill tech="/py.svg" nomtech="Python" />
            <Skill tech="/c.svg" nomtech="C#" />
            <Skill tech="/js.svg" nomtech="Js" />
            <Skill tech="/html.svg" nomtech="HTML" />
            <Skill tech="/css.svg" nomtech="Css" />
            <Skill tech="/sql.png" nomtech="Css" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className=" font-extrabold ">Libraries and Frameworks</h4>
          <div className="flex flex-wrap  gap-12  ">
            <Skill tech="/flask.svg" nomtech="Flask" />
            <Skill tech="/django.svg" nomtech="Django" />
            <Skill tech="/panda.svg" nomtech="Panda" />
            <Skill tech="/react.svg" nomtech="React" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
