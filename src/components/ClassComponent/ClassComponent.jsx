import React from "react";
class ClassComponent extends React.Component {
  render() {
    const type = "klasna";
    return (
      <p>
        Ja sam {type} komponenta. Imam {this.props.number} godina i najdraza
        rijec mi je {this.props.text}
      </p>
    );
  }
}

export default ClassComponent;
