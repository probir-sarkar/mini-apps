import { useFlexContext } from "../context-provider";
import { motion } from "motion/react";

const FlexSection = () => {
  const { flexStyles, easing, boxes, selectedshape } = useFlexContext();
  return (
    <div className="flex h-full w-full" style={{ ...flexStyles }}>
      {new Array(boxes).fill(0).map((_, i) => {
        return (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: easing }}
            whileHover={{ scale: 1.1 }}
            key={i}
            className="w-20 bg-primary text-secondary flex items-center justify-center"
            style={{ ...selectedshape.value }}
          >
            {i + 1}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FlexSection;
