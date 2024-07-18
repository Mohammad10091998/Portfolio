import React from 'react';

interface EducationCardProps {
  image: string;
  degree: string;
  institution: string;
  period: string;
  extraInfo?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ image, degree, institution, period, extraInfo }) => {
  return (
    <div className="flex justify-between items-center text-gray-600 dark:text-gray-100 bg-white dark:bg-customLittleDarkGray dark:border dark:border-black shadow-lg dark:shadow-2xl rounded-lg p-4 my-2">
      <div className="flex items-center">
        <img src={image} alt={degree} className="h-10 w-10 rounded-lg object-cover" />
        <div className="ml-4">
          <h1 className="font-semibold">{degree}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">{institution}</p>
        </div>
      </div>
      <div className="text-blue-600 dark:text-blue-400 text-sm text-right">
        <p>{period}</p>
        {extraInfo && <p className="">{extraInfo}</p>}
      </div>
    </div>
  );
}

export default EducationCard;