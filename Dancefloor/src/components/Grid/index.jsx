import { useState } from "react";
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
  const [row, col] = [5, 5];
  const getColors = () => Array.from({ length: row * col }, getRandomColor);
  const [colors, setColors] = useState(getColors());
  const [intervalID, setIntervalID] = useState();

  const generateCells = () =>
    colors.map((color, index) => <Cell key={index} color={color} />);

  const changeColors = () => {
    clearInterval(intervalID);
    setIntervalID(setInterval(() => setColors(getColors()), 500));
  };

  return (
    <>
      <button onClick={changeColors}>Dance!</button>
      <div className="grid">{generateCells()}</div>;
    </>
  );
}
export default Grid;
