import { useState } from "react";
import PropertySelector from "./property-selector";
import { AnimatePresence, motion, AnimationProps } from "framer-motion"; // Correct import
import { cn } from "@/lib/utils";
import BoxProperties from "./box-properties";

const animation: AnimationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.3 },
};

const Sidebar = () => {
  const [openAccordion, setOpenAccordion] = useState<number[]>([0]);

  const toggleAccordion = (index: number) => {
    if (openAccordion.length === 1 && openAccordion[0] === index) return;
    setOpenAccordion((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <aside className="max-w-[20%] w-full bg-secondary flex-1 rounded-2xl overflow-hidden flex flex-col max-h-full">
      {/* Section 0 */}
      <div
        className={cn("shrink-0 overflow-auto", {
          "flex-1": openAccordion.includes(0),
        })}
      >
        <div
          className="p-4 text-primary font-semibold text-xl bg-secondary shadow-2xs border-b border-primary cursor-pointer"
          onClick={() => toggleAccordion(0)}
        >
          Flex Properties
        </div>
        <AnimatePresence>
          {openAccordion.includes(0) && (
            <motion.div className="flex-1 overflow-y-auto my-2" {...animation}>
              <PropertySelector />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Section 1 */}
      <div
        className={cn("shrink-0 overflow-auto", {
          "flex-1": openAccordion.includes(1),
        })}
      >
        <div
          className="p-4 text-primary font-semibold text-xl bg-secondary shadow-2xs border-b border-primary cursor-pointer"
          onClick={() => toggleAccordion(1)}
        >
          Box Properties
        </div>
        <AnimatePresence>
          {openAccordion.includes(1) && (
            <motion.div className="flex-1 overflow-y-auto my-2" {...animation}>
              <BoxProperties />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
};

export default Sidebar;
