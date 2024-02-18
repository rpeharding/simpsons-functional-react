import React from "react";
const Image = ({ src, className, onClick }) => {
  return <img className={className} src={src} onClick={onClick} />;
};

export default Image;
