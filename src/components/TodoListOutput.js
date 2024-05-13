import './TodoListOutput.css';
import TodoListItem from "./TodoListItem";
import { useState } from 'react';

function TodoListOutput(){
  const [activeButton, setActiveButton] = useState('All');
  
  function handleButtonClick(buttonName) { setActiveButton(buttonName);}

  return(
    <div className="OutputContainer">
        <div className="ItemContainer">
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
        </div>
        <div className='LowerContainer'>
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
          <button className='ClearBtn'>Clear Completed</button>
        </div>
    </div>
  )
}

export default TodoListOutput;