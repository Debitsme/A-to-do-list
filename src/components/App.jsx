import React, { useState } from "react";

import Link from "./list";

function App() {
  var [state, detdts] = useState("");
  var [stat, dtdts] = useState([]);

  function Aloha(e) {
    detdts(e.target.value);
  }
  function Alop() {
    dtdts((prevValue) => {
      return [...prevValue, state];
    });
    detdts("")
  }

function Rop(id){

  dtdts((prevItems)=>{
    return prevItems.filter((item, index) => {
      return index !== id;
    });
  })
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={Aloha} value={state} />
        <button onClick={Alop}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {stat.map((stat, index) => (
            <Link key={index} id={index} stat={stat} Run={Rop} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
