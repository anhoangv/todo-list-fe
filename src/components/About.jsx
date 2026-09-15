import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col rounded-xl sm:mt-15 z-10 self-center  h-[94.8vh] sm:h-[550px] w-[97.5vw] sm:w-[35vw] shadow-md shadow-black  overflow-hidden align-middle bg-white px-10 py-12 overflow-y-scroll "
      style={{ scrollbarWidth: "none" }}
    >
      <p className="font-bold text-gray-800 text-xl sm:text-lg">
        This project is a modern and interactive TODO List web application built
        using React. It features a clean user interface with support for adding,
        editing, and managing tasks efficiently. The app includes a responsive
        navigation bar, smooth route transitions using React Router, and a
        visually appealing dark/light mode toggle with a circular reveal
        animation. Tailwind CSS was used for rapid and consistent styling, while
        unique task IDs are generated with the uuid library. The project
        demonstrates the use of React hooks for state management, custom
        animations with CSS, and best practices for building single-page
        applications with seamless navigation and user experience.
      </p>
    </div>
  );
};

export default About;
