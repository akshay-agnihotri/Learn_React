// import React from 'react';
import PropTypes from 'prop-types';

function Input({ label, id, ...props }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} id={id} required {...props} />
    </p>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

// Input.defaultProps = {
//   label: 'Default Label',
//   id: 'input-id',
// };

export default Input;
