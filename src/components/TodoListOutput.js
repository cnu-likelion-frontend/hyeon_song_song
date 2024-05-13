import "./TodoListOutput.css";
import TodoListItem from "./TodoListItem";
import { useState } from "react";

function TodoListOutput({ todo }) {
  const [activeButton, setActiveButton] = useState("");

  function handleButtonClick(buttonName) {
    setActiveButton(buttonName);
  }

  return (
    <>
      <div className="OutputContainer">
        <div className="ItemContainer">
          <div>
            {todo.map((it) => (
              <TodoListItem {...it}/>
            ))}
          </div>
        </div>
        <div className="LowerContainer">
          <p>item left</p>
          <div className="BtnContainer">
            <button
              className={activeButton === "All" ? "button_Color" : "BasicBtn"}
              onClick={() => handleButtonClick("All")}
            >
              All
            </button>
            <button
              className={
                activeButton === "Active" ? "button_Color" : "BasicBtn"
              }
              onClick={() => handleButtonClick("Active")}
            >
              Active
            </button>
            <button
              className={
                activeButton === "Completed" ? "button_Color" : "BasicBtn"
              }
              onClick={() => handleButtonClick("Completed")}
            >
              Completed
            </button>
          </div>
          <button className="ClearBtn">Clear Completed</button>
        </div>
      </div>
      <div className="Tail">
        <p>Drag and drop to reorder list</p>
      </div>
    </>
  );
}

export default TodoListOutput;
