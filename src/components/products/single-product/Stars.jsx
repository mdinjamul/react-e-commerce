import React from "react";

const Stars = ({ stars, reviews }) => {
  if (stars == undefined && reviews == undefined) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h3>
        {stars} Ratings ({reviews} People Reviewed)
      </h3>
    </div>
  );
};

export default Stars;
