"use client";
import Image from "next/image";
import logo from "../assets/AM.png";
import Link from "next/link";

function NavbarComponents() {
  return (
    <>
      <div className=" flex justify-between items-center sticky px-10 py-2 bg-white top-0 z-10">
        <div>
          <Link href="/">
            <Image src={logo} className=" w-[50px] h-[50px]" alt="" />
          </Link>
        </div>
        <div className=" flex gap-3">
          <Link href="#about" className="text-[#BC7FCD]">
            About
          </Link>
          <Link href="#skill" className="text-[#BC7FCD]">
            Skill
          </Link>
          <Link href="#project" className="text-[#BC7FCD]">
            Project
          </Link>
          <Link href="https://drive.google.com/file/d/1oKRfaE0cLj9cfYUg-FJ7fFRJRhQX9ygO/view?usp=sharing">
            <button className=" rounded-lg bg-[#BC7FCD] text-white px-1">
              Download CV
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default NavbarComponents;
