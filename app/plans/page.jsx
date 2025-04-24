"use client";

import { motion } from "framer-motion";

const futurePlans = [
  {
    title: "Intern at a Tech Company",
    description:
      "I aim to gain real-world experience through internships, where I can apply my skills in software development and collaborate with professionals in the industry.",
  },
  {
    title: "Master Full-Stack Development",
    description:
      "I plan to deepen my expertise in modern frameworks like Next.js, Node.js, and Tailwind to become a well-rounded full-stack developer ready for complex projects.",
  },
  {
    title: "Build and Launch My Own App",
    description:
      "I want to create and publish a fully functional app—whether it's a productivity tool, a game, or a useful service—to showcase my skills and solve real-world problems.",
  },
  {
    title: "Pursue Further Studies or Certifications",
    description:
      "In the future, I’m considering taking certifications in web development, cloud computing, or even pursuing a master’s degree to stay ahead in the tech field.",
  },
];

const FuturePlans = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-20"
    >
      <div className="container mx-auto px-6 xl:px-0">
        <h2 className="text-4xl font-bold text-center mb-12">Future Plans</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {futurePlans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#232329] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-accent mb-4">{plan.title}</h3>
              <p className="text-white/60 text-lg leading-relaxed text-justify">
                {plan.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FuturePlans;
