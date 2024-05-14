import "./TodoListOutput.css";
import TodoListItem from "./TodoListItem";
import { useState } from "react";

function TodoListOutput({ todo }) {

  const [activeButton, setActiveButton] = useState("All");

  function handleButtonClick(buttonName) {
    setActiveButton(buttonName);
  }

  // 필터링된 할 일 목록을 반환하는 함수
  function getFilteredTodos() {
    if (activeButton === "Active") {
      return todo.filter((item) => !item.isDone); // 완료되지 않은 할 일만 보이도록 필터링
    } else if (activeButton === "Completed") {
      return todo.filter((item) => item.isDone); // 완료된 할 일만 보이도록 필터링
    }
    return todo; // 모든 할 일 보이기
  }

  return (
    <>
      <div className="OutputContainer">
        <div className="ItemContainer">
          <div>
          {getFilteredTodos().map((it) => (
              <TodoListItem key={it.id} {...it} />
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
