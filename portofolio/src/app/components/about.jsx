"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import aboutImage from "../assets/about/3.png";
import duaImage from "../assets/about/4.png";
import tigaImage from "../assets/about/5.png";
import empatImage from "../assets/about/6.png";
import Image from "next/image";
import { useState } from "react";

function AboutComponents() {
  const [active, setActive] = useState("about");
  const data = [
    {
      label: "About",
      value: "about",
      image: aboutImage,
    },
    {
      label: "2022",
      value: "dua",
      image: duaImage,
    },

    {
      label: "2023",
      value: "tiga",
      image: tigaImage,
    },

    {
      label: "2024",
      value: "empat",
      image: empatImage,
    },
  ];
  return (
    <>
      <div
        className=" min-h-screen flex flex-col justify-center items-center p-10 bg-[#F7F5F4]"
        id="about"
      >
        <div className=" text-[40px] font-semibold py-5">About Me</div>
        <Tabs value="about">
          <TabsHeader
            className="bg-transparent"
            indicatorProps={{
              className: "bg-[#BC7FCD] shadow-none !text-gray-900",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActive(value)}
                className={`py-2 px-4 rounded-lg cursor-pointer font-semibold ${
                  active === value ? " text-white" : "text-[#BC7FCD]"
                }`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, image }) => (
              <TabPanel key={value} value={value}>
                <Image src={image} className=" w-[600px] h-auto" alt={value} />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
}
export default AboutComponents;
