import './TodoListOutput.css';
import TodoListItem from "./TodoListItem";

function TodoListOutput(){
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
          <div className='BtnContainer'>
          <button className='MiddleBtn'>All</button>
          <button className='MiddleBtn'>Active</button>
          <button className='MiddleBtn'>Completed</button>
          </div>
          <p>Clear Completed</p>
        </div>
    </div>
  )
}

export default TodoListOutput;