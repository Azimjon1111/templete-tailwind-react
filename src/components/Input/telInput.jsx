import React, { useState } from "react";
import { MuiTelInput } from "mui-tel-input";


const Input = () => {
  const [value, setValue] = useState("+998");
  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <>
      <MuiTelInput value={value} onChange={handleChange} />
    </>
  );
};

export default Input;
