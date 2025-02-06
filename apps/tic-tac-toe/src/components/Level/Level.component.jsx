import { useContext } from "react";
import { PlayersContext } from "../../contexts/players.context";
import { AnimatePresence, motion } from "motion/react";

const levels = [
  { id: 1, label: "Easy" },
  { id: 2, label: "Medium" },
  { id: 3, label: "Hard" }
];
const Level = () => {
  const { level, setLevel, tableData } = useContext(PlayersContext);

  const handleLevel = (level) => {
    //   check if tableData every cell is blank
    if (tableData.every((cell) => cell === "")) {
      setLevel(level);
    } else {
      alert("You can't change level while playing");
    }
  };

  return (
    <div className="flex flex-grow justify-center items-center mb-10 my-4 gap-5  flex-wrap">
      {levels.map(({ id, label }) => (
        <motion.button
          key={id}
          className={`relative  px-10 py-2.5 border-2 dark:border-white bg-white border-black dark:bg-black rounded  flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out `}
          onClick={() => handleLevel(id)}
          whileHover={{ scale: 1.05 }} // Hover animation
          whileTap={{ scale: 0.95 }} // Tap animation
        >
          <span className="mix-blend-difference z-10 text-white">{label}</span>
          <AnimatePresence>
            {level == id && (
              <motion.div
                layout="position"
                layoutId="underline"
                initial={{ opacity: 0 }} // Initial animation state
                animate={{ opacity: 1 }} // Animate when active
                exit={{ opacity: 0 }} // Exit animation
                className="absolute rounded-xs top-0 left-0 w-full h-full dark:bg-white bg-black "
              />
            )}
          </AnimatePresence>
        </motion.button>
      ))}
    </div>
  );
};

export default Level;
