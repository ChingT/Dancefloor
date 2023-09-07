/* eslint-disable react/prop-types */
import "./styles.css";

function Cell({ color, index }) {
  const style = { backgroundColor: color };
  return (
    <div style={style} className="cell">
      {index}
    </div>
  );
}

export default Cell;
