import TodoListTitle from "./components/TodoListTitle";
import TodoListInput from "./components/TodoListInput";
import TodoListOutput from "./components/TodoListOutput";
import TodoListItem from "./components/TodoListItem";
import "./page.css";

function Page() {
  return (
    <div className="Page">
      <TodoListTitle />
      <TodoListInput />
      <TodoListOutput />
      <div className="OutputContainer">
        <div className="ItemContainer">
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
        </div>
      </div>
    </div>
  );
}

export default Page;
