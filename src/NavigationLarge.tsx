import { Link } from "react-router-dom";
interface NavigationLargeProps {
  pageName: string;
  navigateTo: string;
  isOnThePage: boolean;
}
function NavigationLarge({
  pageName,
  navigateTo,
  isOnThePage,
}: NavigationLargeProps) {
  return (
    <Link
      to={`/${navigateTo}`}
      className="flex flex-col justify-center items-center group relative"
    >
      <div className="mx-4 font-semibold transition-transform duration-500 group-hover:-translate-y-1">
        {pageName}
      </div>
      <div
        className={`mt-2 h-1.5 w-1.5 ${
          isOnThePage ? "opacity-100" : "opacity-0"
        } rounded-full mx-auto transition-all duration-500 opacity-0 bg-customDarkGray dark:bg-gray-100 group-hover:opacity-100 group-hover:-translate-y-1`}
      ></div>
    </Link>
  );
}

export default NavigationLarge;
