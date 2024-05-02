import './TodoListInput.css';

function TodoListInput(){
  return(
    <div className='TodoListInput_container'>
      <input 
        type='checkbox'
      />
      <input 
        type='text'
      />
    </div>
  )
}

export default TodoListInput;