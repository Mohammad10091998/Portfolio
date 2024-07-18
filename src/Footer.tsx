import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="bg-customDarkGray w-full">
      <div className="flex flex-col justify-center items-center py-6">
        <div className="flex justify-center items-center mt-2 text-stone-400">
          <button
            className="ml-4 transition-transform duration-200 hover:border-gray-50 hover:border-b"
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
            className="ml-4 transition-transform duration-200 hover:border-gray-50 hover:border-b"
            onClick={() =>
              window.open("https://github.com/Mohammad10091998", "_blank")
            }
          >
            Github
          </button>
          <button
            className="ml-4 transition-transform duration-200 hover:border-gray-50 hover:border-b"
            onClick={() =>
              window.open("https://leetcode.com/u/Mohammad_/", "_blank")
            }
          >
            Leetcode
          </button>
        </div>
        <div className="flex justify-center items-center mt-2 text-stone-400">
          <FontAwesomeIcon icon={faCopyright} />
          <h4 className="ml-1">2024 Mohammad Asif</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
