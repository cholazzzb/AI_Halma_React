import "./App.css";
import Board from "./components/Board";
import Control from "./components/Panel/Control";

function App() {
  return (
    <div className="App text-white">
      <p className="text-4xl p-2">Halma Game</p>

      <div className="flex m-4">
        <Board />
        <div className="w-1/2 p-4">
          Status Panel
          <div>Move List </div>
          <Control/>
        </div>
      </div>
    </div>
  );
}

export default App;
