import { useState } from 'react';
import './TodoListInput.css';

function TodoListInput({ onCreate }){
  const [ content, setContent ] = useState("");
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    onCreate(content);
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
      e.preventDefault();
    }
  }

  return(
    <div className='Input_container'>
      <form className='Input_form'>
        <label className='Input_checkbox_label'>
          <input 
            type='button' 
            className='Input_checkbox'
            onClick={onSubmit}
          />
          <span className='Input_checkbox_icon'></span>
        </label>
        <input 
          type='text'
          className='Input_text'
          placeholder='Create a new todo...'
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
        />
      </form>
    </div>
  )
}

export default TodoListInput;