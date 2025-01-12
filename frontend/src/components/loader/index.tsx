import React from "react";
import "./loader.css";

const HeartSteamLoader: React.FC = () => {
  return (
    <div className="heart-steam-loader">
      <div className="coffee-mug">
        <div className="mug-handle"></div>
        <div className="heart-steam">
          <div className="heart heart-1"></div>
          <div className="heart heart-2"></div>
          <div className="heart heart-3"></div>
        </div>
      </div>
    </div>
  );
};

export default HeartSteamLoader;
