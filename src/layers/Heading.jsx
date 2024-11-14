import React from "react";

const Heading = ({ className, headingText }) => {
  return (
    <h2
      className={`font-semibold text-[32px] text-primary_textColor ${className}`}
    >
      {headingText}
    </h2>
  );
};

export default Heading;
