import { motion } from "motion/react";
import { useState } from "react";

type VideoCardProps = {
  src: string;
};

const VideoCard = ({ src }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.video
      autoPlay
      muted
      loop
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-150 h-150  object-cover transition-all duration-500 ease-in-out ${
        isHovered ? "rounded-full" : "rounded-none"
      }`}
      src={src}
     
    />
  );
};

export default VideoCard;
