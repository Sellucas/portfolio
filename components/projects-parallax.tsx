import Image from "next/image";
import { motion, useScroll, useTransform as setTransform } from "framer-motion";
import { useRef } from "react";

interface ProjectsParallaxProps {
  title: string;
  description: string;
  pic1: string;
  pic2: string;
  pic3: string;
}

const ProjectsParallax = ({
  title,
  description,
  pic1,
  pic2,
  pic3,
}: ProjectsParallaxProps) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = setTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = setTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = setTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <div ref={container} className="mt-[60vh] min-h-screen">
      <div className="ml-[10vw]">
        <motion.h1
          style={{ y: sm }}
          className="m-0 mt-2 text-7xl font-semibold uppercase"
        >
          {title}
        </motion.h1>
        <h1 className="m-0 mt-2 text-2xl font-semibold uppercase">
          {description}
        </h1>
      </div>

      <div className="flex w-full justify-center relative mt-[5vh]">
        <motion.div
          style={{ y: 0 }}
          className="absolute h-[60vh] w-[50vh] z-10"
        >
          <Image className="object-cover" src={pic1} alt="image" fill />
        </motion.div>
        <motion.div
          style={{ y: lg }}
          className="absolute h-[40vh] w-[30vh] z-20 left-[50vw] top-[15vh]"
        >
          <Image className="object-cover" src={pic2} alt="image" fill />
        </motion.div>
        <motion.div
          style={{ y: md }}
          className="absolute h-[25vh] w-[20vh] z-30 left-[24.5vw] top-[40vh]"
        >
          <Image className="object-cover" src={pic3} alt="image" fill />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsParallax;
