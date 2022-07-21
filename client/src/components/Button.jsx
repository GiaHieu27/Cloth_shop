import PropTypes from "prop-types";

function Button({ backgroundColor, icon, ...props }) {
  const bg = backgroundColor ? `bg-${backgroundColor}` : "bg-main";
  const size = props.size ? "btn-" : "";
  const animate = props.animate ? "btn-animate" : "";

  return (
    <button
      className={`btn ${bg} ${animate} ${size} `}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      <span className="btn_txt">{props.children}</span>
      {icon ? (
        <span className="btn_icon">
          <i className={`${icon} bx-tada`}></i>
        </span>
      ) : (
        ""
      )}
    </button>
  );
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  animate: PropTypes.bool,
  onclick: PropTypes.func,
};

export default Button;
