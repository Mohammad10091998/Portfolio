import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface SideBarNavigationProp {
  pageName: string;
  navigateTo: string;
  toggleBarNavVisibility: Dispatch<SetStateAction<boolean>>;
  isOnPage: boolean;
}
function SideBarNavigation({
  pageName,
  navigateTo,
  toggleBarNavVisibility,
  isOnPage,
}: SideBarNavigationProp) {
  const closeNavVisibilty = () => {
    toggleBarNavVisibility(false);
  };

  return (
    <Link
      onClick={closeNavVisibilty}
      to={`/${navigateTo}`}
      className="flex justify-center items-center group relative my-2 text-gray-50 dark:text-customDarkGray"
    >
      <div
        className={`mt-2 h-2 w-2 ${
          isOnPage ? "opacity-100" : "opacity-0"
        } rounded-full mx-auto transition-all duration-200  bg-gray-50 dark:bg-customDarkGray group-hover:opacity-100 group-hover:-translate-y-1`}
      ></div>
      <div className="ml-4 text-4xl font-mono transition-transform duration-200 group-hover:-translate-y-1">
        {pageName}
      </div>
    </Link>
  );
}

export default SideBarNavigation;
