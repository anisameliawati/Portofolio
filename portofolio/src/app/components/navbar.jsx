"use client";
import Image from "next/image";
import logo from "../assets/AM.png";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

function NavbarComponents() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" flex justify-between items-center sticky px-10 py-2 bg-white top-0 z-10">
        <div>
          <Link href="/">
            <Image src={logo} className=" w-[50px] h-[50px]" alt="" />
          </Link>
        </div>
        {/* navbar full */}
        <div className="hidden md:block">
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
            <link
              href="https://drive.google.com/file/d/1pY2EafKizZTj5A1GjTdZuD6E8Yt9hv9G/view?usp=sharing"
              target="blank"
            >
              <button className=" rounded-lg bg-[#BC7FCD] text-white px-1">
                Download CV
              </button>
            </link>
          </div>
        </div>

        {/* navbar burger */}
        <div className=" md:hidden relative">
          <button onClick={() => setOpen(!open)}>
            <IoMenu />
          </button>
          {open && (
            <div className="absolute bg-white right-[1px] top-4 w-[200px] p-2 rounded-l-lg rounded-b-lg">
              <div className="flex flex-col gap-2 font-medium">
                <Link href="#about" className="text-[#BC7FCD]">
                  About
                </Link>
                <Link href="#skill" className="text-[#BC7FCD]">
                  Skill
                </Link>
                <Link href="#project" className="text-[#BC7FCD]">
                  Project
                </Link>
                <Link
                  href="{google_docs}https://drive.google.com/file/d/1Gq0wNhn6zP2tMpwKa-KEJ4jkjAF9t0Gv/preview{/google_docs}"
                  target="_blank"
                >
                  <button className=" rounded-lg bg-[#BC7FCD] text-white px-1">
                    Download CV
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default NavbarComponents;
