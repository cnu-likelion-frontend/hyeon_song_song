import { useState } from 'react';
import './TodoListItem.css';

function TodoListItem(){

  const [ todo, setTodo ] = useState('할 일');
  const [ todoClass, setTodoClass ] = useState('Input_content');


  // label 을 click 하면 p 의 style 이 바뀌어야 하고, 
  // TodoItem 의 상태가 Completed 로 바뀌어야 함 
  // item left 의 개수가 늘어나야 함 

  const onClickCheckbox = (e) => {
    setTodoClass('Input_completed');
  };

    return(
      <div>
      <div className='TodoItem'>
        <label 
          className='Input_checkbox_label'
          onClick={onClickCheckbox}
        >
          <input type='checkbox' className='Input_checkbox' />
          <span className='Input_checkbox_icon'></span>
        </label>
        <p className={todoClass}>{ todo }</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
      </div>
      <hr></hr>
      </div>
    );
  }
  
  export default TodoListItem;