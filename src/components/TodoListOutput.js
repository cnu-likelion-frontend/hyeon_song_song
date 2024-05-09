import "./TodoListOutput.css";
import TodoListItem from "./TodoListItem";

function TodoListOutput() {
  function allBtnClick() {
    alert("all 버튼 클릭!");
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
            <button className="MiddleBtn" onClick={allBtnClick}>
              All
            </button>
            <button className="MiddleBtn">Active</button>
            <button className="MiddleBtn">Completed</button>
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
