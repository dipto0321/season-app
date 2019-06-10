import React from "react";

const Spinner = props => {
  const { messages } = props;
  return (
    <div className="ui active inverted dimmer">
      <div className="ui large text loader">{messages}</div>
    </div>
  );
};

export default Spinner;
