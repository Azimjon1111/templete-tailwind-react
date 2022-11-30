import React from "react";

const Input = ({ type, disabled, className, placeholder }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={
          disabled
            ? `cursor-not-allowed disabled border-[1px solid gray] border-2 rounded-3xl px-6 py-3`
            : `border-[1px solid gray] border-2 rounded-3xl px-6 py-3 ${className}`
        }
        disabled={disabled}
      />
    </>
  );
};

export default Input;
