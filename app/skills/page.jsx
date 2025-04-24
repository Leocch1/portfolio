"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma, FaPython, FaJava, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiCplusplus, SiTypescript, SiRedux, SiDocker } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const experience = {
    title: "My experience",
    description:
      "Has spent the past 3 years mastering core programming languages and frameworks essential for modern development. Proficient in Java and Python, I have a solid understanding of object-oriented programming, data structures, and algorithms, enabling me to tackle complex problems efficiently.",
    items: [
      { Language: "Java", yearlvl: "First Year", duration: "2021 - Present" },
      { Language: "Python", yearlvl: "Second Year", duration: "2022 - Present" },
      { Language: "HTML", yearlvl: "First Year", duration: "2022 - Present" },
      { Language: "CSS", yearlvl: "First Year", duration: "2022 - Present" },
      { Language: "JAVASCRIPT", yearlvl: "First Year", duration: "2022 - Present" },
      { Language: "SQL", yearlvl: "First Year", duration: "2022 - Present" },
      { Language: "MongoDB", yearlvl: "Second Year", duration: "2023 - Present" },
      { Language: "React.js", yearlvl: "Third Year", duration: "2024 - Present" },
      { Language: "Tailwind.css", yearlvl: "Third Year", duration: "2024 - Present" },
      { Language: "Next.js", yearlvl: "Third Year", duration: "2024 - Present" },
      { Language: "Laravel", yearlvl: "Third Year", duration: "2025 - Present" },
      { Language: "Django", yearlvl: "Third Year", duration: "2025 - Present" },
    ],
  };
  


const skills = {
    title: "My skills",
    description: "As a third-year computer science student, my set of skills includes a combination of programming, problem-solving, and foundational knowledge in core areas of computer science.",
    skillList: [
      { icon: <FaHtml5 />, name: "HTML 5" },
      { icon: <FaCss3 />, name: "CSS 3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaFigma />, name: "Figma" },
      { icon: <FaPython />, name: "Python" },
      { icon: <FaJava />, name: "Java" },
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaDatabase />, name: "Database" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" },
    ],
  };

// Shared component for experience and education sections
const ListSection = ({ title, description, items, isExperience }) => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {items.map((item, index) => (
          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
            <span className="text-accent">{item.duration}</span>
            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
              {isExperience ? item.Language : item.course}
            </h3>
            <div className="flex items-center gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
              <p className="text-white/60">{isExperience ? item.yearlvl : item.institution}</p>
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
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 flex-col"
    >
      <div className="container mx-auto flex flex-col flex-grow mt-5">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
  
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}  
            <TabsContent value="experience" className="w-full">
              <ListSection title={experience.title} description={experience.description} items={experience.items} isExperience />
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>

      {/* Footer - Space filler */}
      <div className="xl:h-0 sm:h-[50px] bg-transparent"></div>
    </motion.div>
  );
};

export default Resume;
