// import React from 'react'
import PropTypes from "prop-types";

function Button({ children, classes, ...props }) {
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string,
};

export default Button;
