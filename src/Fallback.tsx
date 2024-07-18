
const Fallback = () => {
  return (
    <div className="h-screen bg-customLightGray dark:bg-black flex items-center justify-center">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-300 dark:bg-gray-600 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Fallback;
