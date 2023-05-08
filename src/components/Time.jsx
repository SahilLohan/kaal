import React, { useState } from "react";

function Time() {
  var time = new Date().toLocaleTimeString();
  var [CurrTime, setTime] = useState(time);

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(updateTime, 1000);

  return <h1>{CurrTime}</h1>;
}

export default Time;
