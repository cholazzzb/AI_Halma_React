import React from "react";

const color = ["bg-gray-800", "bg-red-700", "bg-yellow-700", "bg-green-700", "bg-blue-700"];

function Piece(props) {
  return <div className={"h-12 rounded-full " + color[props.playerId]}></div>;
}

export default Piece;
