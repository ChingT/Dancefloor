/* eslint-disable react/prop-types */
import "./styles.css";

function Cell({ color }) {
  const style = { backgroundColor: color };
  return <div style={style} className="cell"></div>;
}

export default Cell;
