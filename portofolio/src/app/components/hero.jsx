// "use client";
import Image from "next/image";
import logo from "../assets/head.png";
import { MdLocationOn } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

function HeroComponents() {
  return (
    <>
      <div className="flex flex-row justify-center gap-20 items-center min-h-[90vh]">
        <div>
          <Image src={logo} className=" w-[400px] h-auto" alt="logo" />
        </div>
        <div className="flex flex-col gap-8">
          <div className=" font-semibold">
            <div className=" text-[50px]">Hi, I am Anisa Meliawati</div>
            <div className=" text-[50px]">Full Stack Web Developer</div>
          </div>

          <div className="flex text-[18px] items-center">
            <MdLocationOn className=" text-red-600" />
            Jakarta, Indonesia
          </div>
          <div className="flex gap-6 text-[25px]">
            <Link href="https://github.com/anisameliawati">
              <FaGithub color="#6e5494" />
            </Link>
            <Link href="https://linkedin.com/in/anisa-meliawati">
              <FaLinkedin color="#0077B5" />
            </Link>
            <Link href="https://instagram.com/anisameliawatii">
              <BsInstagram color=" #ee2a7b " />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroComponents;
