import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import profileImage from "./assets/croppedAsifImage.jpg";
import AboutCard from "./AboutCard";
import HobbiesCard from "./HobbiesCard";
import EducationSection from "./EducationSection";
import Contact from "./Contact";
import useSessionState from "./useSessionState"; // Import the custom hook

const greetings = [
  "Hello",
  "नमस्ते",
  "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ",
  "নমস্কার",
  "آداب",
  "வணக்கம்",
  "నమస్కరం",
  "કેમ છો",
  "ନମସ୍କାର",
];

const Home = () => {
  const [showGreetings, setShowGreetings] = useSessionState("showGreetings");
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [initialLoading, setInitialLoading] = useState(true);
  const [positionODiv, setPositionODiv] = useState({ x: 0, y: 0 });
  const [redDotPosition, setRedDotPosition] = useState({ x: 0, y: 0 });

  const oDivRef = useRef<HTMLDivElement>(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      getPositionofODiv();

      const xDiff = event.clientX - positionODiv.x;
      const yDiff = event.clientY - positionODiv.y;
      const angle = Math.atan2(yDiff, xDiff);
      const distance = 18;

      const x = distance * Math.cos(angle) + 16;
      const y = distance * Math.sin(angle) + 20;

      setRedDotPosition({ x, y });
    };

    const getPositionofODiv = () => {
      const oDiv = oDivRef.current;
      if (oDiv) {
        const rect = oDiv.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        setPositionODiv({ x, y });
        console.log(rect.width, rect.height);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [cursorX, cursorY, positionODiv]);

  useEffect(() => {
    if (initialLoading) {
      const initialTimer = setTimeout(() => {
        setInitialLoading(false);
      }, 600);
      return () => clearTimeout(initialTimer);
    }
    if (currentGreeting < greetings.length) {
      const timer = setTimeout(() => {
        setCurrentGreeting((prev) => prev + 1);
      }, 250); // Show each greeting for 1 second
      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(() => {
        setShowGreetings(false);
      }, 100); // Transition to home content after the last greeting
      return () => clearTimeout(finalTimer);
    }
  }, [currentGreeting, initialLoading, setShowGreetings]);

  return (
    <div className="bg-customLightGray dark:bg-black overflow-hidden">
      <AnimatePresence>
        {showGreetings && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 flex flex-col justify-center items-center h-screen w-full z-30 bg-black"
          >
            {!initialLoading && (
              <motion.h1
                key={currentGreeting}
                className="text-3xl text-customLightGray"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {greetings[currentGreeting]}
              </motion.h1>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {!showGreetings && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${
            showGreetings ? "h-screen" : "h-full"
          } mb-8 w-11/12 lg:w-4/5 bg-gray-50 dark:bg-customDarkGray mx-auto shadow-2xl`}
        >
          <div className="font-mono">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col text-gray-600 dark:text-gray-300 items-center justify-center font-semibold ">
                <h1 className="text-4xl mt-4">HEY, I'M</h1>
                <div className="flex items-center justify-center flex-row">
                  <h2 className="text-3xl mr-1">M</h2>
                  <div className="h-12 w-12 relative" ref={oDivRef}>
                    <div className="absolute top-4 left-3 h-5 w-5 bg-gray-300 rounded-full shadow-md"></div>
                    <motion.div
                      className="absolute h-3 w-3 bg-red-800 rounded-full shadow-lg"
                      style={{
                        left: redDotPosition.x + "px",
                        top: redDotPosition.y + "px",
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "linear",
                      }}
                    />
                  </div>
                  <h2 className="text-3xl">HAMMAD ASIF</h2>
                </div>
              </div>

              <div className="flex mt-4 text-blue-700 dark:text-blue-400">
                <button
                  className="shadow-sm p-3 rounded-full hover:text-blue-500"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1ebUpsYBaK53Ck7HwFF_kY34a2ISGo353/view",
                      "_blank"
                    )
                  }
                >
                  View CV
                </button>
                <button
                  className="shadow-sm p-3 rounded-full hover:text-blue-500"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/asifmohammad1998/",
                      "_blank"
                    )
                  }
                >
                  LinkedIn
                </button>
              </div>

              <div className="container mx-auto p-4">
                <AboutCard profileImage={profileImage} />
                <HobbiesCard />
                <EducationSection />
                <Contact />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
