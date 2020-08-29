import React from "react";
import PropTypes from "prop-types";

export default function Section({ title, children }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.defaultProps = {
  title: "Title"
};

Section.propTypes = {
  title: PropTypes.string
};
