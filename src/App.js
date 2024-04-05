import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState(""); //인풋창에 들어가는 것

  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
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
          <form onSubmit={onSubmit}>
            <input value={newTodo} onChange={onChangeNewTodo} />
            <button>추가</button>
          </form>
        </div>
      ) : (
        <div>
          {todo.map((t) => (
            <div key={t.id}>{t.title}</div>
          ))}
          <form onSubmit={onSubmit}>
            <input value={newTodo} onChange={onChangeNewTodo} />
            <button>추가</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
