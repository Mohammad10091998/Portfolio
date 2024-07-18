import { useRef, useState } from "react";

interface BarButtonComponentProps {
  isBarNavVisible: boolean;
  toggleNavBarVisibility: () => void;
}

const BarButton: React.FC<BarButtonComponentProps> = ({
  isBarNavVisible,
  toggleNavBarVisibility,
}) => {
  const [positionMenu, setPositionMenu] = useState({ x: 0, y: 0 });
  const barOuterDivRef = useRef<HTMLDivElement>(null);

  function getBarPosition(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const outerDiv = barOuterDivRef.current;
    if (outerDiv) {
      const rect = outerDiv.getBoundingClientRect();
      const rectXCenter = rect.left + (rect.right - rect.left) / 2;
      const rectYCenter = rect.top + (rect.bottom - rect.top) / 2;
      const x = (e.clientX - rectXCenter) * 0.3;
      const y = (e.clientY - rectYCenter) * 0.3;
      setPositionMenu({ x, y });
    }
  }
  function resetBarPosition() {
    setPositionMenu({ x: 0, y: 0 });
  }

  const barDivStyle = {
    transform: `translate(${positionMenu.x}px, ${positionMenu.y}px)`,
    transition: "transform 0.2s ease", // Smooth transition
  };

  return (
    <div
      ref={barOuterDivRef}
      onMouseMove={getBarPosition}
      onMouseLeave={resetBarPosition}
      className="fixed h-24 top-0 w-24 right-0 z-20"
    >
      <button
        className={`h-12 w-12 mt-5 m-auto flex items-center justify-center rounded-full bg-black dark:bg-gray-100 transition-all duration-500 hover:bg-gradient-animation-filled ${
          isBarNavVisible && "bg-blue-500"
        }`}
        style={barDivStyle}
        onClick={toggleNavBarVisibility}
      >
        <div className="flex flex-col">
          <span
            className={`mb-2 h-0.5 w-6 bg-gray-50 dark:bg-gray-950 transition-transform duration-500 ease-in-out transform origin-center ${
              isBarNavVisible ? "rotate-45 translate-y-1" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-gray-50 dark:bg-gray-950 transition-transform duration-500 ease-in-out transform origin-center ${
              isBarNavVisible ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
      </button>
    </div>
  );
};

export default BarButton;
