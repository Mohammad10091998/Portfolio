import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const contactRef = useRef(null);
  const isContactInView = useInView(contactRef, { once: true });
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("mohdasifamu1998@gmail.com");
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  };

  return (
    <div ref={contactRef} className="my-6">
      {isContactInView && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 dark:text-gray-100 bg-white dark:bg-customDarkGray dark:border dark:border-black shadow-lg dark:shadow-2xl w-full  rounded-lg p-6 font-mono text-center"
        >
          <h1 className="text-2xl font-semibold">Hi there, let's connect</h1>
          <div className="p-6 rounded-lg shadow-inner">
            <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">
              Send me the email
            </h2>
            <div className="flex flex-col space-y-4">
              <button
                onClick={copyEmailToClipboard}
                className="flex items-center justify-center bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300 w-full md:w-auto"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-stone-600"
                />
                <p className="text-stone-600 truncate max-w-full md:max-w-none">
                  mohdasifamu1998@gmail.com
                </p>
              </button>
              <p className="text-sm text-stone-500 dark:text-stone-400">
                SOCIALS
              </p>
              <div className="flex justify-around text-sm sm:text-base text-stone-600 dark:text-stone-300 mt-4">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/asifmohammad1998/",
                      "_blank"
                    )
                  }
                  className="hover:text-stone-400 transition duration-300 mx-0.5"
                >
                  LinkedIn
                </button>
                <button
                  onClick={() =>
                    window.open("https://github.com/Mohammad10091998", "_blank")
                  }
                  className="hover:text-stone-400 transition duration-300 mx-0.5"
                >
                  Github
                </button>
                <button
                  onClick={() =>
                    window.open("https://leetcode.com/u/Mohammad_/", "_blank")
                  }
                  className="hover:text-stone-400 transition duration-300 mx-0.5"
                >
                  Leetcode
                </button>
              </div>
            </div>
            <AnimatePresence>
              {emailCopied && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 text-green-500 font-semibold"
                >
                  Email copied to clipboard!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Contact;
