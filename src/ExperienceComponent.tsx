interface ExperienceComponentProp {
  image: string;
  companyName: string;
  date: string;
}
function ExperienceComponent({
  image,
  companyName,
  date,
}: ExperienceComponentProp) {
  return (
    <div className="mx-2 flex flex-col  sm:flex-row sm:items-center justify-between text-gray-600 dark:text-gray-300">
      <div className="flex items-center ">
        <img
          src={image}
          alt="Profile"
          className="font-semibold after:h-12 w-12 rounded-full object-contain shadow-sm mr-3"
        />
        <h2 className="">{companyName}</h2>
      </div>
      <p className="text-sm my-2">{date}</p>
    </div>
  );
}

export default ExperienceComponent;
