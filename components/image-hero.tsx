import { motion } from "framer-motion";
import Image from "next/image";

interface ImageWithAnimationProps {
  src: string;
  alt: string;
  delay: number;
}

export const ImageHero = ({ src, alt, delay }: ImageWithAnimationProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 20, stiffness: 100, delay }}
    >
      <Image
        src={src}
        alt={alt}
        width={430}
        height={932}
        className="rounded-3xl drop-shadow-lg"
      />
    </motion.div>
  );
};
