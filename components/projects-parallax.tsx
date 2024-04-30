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
  //   const pic1 =
  //     "https://img.freepik.com/free-vector/paradise-tropical-beach-with-lovely-sunset_23-2147886686.jpg?t=st=1714427624~exp=1714431224~hmac=448f1ce9773b891fb14940223d12f69aebf7825ad905004b0cc67cca57653e95&w=740";
  //   const pic2 =
  //     "https://img.freepik.com/free-vector/landscape-with-mountains-nature_603843-1321.jpg?t=st=1714427670~exp=1714431270~hmac=8603db2d13a50fd4a96fc3e21e30fdc188cc00ee14f648e2e25849645b27721d&w=740";
  //   const pic3 =
  //     "https://img.freepik.com/free-vector/autumn-landscape-with-trees-night_107791-11603.jpg?t=st=1714427697~exp=1714431297~hmac=8ded418d6238877d0af37a13f3707baba7be2dc5efea453286adacdb7ae77814&w=1060";

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
