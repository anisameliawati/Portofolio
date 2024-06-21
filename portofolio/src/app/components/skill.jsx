import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

function SkillComponents() {
  return (
    <>
      <div
        id="skill"
        className="flex flex-col justify-center items-center md:p-10 p-5 md:gap-10 gap-5"
      >
        <div className="text-[40px] font-semibold py-5">Skill Set</div>
        <div className="flex md:gap-10 gap-2 md:text-[70px] text-[40px]">
          <BiLogoJavascript className=" text-[#F0DB4F] " />
          <BiLogoTypescript className=" text-[#3178C6]" />
          <FaNodeJs className=" text-[#3C873A] " />
          <SiExpress className=" text-black" />
          <SiMysql className=" text-blue-700 " />
          <SiPrisma className=" text-blue-gray-800 md:text-[60px] text-[40px]" />
        </div>
        <div className="flex md:gap-10 gap-3 md:text-[70px] text-[40px]">
          <FaReact className=" text-blue-600 " />
          <RiTailwindCssFill className="text-[#37BCF8]" />
          <SiChakraui className="text-[#5FC8C8]" />
          <SiMui className="text-[#027FFE]" />
          <FaCss3Alt className=" text-blue-700 " />
          <FaHtml5 className=" text-orange-700" />
          <IoLogoGithub className="text-[#6e5494]" />
        </div>
      </div>
    </>
  );
}
export default SkillComponents;
