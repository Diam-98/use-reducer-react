import React, { useReducer } from "react";
import { data } from "./data";

const REMOVE_ITEM = "REMOVE_ITEM";
const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";

const defaultState = {
  people: data,
};

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case action.type === REMOVE_ITEM:
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload.id
      );
      return { ...state, newPeople };
    case action.type === CLEAR_LIST:
      return { ...state, people: [] };
    case action.type === RESET_LIST:
      return { ...state, people: data };
    default:
      return { ...state, people: data };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const remove = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  console.log(state);

  return (
    <div className="App">
      <div className="container">
        <h1> Utilisation de useReducer</h1>
        <hr />
        {state.people.map((item) => {
          return (
            <div className="user_list" key={item.id}>
              <h4>{item.name}</h4>
              <button onClick={() => remove(item.id)}>Effacer</button>
            </div>
          );
        })}
        <hr />
        {data.length < 1 ? (
          <button onClick={resetList}>Reunitialiser</button>
        ) : (
          <button onClick={clearList}>Effacer tout</button>
        )}
      </div>
    </div>
  );
}

export default App;
