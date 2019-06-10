import React from "react";
import "../components/SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Hey! let's move on to beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr, it's time to chilly",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const { lat } = props;
  const month = new Date().getMonth();
  const season = getSeason(lat, month);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
