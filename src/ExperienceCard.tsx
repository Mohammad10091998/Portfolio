import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import MoreButton from "./MoreButton";

interface ExperienceCardProp {
  subCompanyName: string;
  aboutCompany: string;
  skills: string[];
  children?: ReactNode;
}

function ExperienceCard({
  subCompanyName,
  aboutCompany,
  skills,
  children,
}: ExperienceCardProp) {
  const [workVisibility, setWorkVisibility] = useState(false);

  const toggleWorkVisibility = () => {
    setWorkVisibility((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
      className="p-2 my-6 text-gray-600 dark:text-gray-100 bg-white dark:bg-customLittleDarkGray dark:border dark:border-black dark:shadow-2xl hover:bg-gray-100 rounded-lg shadow-md"
    >
      <div className="mt-4 flex flex-col space-y-4">
        <div className="flex flex-col items-start space-y-2">
          <h1 className="text-sm text-blue-600 dark:text-blue-400 font-bold">{subCompanyName}</h1>
          <p className="text-sm">{aboutCompany}</p>
        </div>
        <div className="flex items-center justify-between ">
          <MoreButton
            isWorkVisible={workVisibility}
            toggleWorkVisibility={toggleWorkVisibility}
          />
          <div className="flex flex-wrap justify-center sm:justify-start items-center mt-4 sm:mt-0">
            {skills.map((skill) => (
              <img
                key={skill}
                src={skill}
                alt={skill}
                className="h-10 w-10 rounded-lg shadow-lg mx-2"
              />
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {workVisibility && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ExperienceCard;
