"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Carousel,
  IconButton,
} from "@material-tailwind/react";
import orabout from "../assets/organick/organick-aboutus.png";
import orhome from "../assets/organick/organick-homepage.png";
import orteam from "../assets/organick/organick-ourteam.png";
import orshop from "../assets/organick/organick-shop.png";
import organick from "../assets/organick/organick.png";
import ticket from "../assets/ticketed/ticket.png";
import tickadmin from "../assets/ticketed/ticketed-admin.png";
import tickhome from "../assets/ticketed/ticketed-homepage.png";
import ticklogin from "../assets/ticketed/ticketed-login.png";
import tickregis from "../assets/ticketed/ticketed-register.png";
import ecomhome from "../assets/ecommerce/ecom-homepage.png";
import ecommac from "../assets/ecommerce/ecommac.png";

import ecomlogin from "../assets/ecommerce/ecom-login.png";
import ecomregis from "../assets/ecommerce/ecom-register.png";
import jwp from "../assets/jwp/jwp.png";
import jwpmac from "../assets/jwp/jwpmac.png";

import comsoon from "../assets/jwp/coming.png";
import comsoon2 from "../assets/jwp/coming2.png";
import comsoon3 from "../assets/jwp/coming3.png";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectComponents() {
  const data = [
    {
      image: organick,
      project: "The Organick",
      shortdesc:
        "This project is all about designing the look and feel of Organick's website, where they sell organic foods.",
      desc: "This project is all about designing the look and feel of Organick's website, where they sell organic foods. It's actually my first attempt at doing front-end work. I got the idea from Figma designs and tried my best to make it look like the one on webflow.io. It's not perfect, but it's taught me a lot about picking nice colors and making things look good on the screen.",
      image1: orhome,
      image2: orabout,
      image3: orteam,
      image4: orshop,
      href: "https://organic-compro.vercel.app/",
    },
    {
      image: ecommac,
      project: "Ecommerce | Selling Shoes",
      shortdesc:
        "It's an e-commerce platform selling shoes where users can log in or sign up for their accounts",
      desc: "This is my first project exercise using Redux and learning about user authentication and authorization. It's an e-commerce platform selling shoes where users can log in or sign up for their accounts. In this project, I didn't pay much attention to the design (I'll improve it soon) because my focus was on learning Redux and authentication.",
      image1: ecomhome,
      image2: ecomlogin,
      image3: ecomregis,
      image4: false,
      href: "#project",
    },
    {
      image: ticket,
      project: "Ticketed",
      shortdesc:
        "This is a ticketing web/application that can make it easier for people to buy their favorite events.",
      desc: "This is a ticketing web/application that can make it easier for people to buy their favorite events. On this website, users can buy tickets and see all the events that are available. Users can also filter by event category. Only users that are already signed in can continue to the transaction page. As an admin, they can manage event data (CRUD). Only admins can access the admin dashboard. This project is my Mini Project at Purwadhika Digital Technology School. I worked on this project alone, and I'm so grateful that I could finish my project on time. Thanks to Kak Jordan for mentoring me during this project. I got 100 points for my mini project score because I passed scoring points as an individual.",
      image1: tickhome,
      image2: tickadmin,
      image3: ticklogin,
      image4: tickregis,
      href: "#project",
    },
    {
      image: jwpmac,
      project: "Jakarta Warehouse Project",
      shortdesc:
        "Jakarta Warehouse Project is an e-commerce application that implements more than one warehouse in storing its goods.",
      desc: "Still working on this project. Jakarta Warehouse Project is an e-commerce application that implements more than one warehouse in storing its goods. The implementation of this aims to improve delivery speed and also reduce shipping costs. When there is a new order, the system will automatically forward the order to the nearest warehouse location from the user's address. The admin responsible for that location is responsible for processing the order until it is completed. The shipping cost borne by the user will be determined based on the distance between the selected warehouse location and the user's address. From the user's perspective, it will not be apparent that this application has more than one storage warehouse. The stock visible to the user is the total stock from all warehouses.",
      image1: jwp,
      image2: comsoon,
      image3: comsoon2,
      image4: comsoon3,
      href: "#project",
    },
  ];
  return (
    <>
      <div
        className=" flex flex-col justify-center items-center bg-[#F7F5F4] min-h-screen  p-10"
        id="project"
      >
        <div className=" text-[40px] font-semibold py-5">Features Projects</div>
        <div className=" grid grid-cols-2  justify-center items-center  gap-10">
          {data.map((project, index) => (
            <CardPro key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}
export default ProjectComponents;

export function CardPro({
  image,
  project,
  shortdesc,
  desc,
  image1,
  image2,
  image3,
  image4,
  href,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Card className="mt-6 w-96">
        <CardHeader color="white" className="relative h-56">
          <Image src={image} alt="" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {project}
          </Typography>
          <Typography>{shortdesc}</Typography>
        </CardBody>
        <CardFooter className="pt-0 m-auto justify-center items-center">
          <Button onClick={() => handleOpen("xl")} className="bg-[#BC7FCD] ">
            Read More
          </Button>
        </CardFooter>
        <Dialog
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
          size="xl"
          className=""
        >
          <DialogHeader className="m-auto justify-center items-center">
            {project}
          </DialogHeader>
          <DialogBody className=" flex flex-row gap-5 items-center">
            <Carousel
              className="rounded-xl h-[400px] w-[50%] object-contain"
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="black"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute top-2/4 left-4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="black"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute top-2/4 !right-4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </IconButton>
              )}
            >
              <Image src={image1} alt="" />
              <Image src={image2} alt="" />
              <Image src={image3} alt="" />
              <Image src={image4} alt="" />
            </Carousel>
            <div className=" w-[50%] text-justify p-3">{desc}</div>
          </DialogBody>
          <DialogFooter className="flex justify-between">
            <Link href={href}>
              <Button className="bg-white text-[#BC7FCD]" onClick={handleOpen}>
                <span>See Demo</span>
              </Button>
            </Link>
            <Button className="bg-[#BC7FCD]" onClick={handleOpen}>
              <span>Cancel</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </Card>
    </>
  );
}
