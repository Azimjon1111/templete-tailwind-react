import React, { useState } from "react";
// import "./style.css";

const Accordion = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div
        className="accordion w-[500px]"
        style={{ backgrounColor: "#f0ebe1" }}
      >
        {data.map((item, i) => (
          <div className="item bg-itemColor mb-[5px] py-[10px] px-[20px] block ">
            <div
              className="title flex justify-between items-center cursor-pointer  text-titleColor"
              onClick={() => toggle(i)}
            >
              <h2>{item.title}</h2>
              <span>{selected == i ? "-" : "+"}</span>
            </div>
            <div
              className={
                selected == i
                  ? " text-contentColor  overflow-hidden   h-auto max-h-[9999px] transition-all duration-500 ease-in-expo"
                  : "text-contentColor max-h-0 hidden overflow-hidden transition-all duration-500 ease-out-expo"
              }
              class
            >
              {item.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
