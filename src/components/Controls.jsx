import React from "react";
import Image from "./Image";
import like from "../images/like.svg";

const Controls = ({ liked, className, onSortSelection }) => {
  return (
    <div className={className}>
      <div className="liked-summary flex">
        <Image className="icon" src={like} />
        <p>liked: {liked}</p>
      </div>
      <div className="sort-summary flex">
        <p>sort by:</p>
        <select className="sort" onChange={onSortSelection}>
          <option value="">Select...</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="liked">Recently Liked</option>
        </select>
        {/* <select className="sort" onChange={handleChange} value={value}>
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select> */}
      </div>
    </div>
  );
};

export default Controls;
