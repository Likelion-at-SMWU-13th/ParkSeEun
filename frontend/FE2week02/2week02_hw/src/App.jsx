import "./App.css";
import Chart from "./components/Chart";
import PlayList from "./components/PlayList";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "20px",
        height: "100vh",
      }}
    >
      <PlayList />
      <Chart />
    </div>
  );
}

export default App;
