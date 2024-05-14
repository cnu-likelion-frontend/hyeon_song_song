import './TodoList.css';
import TodoItem from './TodoItem';

function TodoList() {
  return(
    <div className="TodoList">
      <h4>Todo List 🐈‍⬛</h4>
      <input 
        placeholder="검색어를 입력하세요"
        className="TodoList_search"
      />
      <div className="TodoList_list_wrapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default TodoList;