import React from "react";
import people from "./data.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Utilisation de useReducer</h1>
        <hr />
        {people.map((item) => {
          return (
            <div className="user_list" key={item.id}>
              <h4>{item.name}</h4>
              <button>Effacer</button>
            </div>
          );
        })}
        <hr />
        <button>Effacer tout</button>
      </div>
    </div>
  );
}

export default App;
