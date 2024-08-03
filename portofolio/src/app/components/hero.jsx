// "use client";
import Image from "next/image";
import logo from "../assets/head.png";
import { MdLocationOn } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

function HeroComponents() {
  const gradientStyle = {
    background: "linear-gradient(220.55deg, #6F00B3 0%, #DEB5FF 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <>
      <div className="flex md:flex-row flex-col justify-center md:gap-20 gap-10 items-center md:min-h-[90vh] min-h-[70vh] md:mb-0 mb-4">
        <div>
          <Image
            src={logo}
            className=" md:w-[400px] w-[250px] h-auto"
            alt="logo"
          />
        </div>
        <div className="flex flex-col md:gap-8 gap-4 md:items-start items-center">
          <div className=" ">
            <div
              className=" md:text-[50px] text-[30px] font-semibold md:text-start text-center"
              style={gradientStyle}
            >
              Hi, I am Anisa Meliawati
              <br />
              {/* </div>
            <div className=" md:text-[50px] text-[40px]" style={gradientStyle}> */}
              Full Stack Web Developer
            </div>
          </div>

          <div className="flex md:text-[18px] text-[15px] items-center text-[#325B94]">
            <MdLocationOn className=" text-red-300" />
            Jakarta, Indonesia
          </div>
          <div className="flex gap-6 text-[25px]">
            <Link href="https://github.com/anisameliawati" target="blank">
              <FaGithub color="#6e5494" />
            </Link>
            <Link href="https://linkedin.com/in/anisa-meliawati" target="blank">
              <FaLinkedin color="#0077B5" />
            </Link>
            <Link href="https://instagram.com/anisameliawatii" target="blank">
              <BsInstagram color=" #ee2a7b " />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroComponents;
