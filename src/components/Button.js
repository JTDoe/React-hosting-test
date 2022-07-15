import React from "react";

// export function Button(props) {
//   const { label = "Default", handleClick = () => console.log("Default") } =
//     props;
//   return <button onClick={handleClick}>{label}</button>;
// }

export class ButtonClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { label = "Default", handleClick = () => console.log("Default") } =
      this.props;

    return <button onClick={handleClick}>{label}</button>;
  }
}
