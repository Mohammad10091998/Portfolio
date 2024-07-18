interface ExperienceMoreComponentProp {
    workList: string[];
  }
  
  function ExperienceMoreComponent({ workList }: ExperienceMoreComponentProp) {
    return (
      <div className="mt-4 border border-gray-200 p-6 rounded-lg shadow-md bg-white dark:bg-customLittleDarkGray text-gray-600 dark:text-gray-300 dark:border dark:border-gray-800">
        <ul className="space-y-4">
          {workList.map((work, index) => (
            <li key={index} className="border-b border-gray-200 pb-2 last:border-b-0 dark:border-b dark:border-gray-800" >
              {work}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ExperienceMoreComponent;
  