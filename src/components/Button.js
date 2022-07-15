import React from "react";

export function Button(props) {
  const { label = "Default", handleClick = () => console.log("Default") } =
    props;
  return <button onClick={handleClick}>{label}</button>;
}
