import "./App.css";
import { Grid5x5, Grid3x3 } from "./components/Grid";

function App() {
  return (
    <>
      <div className="dancefloor">
        <Grid5x5 />
        <Grid3x3 />
      </div>
    </>
  );
}

export default App;
