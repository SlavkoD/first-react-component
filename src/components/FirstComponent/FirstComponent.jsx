import React from "react";

class FirstComponent extends React.Component {
  render() {
    const { random } = this.props;
    return <p>Evo mene nakon pauze: {random}</p>;
  }
}

export default FirstComponent;
