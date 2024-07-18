import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import './Bulb.css'; // Import the CSS file

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`bulb-icon ${isDarkMode ? 'bulb-off' : 'bulb-on'}`}
    >
      <FontAwesomeIcon className='text-4xl' icon={faLightbulb} />
    </button>
  );
};

export default DarkModeToggle;
