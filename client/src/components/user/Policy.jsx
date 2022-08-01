import React from "react";
import PropTypes from "prop-types";

function PolicyCard({ name, description, icon }) {
  return (
    <div className="policy-card">
      <div className="policy-card_icon">
        <i className={icon}></i>
      </div>
      <div className="policy-card_info">
        <div className="policy-card_info_name">{name}</div>
        <div className="policy-card_info_desc">{description}</div>
      </div>
    </div>
  );
}

PolicyCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default PolicyCard;
