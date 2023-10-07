import React from "react";
import "./IconDetails.css";
import { MdOutlineChair } from "react-icons/md";

const IconDetails = () => {
  return (
    <div className="bottom-container">
      <div>
        <h3>Key to Seat Layout:</h3>
        <ul>
          <li>
            <MdOutlineChair className="available seat" />
            <p>Available</p>
          </li>

          <li>
            <MdOutlineChair className="unavailable size" />
            <p>Unavailable</p>
          </li>

          <li>
            <MdOutlineChair className="yourselection size" />
            <p>Your Selection</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IconDetails;
