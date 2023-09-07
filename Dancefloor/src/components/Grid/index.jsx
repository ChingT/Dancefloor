import "./styles.css";
import Cell from "../Cell";

const getRandomColor = () => {
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const h = randomInt(0, 360);
  const s = randomInt(42, 98);
  const l = randomInt(40, 90);
  return `hsl(${h},${s}%,${l}%)`;
};

function Grid() {
  const generateCells = (row = 5, col = 5) => {
    return Array.from({ length: row * col }).map((_, index) => (
      <Cell key={index} color={getRandomColor()} />
    ));
  };

  return <div className="grid">{generateCells()}</div>;
}
export default Grid;
