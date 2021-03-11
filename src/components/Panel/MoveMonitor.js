import React, { useState } from "react";

// var move = [[2,1], [2,3], [4,3]]

// var moves = {
//     player1: [
//         move,
//         []
//     ],
//     player2: [
//         [],
//         []
//     ]
// };

function MoveMonitor() {
  const [moveHistory, setMoveHistory] = useState([]);

  return (
    <div className="my-4 border border">
      <div>Move List</div>
      <div className="flex">
        <div className="w-1/3">Move</div>
        <div className="w-1/3">Player1</div>
        <div className="w-1/3">Player2</div>
      </div>
      <div className="flex">
        <div className="w-1/3">1</div>
        <div className="w-1/3">(2, 5) -&gt; (4, 5)</div>
        <div className="w-1/3">(2, 2) -&gt; (5, 5)</div>
      </div>
    </div>
  );
}

export default MoveMonitor;
