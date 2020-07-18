import React from "react";
import presidentsArray from "./PresidentsArray";
import President from "./President";
const Presidents = () => {
  return (
    <ul>
      {presidentsArray.map((president) => (
        <President firstName={president.first} />
      ))}
    </ul>
  );
};

export default Presidents;
