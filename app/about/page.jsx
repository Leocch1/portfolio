"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "A dedicated and ambitious third-year Computer Science student, known for a strong work ethic and a genuine passion for technology.",
  info: [
    { fieldName: "Name", fieldValue: "Leo Louise E. Jimenez" },
    { fieldName: "Phone", fieldValue: "(+63) 997 613 3298" },
    { fieldName: "Experience", fieldValue: "3 years" },
    { fieldName: "Email", fieldValue: "leolouise26@gmail.com" },
    { fieldName: "Nationality", fieldValue: "Filipino" },
  ],
};

const familyBackground = {
  title: "Family Background",
  description:
    "Coming from a supportive and nurturing family, I value the importance of education, hard work, and compassion. My family has always encouraged me to pursue my dreams and stay grounded in my values.",
  info: [
    { fieldName: "Father", fieldValue: "Leo Rommel V. Jimenez" },
    { fieldName: "Mother", fieldValue: "May-Liza E. Jimenez" },
    { fieldName: "Grandma", fieldValue: "Melecita B. Espedilla" },
    { fieldName: "Grandpa", fieldValue: "Francisco Espedilla" },
    { fieldName: "Brother", fieldValue: "Marl Josh Espedilla" },
  ],
};

const education = {
  title: "My education",
  description:
    "Driven by a desire to solve real-world problems with technology, I have successfully built a foundation of skills in software engineering and web development, preparing myself to thrive in collaborative and fast-paced development environments.",
  items: [
    {
      institution: "Las Pinas Elementary School (Central)-Graduate TOP 4",
      course: "STEM",
      duration: "2008-2014",
    },
    {
      institution: "Las Pinas National HighSchool (Main)-Graduated With Honors",
      course: "STEM",
      duration: "2014-2020",
    },
    {
      institution: "AMA ComputerCollege Paranaque-Graduated With High Honors",
      course: "STEM",
      duration: "2020-2022",
    },
    {
      institution: "Cavite State University - Bacoor Campus",
      course: "Computer Science",
      duration: "2022 - Present",
    },
  ],
};

const ListSection = ({ title, description, items, isExperience }) => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
          >
            <span className="text-accent">{item.duration}</span>
            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
              {isExperience ? item.Language : item.course}
            </h3>
            <div className="flex items-center gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
              <p className="text-white/60">
                {isExperience ? item.yearlvl : item.institution}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>
  </div>
);

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 flex-col"
    >
      <div className="container mx-auto flex flex-col flex-grow mt-10">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="familyBackground">Family Background</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* About */}
            <TabsContent value="about" className="w-full mt-20">
              <div className="flex flex-col xl:flex-row gap-10">
                {/* Left: Info List */}
                <div className="w-full xl:w-1/2 bg-[#232329] p-6 rounded-xl shadow-md">
                  <h3 className="text-3xl font-semibold mb-6 text-center xl:text-left">{about.title}</h3>
                  <ul className="grid grid-cols-1 gap-y-4">
                    {about.info.map((item, index) => (
                      <li
                        key={index}
                        className="flex flex-col sm:flex-row justify-between sm:items-center bg-[#2c2c31] p-4 rounded-md"
                      >
                        <span className="text-white/60 font-medium">{item.fieldName}</span>
                        <span className="text-lg text-white text-right sm:text-left">{item.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Description */}
                <div className="w-full xl:w-1/2 flex flex-col justify-center bg-[#232329] p-6 rounded-xl shadow-md">
                  <h3 className="text-3xl font-semibold mb-4 text-center xl:text-left">Who I Am</h3>
                  <p className="text-white/60 text-lg leading-relaxed text-justify">
                    {about.description}
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full mt-20">
              <ListSection
                title={education.title}
                description={education.description}
                items={education.items}
              />
            </TabsContent>

            {/* Family Background */}
<TabsContent value="familyBackground" className="w-full mt-20">
  <div className="flex flex-col xl:flex-row gap-10">
    {/* Left: Info List */}
<div className="w-full xl:w-3/4 bg-[#232329] p-6 rounded-xl shadow-md">
  <h3 className="text-3xl font-semibold mb-6 text-center xl:text-left">{familyBackground.title}</h3>
  <ul className="grid grid-cols-1 gap-y-4">
    {familyBackground.info.map((item, index) => (
      <li
        key={index}
        className="flex flex-col sm:flex-row justify-between sm:items-center bg-[#2c2c31] p-4 rounded-md"
      >
        <span className="text-white/60 font-medium">{item.fieldName}</span>
        <span className="text-lg text-white text-right sm:text-left">{item.fieldValue}</span>
      </li>
    ))}
  </ul>
</div>


    {/* Right: Description */}
    <div className="w-full xl:w-2/3 flex flex-col justify-center bg-[#232329] p-6 rounded-xl shadow-md">
      <h3 className="text-3xl font-semibold mb-4 text-center xl:text-left">My Family</h3>
      <p className="text-white/60 text-lg leading-relaxed text-justify">
        {familyBackground.description}
      </p>
    </div>
  </div>
</TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
