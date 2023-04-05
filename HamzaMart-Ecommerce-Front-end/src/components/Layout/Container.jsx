import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-container  mx-auto px-[10px]  py-[10px] md:py-[15px] lg:py-[15px]">
      {children}
    </div>
  );
};

export default Container;
