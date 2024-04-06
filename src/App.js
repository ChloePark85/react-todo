import "./App.css";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function App() {
  const [todo, setTodo] = useState([]);

  const onSubmit = (newTodo) => {
    console.log("onParentSubmit");
    const nextTodo = [
      ...todo,
      { title: newTodo, completed: false, id: Math.random() },
    ];
    setTodo(nextTodo); //불변성 immer 라이브러리
    console.log(todo); //이전값, 비동기때문은 아님
  };

  return (
    <div className="App">
      {todo.length === 0 ? (
        <div>
          <div>Todo</div>
          <TodoForm onSubmit={onSubmit} />
        </div>
      ) : (
        <div>
          {todo.map((t) => (
            <TodoItem key={t.id} item={t} setTodo={setTodo} />
          ))}
          <TodoForm onSubmit={onSubmit} />
        </div>
      )}
    </div>
  );
}

export default App;
