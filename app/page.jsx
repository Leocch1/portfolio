import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
import ParticlesContainer from "../components/ParticlesContainer";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full relative overflow-hidden">

      {/* Particles Background */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <ParticlesContainer />
      </div>
      
      <div className="container mx-auto h-full relative">
        {/* Main Flex Container */}
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 sm:mb-10">
          
          {/* Text Section */}
          <div className="text-center xl:text-left lg:mx-6 order-2 xl:order-none mb-24 sm:mb-16">
            <span className="text-xl">Computer Science Student</span>
            <h1 className="h1 mb-6">
              {`Hello I'm`} <br /> <span className="text-accent">Leo Jimenez</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              Dedicated CS Student | Eager to Tackle Real-World Problems with Technology.
              Specializing in Software Development and Data Structures.
              Building Skills in Web Development and Algorithms.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a 
                href="/Resume.pdf" 
                target="_blank"
                className="uppercase flex items-center gap-2"
              >
                <Button variant="outline" size="lg">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
      <div className="xl:h-0 sm:h-24"></div>
    </section>
  );
};

export default Home;
