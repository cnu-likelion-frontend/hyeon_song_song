import { useState } from 'react';
import './TodoListInput.css';

function TodoListInput({ onCreate }){
  const [ content, setContent ] = useState("");
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // const activeEnter = (e) => {
  //   if (e.key === 'Enter') {
  //     activeButton();
  //   }
  // }

  return(
    <div className='Input_container'>
      <form className='Input_form'>
        <label className='Input_checkbox_label'>
          <input 
            type='button' 
            className='Input_checkbox'
          />
          <span className='Input_checkbox_icon'></span>
        </label>
        <input 
          type='text'
          className='Input_text'
          placeholder='Create a new todo...'
          value={content}
          onChange={onChangeContent}
        />
      </form>
    </div>
  )
}

export default TodoListInput;