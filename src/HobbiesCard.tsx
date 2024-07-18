import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const HobbiesCard: React.FC = () => {
  const hobbyRef = useRef(null);
  const isHobbiesInView = useInView(hobbyRef, { once: true });
  return (
    <div ref={hobbyRef} className="my-6">
      {isHobbiesInView && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 dark:text-gray-100 bg-white dark:bg-customDarkGray dark:border dark:border-black shadow-lg dark:shadow-2xl rounded-lg p-6 my-6"
        >
          <h2 className="text-xl font-semibold">Hobbies</h2>
          <ul className="list-inside  mt-4">
            <li className="mt-1">
              Skilled in badminton and table tennis; average cricket player.
            </li>
            <li className="mt-1">
              Enjoys traveling, currently exploring the South of India.
            </li>
            <li className="mt-1">Passionate about food.</li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default HobbiesCard;
