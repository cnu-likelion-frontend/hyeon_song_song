import './TodoItem.css';

function TodoItem() {
  return(
    <div className="TodoItem">
      <div className="TodoItem_checkbox">
        <input type="checkbox" />
      </div>
      <div className="TodoItem_title">할 일</div>
      <div className="TodoItem_date">{new Date().toLocaleDateString()}</div>
      <div className="TodoItem_button">
        <button>삭제</button>
      </div>
    </div>
  );
}

export default TodoItem;