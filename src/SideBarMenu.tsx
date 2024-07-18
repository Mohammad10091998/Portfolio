import { Dispatch, SetStateAction } from "react";
import { useLocation } from "react-router-dom";
import SideBarNavigation from "./SideBarNavigation";

interface SideBarProps {
  isVisible: boolean;
  toggleBarNavVisibility: Dispatch<SetStateAction<boolean>>;
}

function SideBarMenu({ isVisible, toggleBarNavVisibility }: SideBarProps) {
  const location = useLocation();
  const isHome = location.pathname.includes("/home");
  const isExp = location.pathname.includes("/experience");
  const isProj = location.pathname.includes("/project");

  return (
    <div
      className={`fixed flex flex-col justify-around items-center text-gray-50 dark:text-customDarkGray bg-customDarkGray dark:bg-customLightGray top-0 right-0 z-10 w-full sm:w-3/5 h-screen transition-transform duration-500 ease-in-out transform ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="ml-16 mt-28 border-t border-zinc-600 border-1 w-full flex flex-col items-start justify-center">
        <SideBarNavigation
          pageName="Home"
          navigateTo="home"
          isOnPage={isHome}
          toggleBarNavVisibility={toggleBarNavVisibility}
        />

        <SideBarNavigation
          pageName="Experience"
          navigateTo="experience"
          isOnPage={isExp}
          toggleBarNavVisibility={toggleBarNavVisibility}
        />

        <SideBarNavigation
          pageName="Project"
          navigateTo="project"
          isOnPage={isProj}
          toggleBarNavVisibility={toggleBarNavVisibility}
        />
      </div>
      <div className="w-full ml-28">
        <h6 className="text-zinc-500 font-mono font-bold text-sm mb-4">
          SOCIALS
        </h6>
        <div className="flex w-full font-mono font-bold">
          <button
            className=" transition-transform duration-200 hover:-translate-y-1 hover:border-gray-50 hover:border-b dark:hover:border-customDarkGray"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/asifmohammad1998/",
                "_blank"
              )
            }
          >
            LinkedIn
          </button>
          <button
            className=" ml-4 transition-transform duration-200 hover:-translate-y-1 hover:border-gray-50 hover:border-b dark:hover:border-customDarkGray"
            onClick={() =>
              window.open("https://github.com/Mohammad10091998", "_blank")
            }
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBarMenu;
