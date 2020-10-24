import React, { useState } from "react";
import Piece from "./Piece";

const boardSize = 12;
const player1Pieces = {
  pieces: [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
    [0, 2],
    [1, 1],
    [2, 0],
    [3, 0],
    [2, 1],
    [1, 2],
    [0, 3],
    [4, 0],
    [3, 1],
    [2, 2],
    [1, 3],
    [0, 4],
  ],
  colorIndex: 1,
};

const player2Pieces = {
  pieces: [
    [11, 11],
    [10, 11],
    [11, 10],
    [10, 10],
    [11, 9],
    [9, 11],
    [9, 10],
    [10, 9],
    [8, 11],
    [11, 8],
    [8, 10],
    [9, 9],
    [7, 11],
    [10, 8],
    [11, 7],
  ],
  colorIndex: 2,
};

var createEmptyBoard = (boardSize, value) => {
  let row = new Array(boardSize);
  row.fill(value);
  return row.map(createColumn);

  function createColumn() {
    let column = new Array(boardSize);
    column.fill(value);
    return column;
  }
};

let emptyBoard = createEmptyBoard(boardSize, 0);

var startBoard = [...emptyBoard];

var placePosition = (playerXPieces) => {
  playerXPieces.pieces.map((position) => {
    startBoard[position[0]][position[1]] = playerXPieces.colorIndex;
    return 0
  });
};

placePosition(player1Pieces);
placePosition(player2Pieces)

function Board() {
  const [board, updateBoard] = useState(startBoard);

  const resetBoard = () => {
    updateBoard(startBoard);
  };

  return (
    <div className="w-1/2 border border-green-400 p-4">
      {board.map((x, row) => (
        <React.Fragment key={row}>
          <div className="ml-4 flex border-t-2 border-b-2 border-purple-400">
            <div className="w-6">{row + 1}</div>
            {x.map((y, column) => (
              <div
                key={column}
                className={
                  "h-12 border-l-2 border-r-2 border-purple-400 bg-gray-800" +
                  " w-1/" +
                  boardSize
                }
              >
                <Piece playerId={y} />
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
      <div className="flex">
        <div className="w-6"></div>
        {board.map((y, column) => (
          <div key={column} className={"text-center h-12 w-1/" + boardSize}>
            {column + 1}
          </div>
        ))}
      </div>
      <div
        onClick={() => {
          resetBoard();
        }}
        className="bg-gray-800 p-4 hover:bg-gray-700"
      >
        Reset Board
      </div>
    </div>
  );
}

export default Board;
