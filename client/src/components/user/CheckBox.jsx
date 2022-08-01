import { useRef } from "react";
import PropTypes from "prop-types";

function CheckBox({ label, checked, onChange }) {
  const inputRef = useRef(null);
  const handleChange = () => {
    if (onChange) onChange(inputRef.current);
  };

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        onChange={() => handleChange()}
        checked={checked}
        ref={inputRef}
      />
      <span className="checkbox_checkmark">
        <i className="bx bx-check"></i>
      </span>
      {label}
    </label>
  );
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default CheckBox;
