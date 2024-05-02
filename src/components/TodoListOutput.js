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
      </div>
  )
}

export default TodoListOutput;