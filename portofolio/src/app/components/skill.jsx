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
        className="flex flex-col justify-center items-center p-10 gap-10"
      >
        <div className="text-[40px] font-semibold py-5">Skill Set</div>
        <div className="flex gap-10">
          <BiLogoJavascript size={70} className=" text-[#F0DB4F]" />
          <BiLogoTypescript size={70} className=" text-[#3178C6]" />
          <FaNodeJs size={70} className=" text-[#3C873A]" />
          <SiExpress size={70} className=" text-black" />
          <SiMysql size={70} className=" text-blue-700" />
          <SiPrisma size={60} className=" text-blue-gray-800" />
        </div>
        <div className="flex gap-10">
          <FaReact size={70} className=" text-blue-600" />
          <RiTailwindCssFill size={70} className="text-[#37BCF8]" />
          <SiChakraui size={70} className="text-[#5FC8C8]" />
          <SiMui size={70} className="text-[#027FFE]" />
          <FaCss3Alt size={70} className=" text-blue-700" />
          <FaHtml5 size={70} className=" text-orange-700" />
          <IoLogoGithub size={70} className="text-[#6e5494]" />
        </div>
      </div>
    </>
  );
}
export default SkillComponents;
