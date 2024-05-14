import "./TodoEditor.css";

function TodoEditor() {
  return(
    <div className="TodoEditor">
      <h4>새로운 Todo 작성 ✏️</h4>
      <div className="TodoEditor_form">
        <input 
          placeholder="새로운 Todo ..." 
          className="TodoEditor_input"
        />
        <button className="TodoEditor_button">추가</button>
      </div>
    </div>
  );
}

export default TodoEditor;