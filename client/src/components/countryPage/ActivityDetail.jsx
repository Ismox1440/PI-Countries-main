import React from "react";

const ActivityDetail = ({ detail, activity }) => {
  return (
    <div>
      <p>{detail}</p>
      <span>{activity[detail]}</span>
    </div>
  );
};

export default ActivityDetail;
