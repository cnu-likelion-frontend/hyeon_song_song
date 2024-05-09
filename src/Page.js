import TodoListTitle from "./components/TodoListTitle";
import TodoListInput from "./components/TodoListInput";
import TodoListOutput from "./components/TodoListOutput";
import TodoListItem from "./components/TodoListItem";
import "./page.css";
import cover from "./images/bg-desktop-light.jpg";
import { useState, useRef } from 'react';

function Page() {
  const [ todo, setTodo ] = useState([]);
  const idRef = useRef(0);
  const onCreate = (content) => {
    const newItem = {
      id: 0,
      content,
      isDone: false,
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  return (
    <div className="Page">
      <div className="Page_background"></div>
      <div className="Page_container">
        <TodoListTitle />
        <TodoListInput onCreate={onCreate}/>
        <TodoListOutput />
      </div>
    </div>
  );
}

export default Page;
