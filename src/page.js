import TodoListTitle from "./components/TodoListTitle";
import TodoListInput from "./components/TodoListInput";
import TodoListOutput from "./components/TodoListOutput";
import "./page.css";

function Page() {
  return (
    <div>
      <TodoListTitle />
      <TodoListInput />
      <TodoListOutput />
    </div>
  );
}

export default Page;
