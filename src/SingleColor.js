import React, { useState } from "react";

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState(false);
  const background = rgb.join(","); //converts the rgb from an array to a string seperated by ','

  return (
    <div
      className={index < 9 ? "color" : "color-light"}
      style={{ backgroundColor: `rgb(${background})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </div>
  );
};

export default SingleColor;
