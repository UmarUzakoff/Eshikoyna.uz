import React from "react";

const Title = ({ text, position }) => {
  return (
    <h3 className={`mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl text-center ${position}`}>
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-normtext from-sky-400">
        {text}
      </span>
    </h3>
  );
};

export default Title;
