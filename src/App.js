import { Provider } from "react-redux";
import store from "./redux/store";

import Board from "./components/Board";
import MoveMonitor from "./components/Panel/MoveMonitor";
import Control from "./components/Panel/Control";
import Halmiezzz from "./components/AI/Halmiezzz";

const AI1 = new Halmiezzz(1);
const AI2 = new Halmiezzz(2);

function App() {
  return (
    <Provider store={store}>
      <div className="App text-white">
        <p className="text-4xl p-2">Halma Game</p>

        <div className="flex m-4">
          <Board />
          <div className="w-1/2 p-4">
            Status Panel
            <MoveMonitor />
            <Control AIs={[AI1, AI2]} />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
