import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import BarButton from "./BarButton";
import SideBarMenu from "./SideBarMenu";
import { Link, useLocation } from "react-router-dom";
import NavigationLarge from "./NavigationLarge";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  const [isBarNavVisible, setIsBarNavVisible] = useState(false);
  const [positionCopyRight, setPositionCopyRight] = useState({ x: 0, y: 0 });
  const copyOuterDivRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isHome = location.pathname.includes("/home");
  const isExp = location.pathname.includes("/experience");
  const isProj = location.pathname.includes("/project");

  function getCopyRightPosition(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const copyOuterDiv = copyOuterDivRef.current;
    if (copyOuterDiv) {
      const rect = copyOuterDiv.getBoundingClientRect();
      const rectXCenter = rect.left + (rect.right - rect.left) / 2;
      const rectYCenter = rect.top + (rect.bottom - rect.top) / 2;
      const x = (e.clientX - rectXCenter) * 0.2;
      const y = (e.clientY - rectYCenter) * 0.2;
      setPositionCopyRight({ x, y });
    }
  }
  function resetCopyRightPosition() {
    setPositionCopyRight({ x: 0, y: 0 });
  }

  const copyRightDivStyle = {
    transform: `translate(${positionCopyRight.x}px, ${positionCopyRight.y}px)`,
    transition: "transform 0.2s ease", // Smooth transition
  };

  function toggleNavBarVisibility() {
    setIsBarNavVisible((prev) => !prev);
  }

  return (
    <div className="bg-customLightGray dark:bg-black text-customDarkGray dark:text-gray-100 h-24">
      <div className="h-full flex justify-between items-center mx-4 sm:mx-8 lg:mx-12">
        <div className="flex">
          <div
            className="flex items-center justify-center w-48 group relative"
            onMouseMove={getCopyRightPosition}
            ref={copyOuterDivRef}
            onMouseLeave={resetCopyRightPosition}
          >
            <div className={`flex items-center`} style={copyRightDivStyle}>
              <FontAwesomeIcon
                icon={faCopyright}
                className="mr-1 transform transition-transform duration-500 group-hover:animate-rotate360"
              />
              <Link to="/home" className="w-36 overflow-hidden relative text-sm sm:text-base">
                <p className="font-semibold font-mono transition-transform duration-500 transform group-hover:-translate-x-16">
                  Code by Mohammad
                </p>
                <p className="font-semibold absolute left-36 top-0 transition-transform duration-500 group-hover:-translate-x-16">
                  Asif
                </p>
              </Link>
            </div>
          </div>
          <DarkModeToggle />
        </div>
        <div className="hidden lg:flex items-center justify-center font-mono">
          <NavigationLarge
            pageName="Home"
            navigateTo="home"
            isOnThePage={isHome}
          />

          <NavigationLarge
            pageName="Experience"
            navigateTo="experience"
            isOnThePage={isExp}
          />

          <NavigationLarge
            pageName="Project"
            navigateTo="project"
            isOnThePage={isProj}
          />
        </div>

        <div className={`lg:hidden`}>
          <BarButton
            isBarNavVisible={isBarNavVisible}
            toggleNavBarVisibility={toggleNavBarVisibility}
          />
          <SideBarMenu
            isVisible={isBarNavVisible}
            toggleBarNavVisibility={setIsBarNavVisible}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
