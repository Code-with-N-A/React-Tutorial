import "./App.css";
import { useState } from "react";
function App() {
  let [todolist, setTodolist] = useState([]);

  let savToDoolist = (event) => {
    event.preventDefault();
    let toname = event.target.toname.value;

    if (!todolist.includes(toname)) {
      let ftodoolist = [...todolist, toname];
      setTodolist(ftodoolist);
      event.target.toname.value = "";
    }
    else {
      alert(`Task already exists (${toname})`);
      return;
    }
  };

  let lists = todolist.map((value, index) => {
    return (
      <TodoList index={index} value={value} key={index}

        todolist={todolist}
        setTodolist={setTodolist}
      />
    )
  })

  return (
    <>
      <h1>To Doo App</h1>

      <form onSubmit={savToDoolist}>
        <input type="text" name='toname' />
        <button>Add</button>
      </form>
      <div className="list">
        <ul>
          {lists}
        </ul>
      </div>
    </>
  )
};
export default App;

function TodoList({ value, index, todolist, setTodolist }) {
  let [stets, setStets] = useState(false);
  let dletRow = () => {
    let finelData = todolist.filter((v, i) => i != index);
    setTodolist(finelData);

  }
  let checkStets = () => {
    setStets(!stets)
  }
  return (
    <li className={(stets) ? 'complisttodoo' : ''} onClick={checkStets}>{index + 1}. {value} <span onClick={dletRow}>&times;</span></li>

  );
} 