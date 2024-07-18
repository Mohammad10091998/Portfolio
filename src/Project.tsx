import { motion } from "framer-motion";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project() {
  const gearVariants = {
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="bg-customLightGray dark:bg-black overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-8 h-screen w-11/12 lg:w-4/5 bg-custom-gradient mx-auto shadow-2xl"
      >
        <div className="font-mono mt-8">
          <h1 className="text-center pt-6 text-4xl font-semibold text-gray-300">
            Project
          </h1>
          <div className="text-gray-300">
            <h1 className="text-4xl text-center mt-4 font-semibold">
              Auto Test
            </h1>
            <p className="text-center m-4">
              API testing web app powered by React, Firebase, and .NET Core Web
              API.
            </p>
            <div className="flex items-center text-gray-50 text-4xl flex-col">
              <motion.button
                className="m-5 hover:text-blue-200 hover:scale-110 transition duration-300 ease-in-out transform"
                onClick={() =>
                  window.open(
                    "https://auto-test-nine.vercel.app/home",
                    "_blank"
                  )
                }
              >
                <motion.div variants={gearVariants} animate="rotate">
                  <FontAwesomeIcon
                    className="hover:scale-110 transition duration-300 ease-in-out transform"
                    icon={faGear}
                  />
                </motion.div>
                <p className="text-sm m-2">Live Website</p>
              </motion.button>

              <div className="flex">
                <motion.button
                  className="m-8 hover:text-blue-200 hover:scale-110 transition duration-300 ease-in-out transform"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/posts/asifmohammad1998_hi-all-im-excited-to-share-that-my-company-activity-7210550502936219648-uD-0?utm_source=share&utm_medium=member_desktop",
                      "_blank"
                    )
                  }
                >
                  <motion.div variants={gearVariants} animate="rotate">
                    <FontAwesomeIcon className="" icon={faGear} />
                  </motion.div>
                  <p className="text-sm mt-3">Video Demo</p>
                </motion.button>
                <motion.button
                  className="m-8 hover:text-blue-200 hover:scale-110 transition duration-300 ease-in-out transform"
                  onClick={() =>
                    window.open(
                      "https://github.com/Mohammad10091998/auto_test_ui/blob/main/README.md#features",
                      "_blank"
                    )
                  }
                >
                  <motion.div variants={gearVariants} animate="rotate">
                    <FontAwesomeIcon
                      className="hover:scale-110 transition duration-300 ease-in-out transform"
                      icon={faGear}
                    />
                  </motion.div>
                  <p className="text-sm mt-3">Documentation</p>
                </motion.button>
              </div>
            </div>

            <p className="text-center mx-4 sm:mx-8 lg:mx-20 max-h-24 text-sm sm:text-base">
              API Testing tool created to simplify the process of testing APIs.
              It provides a graphical user interface for interacting with APIs
              and includes a powerful backend with algorithms to conduct
              comprehensive testing, ensuring both positive and negative test
              scenarios are covered.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Project;
