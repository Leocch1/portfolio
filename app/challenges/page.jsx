"use client";

import { motion } from "framer-motion";

const challengesData = [
  {
    title: "Balancing Academics & Development Work",
    description:
      "Managing time between my coursework and personal development projects has taught me time management, prioritization, and the importance of structured planning.",
  },
  {
    title: "Learning New Frameworks",
    description:
      "Transitioning to new tools like React, Tailwind, and Next.js was overwhelming at first, but consistent practice helped me become confident in using them to build full-stack apps.",
  },
  {
    title: "Debugging and Problem-Solving",
    description:
      "Some bugs took hours—or days—to fix. But these moments shaped my ability to stay calm under pressure and taught me how to think critically when debugging.",
  },
  {
    title: "Collaborating in Group Projects",
    description:
      "Working with others required communication, patience, and accountability. I’ve learned how to share ideas clearly and contribute effectively to a team.",
  },
];

const Challenges = () => {
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
        <h2 className="text-4xl font-bold text-center mb-12">Challenges & Learnings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {challengesData.map((challenge, index) => (
            <div
              key={index}
              className="bg-[#232329] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-accent mb-4">{challenge.title}</h3>
              <p className="text-white/60 text-lg leading-relaxed text-justify">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Challenges;
