/* eslint-disable react/prop-types */
import "./styles.css";

function Cell({ color, id }) {
  const style = { backgroundColor: color };
  return (
    <div style={style} className="cell">
      {id}
    </div>
  );
}

export default Cell;
