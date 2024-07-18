import React from "react";

interface AboutCardProps {
  profileImage: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ profileImage }) => {
  return (
    <div className="flex flex-col sm:flex-row text-gray-600 dark:text-gray-100 bg-white dark:bg-customDarkGray dark:border dark:border-black shadow-lg dark:shadow-2xl rounded-lg overflow-hidden">
      <img
        src={profileImage}
        alt="Profile"
        className="w-full sm:w-1/3 object-cover"
      />
      <div className="p-6 sm:p-8">
        <h2 className="mb-2 text-2xl font-semibold">About Me</h2>
        <p className="mb-2">
          I am a full-stack developer with 2.5 years of experience in web
          development, specializing in UI and API development using React and
          Dotnet Core. Recognized for strong work ethics, critical thinking, and
          effective problem-solving.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
