import { motion } from "framer-motion";
import imrielImage from "./assets/imrielimg.jpg";
import infosysImg from "./assets/infosysImg.jpg";
import cheggImg from "./assets/cheggImage.png";
import reactImage from "./assets/reactImage.png";
import dotnetImage from "./assets/dotnetcoreImage.png";
import sqlImg from "./assets/sqlServerImage.png";
import azurImage from "./assets/azureImg.jpg";
import kafkaImage from "./assets/kafkaImage.png";
import typescriptImage from "./assets/typescriptImage.png";
import blobImage from "./assets/blobImage.png";
import { useEffect, useState } from "react";
import ExperienceComponent from "./ExperienceComponent";
import ExperienceCard from "./ExperienceCard";
import ExperienceMoreComponent from "./ExperienceMoreComponent";

function Experience() {
  const [viewWork, setViewWork] = useState(false);

  useEffect(() => {
    if (!viewWork) {
      const initialTimer = setTimeout(() => {
        setViewWork(true);
      }, 500);
      return () => clearTimeout(initialTimer);
    }
  }, [viewWork]);

  return (
    <div
      className={`${
        !viewWork && "h-screen"
      } bg-customLightGray dark:bg-black overflow-hidden font-mono`}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="justify-center  items-center h-full w-11/12 lg:w-4/5 bg-white dark:bg-customDarkGray  mx-auto shadow-lg"
      >
        <h1 className="text-center pt-6 text-4xl font-semibold text-gray-600 dark:text-gray-300">
          Experience
        </h1>
        {viewWork && (
          <div>
            <div className="mt-6 mx-4 sm:mx-8 lg:mx-12">
              <ExperienceComponent
                image={imrielImage}
                companyName="Imriel Technology Solutions Pvt Ltd"
                date="Jan 2023 - Present"
              />

              <ExperienceCard
                subCompanyName=" Molecular Testing Labs"
                aboutCompany=" Diagnostic laboratory that focuses on revolutionizing
                        access to healthcare through innovative diagnostic
                        solutions."
                skills={[
                  reactImage,
                  dotnetImage,
                  sqlImg,
                  kafkaImage,
                  azurImage,
                  typescriptImage,
                ]}
              >
                <ExperienceMoreComponent
                  workList={[
                    "Developed and maintained dynamic front-end components using React and Material-UI, ensuring a responsive and user-friendly interface.",
                    "Enhanced the modularity and reusability of the front-end codebase by creating complex components.",
                    "Implemented optimized code to efficiently display lab processes, providing a smooth user experience.",
                    "Contributed to the design and implementation of a robust microservices architecture, enhancing system scalability and efficiency.",
                    "Utilized Kafka for seamless data synchronization, ensuring real-time updates across the application.",
                    "Implemented intricate business logic within the backend operations to cater to the complexities of lab testing workflows.",
                    "Specialized in API development, focusing on creating and optimizing backend operations crucial for accurate patient report generation.",
                    "Worked on a large-scale database, emphasizing data integrity and reliability in the system.",
                    " Wrote unit test cases using testing frameworks such as Moq and Xunit to ensure code quality and reliability",
                  ]}
                />
              </ExperienceCard>

              <ExperienceCard
                subCompanyName="State Fair of Texas"
                aboutCompany="The State Fair of Texas is an annual state fair held in
                        Dallas at historic Fair Park."
                skills={[dotnetImage, sqlImg, blobImage]}
              >
                <ExperienceMoreComponent
                  workList={[
                    "Developed a tailored web application for the State Fair of Texas to streamline vendor management processes during their annual fair event.",
                    "Integrated a robust reporting mechanism into the web app, utilizing SMTP protocols to automatically generate and send detailed reports to vendors.",
                  ]}
                />
              </ExperienceCard>

              <ExperienceCard
                subCompanyName=" Imriel Training"
                aboutCompany="An application to give compliance training to new
                        employees."
                skills={[reactImage, dotnetImage, sqlImg, typescriptImage]}
              >
                <ExperienceMoreComponent
                  workList={[
                    "Developed and maintained dynamic front-end components using React and Material-UI.",
                    "Contributed to the design and implementation of a robust CQRS architecture.",
                    "Leading, and assisting with teams as well as Peer-reviewing code to ensure the highest possible code quality and clean coding standards in software products.",
                    "API development, focusing on creating and optimizing backend operations.",
                  ]}
                />
              </ExperienceCard>
            </div>

            <div className="mt-6 mx-4 sm:mx-8 lg:mx-12">
              <ExperienceComponent
                image={infosysImg}
                companyName="Infosys"
                date="Jan 2022 - Dec 2022"
              />

              <ExperienceCard
                subCompanyName="TalkTalk"
                aboutCompany="TalkTalk Telecom is a British telecommunications company
                        that provides pay television and Internet access
                        services to businesses and consumers in the United
                        Kingdom."
                skills={[dotnetImage, sqlImg]}
              >
                <ExperienceMoreComponent
                  workList={[
                    "Developed and maintained backend systems for the TalkTalk project, a prominent UK-based telecom company. Designed and implemented RESTful Web APIs using .NET Core.",
                    "Wrote unit test cases using testing frameworks such as Moq and Xunit to ensure code quality and reliability.",
                  ]}
                />
              </ExperienceCard>
            </div>

            <div className="my-10 mx-4 sm:mx-8 lg:mx-12 text-gray-600 dark:text-gray-300">
              <div className="mx-2 flex flex-col  sm:flex-row sm:items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={cheggImg}
                    alt="Profile"
                    className="h-12 w-12 rounded-full object-contain shadow-sm mr-3"
                  />
                  <div className="flex flex-col">
                    <h2 className="dark:text-gray-300">
                      Chegg Freelance Independent Contractor
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Solved Engineering Maths Problem
                    </p>
                  </div>
                </div>
                <div className="flex flex-col mt-2 sm:pt-8 text-sm">
                  <p>March 2021 - Jan 2022</p>
                  <button
                    className="bg-blue-500 dark:bg-blue-400 text-customLightGray dark:text-gray-800 my-6 h-10 w-40 rounded-lg shadow-lg hover:bg-blue-400 hover:scale-110 hover:shadow-xl transition duration-300 ease-in-out transform"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1eZ3GbL11PWtKdCpeUpaSOwHJK4FlMYtC/view",
                        "_blank"
                      )
                    }
                  >
                    Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Experience;
