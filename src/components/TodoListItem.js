import { useState } from 'react';
import './TodoListItem.css';

function TodoListItem({ id, content, isDone }){

  const [ isCompleted, setIsCompleted ] = useState(false);
  const [ todoClass, setTodoClass ] = useState('Input_content');

  const onClickCheckbox = (e) => {
    setIsCompleted(!isCompleted);
    setTodoClass(isCompleted ? 'Input_completed' : 'Input_content');
  };

    return(
      <div>
      <div className='TodoItem'>
        <label 
          className='Input_checkbox_label'
          onClick={onClickCheckbox}
        >
          <input 
            type='checkbox' 
            className='Input_checkbox'
          />
          <span className='Input_checkbox_icon'></span>
        </label>
        <p className={todoClass}>{ content }</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
      </div>
      <hr></hr>
      </div>
    );
  }
  
  export default TodoListItem;