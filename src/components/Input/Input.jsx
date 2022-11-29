import React from "react";

const Input = ({ type, disabled, className }) => {
  return (
    <>
      <input style={{ borderRadius: "10px", border: "2px solid black"}} type={type} />
    </>
  );
};

export default Input;
