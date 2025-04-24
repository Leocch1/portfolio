"use client"

import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";



import {BsArrowUpRight,} from "react-icons/bs" 
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "CVSU School Website",
        title: "CVSU School Website",
        description: "This school website provides easy access to the school’s mission, vision, and mandate, along with details on offered courses, recent events, and contact information. Its clean design ensures visitors can quickly find relevant resources and updates.",
        stack: [
            {
                name:"Html 5"
            },
            {
                name:"Css 3"
            },
            {
                name:"Javascript"
            },
        ],
        image: "/assets/work/thumb1.webp",
        live:"https://group1-itec-cvsu-website.netlify.app"
    },
    {
        num: "02",
        category: "IT-Company Website",
        title: "IT-Company Website",
        description: "This IT company website showcases services in software development, consulting, cybersecurity, and cloud solutions. It features client testimonials, case studies, and a portfolio of past projects, providing a clear view of their expertise and experience.",
        stack: [
            {
                name:"Html 5"
            },
            {
                name:"Css 3"
            },
            {
                name:"Javascript"
            },
        ],
        image: "/assets/work/thumb2.webp",
        live:"https://technofermata-group1-itec.netlify.app"
    },
    {
        num: "03",
        category: "Student Checklist",
        title: "Student Checklist",
        description: "This student checklist portal provides an organized view of enrolled subjects and completed grades. With a simple interface and search feature, students can easily track academic performance and access records, keeping them informed about their progress across different courses.",
        stack: [
            {
                name:"PHP"
            },
            {
                name:"Css 3"
            },
            {
                name:"MySQL"
            },
        ],
        image: "/assets/work/thumb3.webp",
        live:"https://github.com/Leolouise26/MyChecklist"
    },
    {
        num: "04",
        category: "E-commerce website",
        title: "E-commerce website",
        description: "This e-commerce site offers stylish hoodies and jerseys in various designs, colors, and sizes. With detailed descriptions, quality images, easy navigation, secure payment, and fast shipping, customers enjoy a seamless experience finding the perfect hoodie or jersey.",
        stack: [
            {
                name:"PHP"
            },
            {
                name:"Css 3"
            },
            {
                name:"MongoDB"
            },
        ],
        image: "/assets/work/thumb4.webp",
        live:"https://github.com/Leolouise26/E-commerce-hoopx"
    },
    {
        num: "05",
        category: "E-commerce website",
        title: "Daily Sweets",
        description: "Daily Sweets is your go-to online store for indulging in delightful treats every day. From artisanal chocolates and freshly baked pastries to unique candies and seasonal confections, we bring sweetness straight to your doorstep. Whether you're satisfying a personal craving or sending a thoughtful gift, Daily Sweets makes every day a little sweeter.",
        stack: [
            {
                name:"Django"
            },
            {
                name:"Python"
            },
            {
                name:"React"
            },
            {
                name:"Tailwind CSS"
            },
        ],
        image: "/assets/work/thumb5.jpg",
        live:"https://github.com/Leolouise26/E-commerce-hoopx"
    },
    {
        num: "06",
        category: "Enrollment website",
        title: "CVSU Enrollment System",
        description: "CVSU Online Enrollment System is a streamlined digital platform designed to simplify and enhance the enrollment process at Cavite State University. It allows students to register for courses, manage schedules, and access academic records conveniently online — reducing paperwork, long lines, and manual errors for a more efficient and student-friendly experience.",
        stack: [
            {
                name:"Laravel"
            },
            {
                name:"PHP"
            },
            {
                name:"CSS 3"
            },
            {
                name:"Javascript"
            },
            {
                name:"MySQL"
            },
        ],
        image: "/assets/work/thumb6.jpg",
        live:"https://github.com/Leolouise26/E-commerce-hoopx"
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) =>{
        //get current slide index
        const currentIndex = swiper.activeIndex;
        //update project state based on current slide index
        setProject(projects[currentIndex]);
    }

    return  <motion.section initial={{opacity: 0}} animate= {{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        {/* outline num */}
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline  ">{project.num}</div>
                        {/* project category */}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                            {project.category} project
                        </h2>
                        {/* project description */}
                        <p className="text-white/60">
                            {project.description}
                        </p>
                        {/* stack */}
                        <ul className="flex gap-4">
                            {project.stack.map((item, index) => {
                                return <li key={index} className="text-xl text-accent"> {item.name} {index !== project.stack.length - 1 && ","} </li>
                            })}
                        </ul>
                        {/* border */}
                        <div className="border border-white/20"></div>
                        {/* buttons */}
                        <div>
                            {/* live project button */}
                            <Link href={project.live} target="_blank">
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project/GitHub Repository</p>
                                        </TooltipContent>    
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                        {projects.map((project, index) => {
                            return <SwiperSlide key={index} className="w-full">
                                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                {/* overlay */}
                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                {/* image */}
                                <div className="relative w-full h-full">
                                    <Image src={project.image} fill className="object-cover" alt="" />
                                </div>
                                </div>
                            </SwiperSlide>
                        })}
                        {/* button */}
                        <WorkSliderBtns  />
                    </Swiper>
                </div>
            </div>
        </div>
        <div className="xl:h-0 sm:h-14">

      </div>
    </motion.section>;
};

export default Work;