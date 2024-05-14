import { useEffect, useState } from 'react';
import './TodoListItem.css';

function TodoListItem({ id, content, isDone }){

  const [ isCompleted, setIsCompleted ] = useState(false);
  const [ todoClass, setTodoClass ] = useState('Input_content');

  const onClickCheckbox = (e) => {
    if(e.target.id!=="checkbox")return;
    setIsCompleted(!isCompleted);
    setTodoClass(!isCompleted ? 'Input_completed' : 'Input_content');
  };

  useEffect(()=>{
    console.log(isCompleted);
  },[isCompleted])

  //마우스 호버 시 X버튼 나타나도록
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  }; 

    return(
      <div onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      <div className='TodoItem'>
        <label 
          className='Input_checkbox_label'
          onClick={onClickCheckbox}
        >
          <input 
            type='checkbox' 
            id="checkbox"
            className='Input_checkbox'
          />
          <span className='Input_checkbox_icon'></span>
        </label>
        <p className={todoClass}>{ content }</p>
        {
          isHovering&&( // isHovering이 true일 때만 svg가 나오도록하는 조건연산자 
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
          )
        }
      </div>
      <hr></hr>
      </div>
    );
  }
  
  export default TodoListItem;