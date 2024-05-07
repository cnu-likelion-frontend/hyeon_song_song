import './TodoListItem.css';

function TodoListItem(){
    return(
      <div>
      <div className='TodoItem'>
        <label className='Input_checkbox_label'>
          <input type='checkbox' className='Input_checkbox' />
          <span className='Input_checkbox_icon'></span>
        </label>
        <p>할 일</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
      </div>
      <hr></hr>
      </div>
    );
  }
  
  export default TodoListItem;