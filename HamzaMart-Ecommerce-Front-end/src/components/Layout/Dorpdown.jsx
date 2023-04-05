import React from "react";

const Dorpdown = ({ children, className, title, dropef }) => {
  return (
    <div className={className} ref={dropef}>
      {title}
      {children}
    </div>
  );
};

export default Dorpdown;
