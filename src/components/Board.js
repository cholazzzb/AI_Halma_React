import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import Piece from "./Piece";
const deepcopy = require("rfdc")();

const boardSize = 12;

function Board() {
  const gameCondition = useSelector((state) => state.gameCondition);
  const piecesPosition = useSelector((state) => state.piecesPosition);

  // INITIAL BOARD
  const [board, updateBoard] = useState([[]]);
  const createInitialBoard = () => {
    let initialBoard = createEmptyBoard(boardSize);
    placePieces(initialBoard, piecesPosition.player1);
    placePieces(initialBoard, piecesPosition.player2);

    updateBoard(initialBoard);
  };

  const createEmptyBoard = (boardSize) => {
    function createColumn() {
      let column = new Array(boardSize);
      column.fill(0);
      return column;
    }
    let row = new Array(boardSize);
    row.fill(0);
    return row.map(createColumn);
  };

  const placePieces = (board, playerXPieces) => {
    playerXPieces.pieces.forEach((position) => {
      board[position[0]][position[1]] = playerXPieces.colorIndex;
    });
  };

  useEffect(() => {
    createInitialBoard();
  }, []);

  // METHOD
  const changePosition = (oldPosition, newPosition) => {
    let tempBoard = deepcopy(board);
    tempBoard[newPosition[1]][newPosition[0]] = deepcopy(
      tempBoard[oldPosition[1]][oldPosition[0]]
    );
    tempBoard[oldPosition[1]][oldPosition[0]] = 0;
    updateBoard(tempBoard);
  };

  const move = (oldPosition, newPosition) => {
    changePosition(oldPosition, newPosition);
  };

  const isMoveValid = (Move) => {};

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
          move([0, 0], [0, 9]);
          // move([11, 11], [6, 6]);
        }}
        className="bg-gray-800 p-4 hover:bg-gray-700 cursor-pointer"
      >
        Move
      </div>
    </div>
  );
}

export default Board;
