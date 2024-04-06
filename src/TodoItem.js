export default function TodoItem({ item, index, setTodo }) {
  //item은 부모한테 받아옴
  const onChange = (e) => {
    TodoItem[index].completed = e.target.checked;
    setTodo((prev) => {
      const nextTodo = [...prev];
      nextTodo[index] = { ...nextTodo[index] };
      nextTodo[index].completed = e.target.checked;
    });
  };
  return (
    <div>
      <input type="checkbox" checked={item.completed} onChange={onChange} />
      {item.title}
    </div>
  ); //key는 필요 없음
}
