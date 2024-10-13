import React from "react";
import Link from "next/link";

interface ButtonPropTypes {
  label: string;
  onClick: () => void; // Changed from link to onClick
  customClasses: string;
  children?: React.ReactNode;
}

const ButtonDefault = ({
  label,
  onClick, // Updated prop
  customClasses,
  children,
}: ButtonPropTypes) => {
  return (
    <>
      <button
        className={`inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 ${customClasses}`}
        onClick={onClick} // Added onClick handler
      >
        {children}
        {label}
      </button>
    </>
  );
};

export default ButtonDefault;
