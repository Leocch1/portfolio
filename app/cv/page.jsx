"use client";

import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="min-h-screen px-4 py-12 bg-[your-accent-color] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold">My Curriculum Vitae</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A visual representation of my educational background, work experience, and skills.
          </p>

          {/* Download Button */}
          <a
            href="/Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition mt-4"
          >
            <FiDownload className="text-xl" />
            Download CV
          </a>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="w-full h-[60vh] max-h-[60vh] overflow-hidden bg-transparent">
          <iframe
            src="/Resume.pdf"
            title="Resume Viewer"
            className="w-full h-full"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ResumePage;
