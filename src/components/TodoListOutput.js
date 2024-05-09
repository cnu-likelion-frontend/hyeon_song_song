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
            <button className="MiddleBtn" onClick={allBtnClick}>
              All
            </button>
            <button className="MiddleBtn">Active</button>
            <button className="MiddleBtn">Completed</button>
          </div>
          <button className='ClearBtn'>Clear Completed</button>
        </div>
    </div>
  )
}

export default TodoListOutput;