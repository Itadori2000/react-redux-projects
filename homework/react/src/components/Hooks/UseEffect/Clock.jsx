import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalTime);
    };
  }, []);

  console.log(time);
  const formatTime = () => {
    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();
    let format = hours >= 12 ? "PM" : "AM";
    return `${hours}:${mins}:${secs}${format}`;
  };
  return (
    <div
      style={{
        background: "rgba( 255, 255, 255, 0.45 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        padding: "3rem",
      }}
    >
      <h1 style={{color: "purple"}}>{formatTime()}</h1>
    </div>
  );
}

export default Clock;
