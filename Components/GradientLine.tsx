import React from "react";

function GradientLine() {
  return (
    <div className="md:hidden flex justify-center w-full">
      <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent my-8"></div>
    </div>
  );
}

export default GradientLine;
