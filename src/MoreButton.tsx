import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface MoreButtonProps {
  isWorkVisible: boolean;
  toggleWorkVisibility: () => void;
}

const MoreButton: React.FC<MoreButtonProps> = ({
  isWorkVisible,
  toggleWorkVisibility,
}) => {
  return (
    <button
      className="p-2 text-gray-50 dark:text-gray-700 bg-blue-500 dark:bg-blue-400 flex items-center justify-center rounded-lg transition-all duration-500"
      onClick={toggleWorkVisibility}
    >
      <span className="mx-2">{isWorkVisible ? "Less" : "More"}</span>
      <FontAwesomeIcon
        className={`mx-2 transform transition-transform duration-500 ${isWorkVisible ? "rotate-180" : "rotate-0"}`}
        icon={faChevronDown}
      />
    </button>
  );
};

export default MoreButton;
