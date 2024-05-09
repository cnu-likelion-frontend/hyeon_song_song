import "./TodoListOutput.css";
import TodoListItem from "./TodoListItem";
import { useState } from "react";

function TodoListOutput() {
  const [activeButton, setActiveButton] = useState("");

  function handleButtonClick(buttonName) {
    setActiveButton(buttonName);
  }

  return (
    <>
      <div className="OutputContainer">
        <div className="ItemContainer">
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
        </div>
        <div className="LowerContainer">
          <p>item left</p>
          <div className="BtnContainer">
            <button
              className={activeButton === "All" ? "button_Color" : "MiddleBtn"}
              onClick={() => handleButtonClick("All")}
            >
              All
            </button>
            <button
              className={
                activeButton === "Active" ? "button_Color" : "MiddleBtn"
              }
              onClick={() => handleButtonClick("Active")}
            >
              Active
            </button>
            <button
              className={
                activeButton === "Completed" ? "button_Color" : "MiddleBtn"
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
