import TodoListTitle from "./components/TodoListTitle";
import TodoListInput from "./components/TodoListInput";
import TodoListOutput from "./components/TodoListOutput";
import "./page.css";
import cover from "./images/bg-desktop-light.jpg";

function Page() {
  return (
    <div className="Page">
      <div className="Page_background"></div>
      <div className="Page_container">
        <TodoListTitle />
        <TodoListInput />
        <TodoListOutput />
      </div>
    </div>
  );
}

export default Page;
