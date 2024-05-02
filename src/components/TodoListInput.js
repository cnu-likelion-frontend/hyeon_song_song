import './TodoListInput.css';

function TodoListInput(){
  return(
    <div className='Input_container'>
      <form className='Input_form'>
        <label className='Input_checkbox_label'>
          <input type='checkbox' className='Input_checkbox' />
          <span className='Input_checkbox_icon'></span>
        </label>
        <input 
          type='text'
          className='Input_text'
          placeholder='Create a new todo...'
        />
      </form>
    </div>
  )
}

export default TodoListInput;