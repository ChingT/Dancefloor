import "./styles.css";
import Cell from "../Cell";

function Grid() {
  const generateCells = (row = 5, col = 5) => {
    let color = "orange";
    return Array.from({ length: row }).map((_, i) => (
      <div key={i}>
        {Array.from({ length: col }).map((_, j) => (
          <Cell key={j} color={color} index={j + col * i} />
        ))}
      </div>
    ));
  };

  return <>{generateCells()}</>;
}
export default Grid;
