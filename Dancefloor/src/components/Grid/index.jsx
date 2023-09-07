import "./styles.css";
import Cell from "../Cell";

function Grid() {
  const generateCells = (row = 5, col = 5) => {
    let color = "orange";
    return Array.from({ length: row * col }).map((_, index) => (
      <Cell key={index} color={color} index={index} />
    ));
  };

  return <div className="grid">{generateCells()}</div>;
}
export default Grid;
