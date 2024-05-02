import './TodoListItem.css';

function TodoListItem(){
    return(
      <div className='TodoItem'>
        <input type='checkbox'></input>
        <p>할 일</p>
        <button>X</button>
      </div>
    );
  }
  
  export default TodoListItem;