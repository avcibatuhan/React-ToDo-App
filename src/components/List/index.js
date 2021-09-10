import {useState,useEffect} from "react";

export default function List({todos,setTodos}) {
  const [form,setForm] = useState( {id:'',todo:'',isDone:''})

  const onChangeInput = (e) => {
    setForm({ ...form,id:todos.length+1,[e.target.name]:e.target.value,isDone:false})
  }

  useEffect(() => {
    setForm({todo:'',isDone:false})
  },[todos])

  const onSubmit = (e) => {
    e.preventDefault();
    if(form.todo === ''){
      return false;
    }
    setTodos([...todos,form])
  };
  return (
    <div>
      <header className="header">
        <h2>Todos</h2>
        <form onSubmit={onSubmit}>
          <input
            name="todo"
            className="new-todo"
            placeholder="What needs to be done?"
            value={form.todo}
            autoFocus
            onChange={onChangeInput}
          />
          <button className="btn btn-info">Add</button>
        </form>
      </header>
    </div>
  );
}
