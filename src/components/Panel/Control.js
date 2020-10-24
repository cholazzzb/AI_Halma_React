import React from "react";

function Control() {
  return (
    <div className="flex">
      Control Panel
      <div className="w-1/3 border-green-400 p-4 bg-gray-800 hover:bg-gray-700">Start</div>
      <div className="w-1/3 border-green-400 p-4 bg-gray-800 hover:bg-gray-700">Stop</div>
      <div className="w-1/3 border-green-400 p-4 bg-gray-800 hover:bg-gray-700">Reset</div>
    </div>
  );
}

export default Control;
