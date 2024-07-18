import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import EducationCard from "./EducationCard";
import jamiaImage from "./assets/jamiaImage.png";
import bitsImage from "./assets/bitsImage.jpg";
import amuImage from "./assets/amuImage.png";

const EducationSection: React.FC = () => {
  const educationRef = useRef(null);
  const isEdInView = useInView(educationRef, { once: true });

  return (
    <motion.div
      ref={educationRef}
      initial={{ x: "100%" }}
      animate={isEdInView ? { x: 0 } : { x: "100%" }}
      transition={{ duration: 0.5 }}
      className="my-6 text-gray-600 dark:text-gray-100 bg-white dark:bg-customDarkGray dark:border dark:border-black shadow-lg dark:shadow-2xl rounded-lg p-6"
    >
      <h2 className="text-xl font-semibold">Education</h2>
      <div className="mt-4">
        <EducationCard
          image={bitsImage}
          degree="M.Tech Software Engineering"
          institution="BITS Pilani WILP"
          period="2024 - 2026"
        />
        <EducationCard
          image={jamiaImage}
          degree="B.Tech Electrical"
          institution="Jamia Millia Islamia, New Delhi"
          period="2017 - 2021"
          extraInfo="8.8 CGPA"
        />
        <EducationCard
          image={amuImage}
          degree="Higher Secondary Science"
          institution="Aligarh Muslim University, U.P."
          period="2014 - 2016"
          extraInfo="79.6 percent"
        />
      </div>
    </motion.div>
  );
};

export default EducationSection;
