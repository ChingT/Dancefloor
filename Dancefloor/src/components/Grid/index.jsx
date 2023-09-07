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

const getGridStyle = (row, col) => ({
  "grid-template-row": `repeat(${row}, 1fr)`,
  "grid-template-columns": `repeat(${col}, 1fr)`,
});

function Grid5x5() {
  const [row, col] = [5, 5];
  const getColors = () => Array.from({ length: row * col }, getRandomColor);
  const [colors, setColors] = useState(getColors());
  const [intervalID, setIntervalID] = useState();

  const generateCells = (colors) =>
    colors.map((color, index) => <Cell key={index} color={color} />);

  const onClickHandler = () => {
    clearInterval(intervalID);
    setIntervalID(setInterval(() => setColors(getColors()), 500));
  };

  return (
    <div>
      <h1>Dancefloor</h1>
      <div style={getGridStyle(row, col)} className="grid">
        {generateCells(colors)}
      </div>
      <button onClick={onClickHandler}>Dance!</button>
    </div>
  );
}

function Grid3x3() {
  const [row, col] = [3, 3];
  const keys = ["Q", "W", "E", "A", "S", "D", "Y", "X", "C"];
  const initialCellStates = keys.map((key) => ({
    id: key,
    color: getRandomColor(),
  }));
  const [cellStates, setCellStates] = useState(initialCellStates);

  const generateCells = (cellStates) =>
    cellStates.map((state) => (
      <Cell key={state.id} id={state.id} color={state.color} />
    ));

  const onKeyDownHandler = (event) => {
    const key = event.key.toUpperCase();
    const newCellStates = cellStates.map((state) =>
      state.id === key
        ? {
            id: key,
            color: getRandomColor(),
          }
        : state
    );
    setCellStates(newCellStates);
  };

  return (
    <div>
      <h1>Dancefloor by keys</h1>
      <div
        style={getGridStyle(row, col)}
        className="grid"
        onKeyDown={onKeyDownHandler}
        tabIndex={0}
      >
        {generateCells(cellStates)}
      </div>
    </div>
  );
}

export { Grid5x5, Grid3x3 };
