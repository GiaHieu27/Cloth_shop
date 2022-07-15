import PropTypes from "prop-types";

function Grid(props) {
  const style = {
    gap: props.gap ? `${props.gap}px` : "0",
  };

  const col = props.col ? `${props.col}` : "";
  const mdCol = props.mdCol ? `${props.mdCol}` : "";
  const smCol = props.smCol ? `${props.smCol}` : "";

  return (
    <div className={`grid ${col} ${smCol} ${mdCol}`} style={style}>
      {props.children}
    </div>
  );
}

Grid.propTypes = {
  col: PropTypes.number.isRequired,
  mdColumn: PropTypes.number,
  smCol: PropTypes.number,
  gap: PropTypes.number,
};

export default Grid;
