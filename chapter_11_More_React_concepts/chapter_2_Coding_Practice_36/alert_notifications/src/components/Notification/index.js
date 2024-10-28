import React, { Component } from "react";
import { GrFormClose } from "react-icons/gr";

class Notification extends Component {
  render() {
    const { data, children } = this.props;

    // Ensure that 'data' is defined to avoid errors
    if (!data) {
      return null;
    }

    const { name, des, icon } = data;  // Destructure 'icon' from the data prop

    return (
      <div className="notification-sub-cart">
        <div className="first-cart">
          {icon} {/* Use the icon passed as a prop */}
          <h2>{name}</h2>
        </div>
        <div className="second-cart">
          <p>{des}</p>
          <GrFormClose />
        </div>
        {/* Render any children passed to the component */}
        {children}
      </div>
    );
  }
}

export default Notification;
