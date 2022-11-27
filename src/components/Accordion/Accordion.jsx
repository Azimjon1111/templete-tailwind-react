import React, { useState } from "react";
import "./style.css";

const Accordion = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="accordion " style={{ backgrounColor: "#f0ebe1" }}>
        {data.map((item, i) => (
          <div className="item">
            <div
              className="title flex justify-between items-center cursor-pointer"
              onClick={() => toggle(i)}
            >
              <h2>{item.title}</h2>
              <span>{selected == i ? "-" : "+"}</span>
            </div>
            <div className={selected == i ? "content show" : "content"}>
              {item.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
