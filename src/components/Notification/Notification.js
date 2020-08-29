import React from "react";
import PropTypes from "prop-types";

export default function Notification({ message }) {
  return <div>{message && <h4>{message}</h4>}</div>;
}

Notification.defaultProps = {
  message: "Message"
};

Notification.propTypes = {
  message: PropTypes.string
};
