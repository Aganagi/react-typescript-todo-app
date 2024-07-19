import "../css/TodoCreate.css";
import {useDispatch} from 'react-redux';
import {useState} from "react";
import { createTodo } from "../redux/TodoSlice";
import { TodoType } from "../types/Types";

function TodoCreate() {

  const [newTodo, setNewTodo] = useState<string>('');

  const dispatch = useDispatch();

  const handleCreateTodo = ()=>{
    if (newTodo.trim().length ==0) {
      return;
    }
    const payload :TodoType = {
      id : Math.floor(Math.random() * 999999999),
      content: newTodo
    }
    dispatch(createTodo(payload));
    setNewTodo('');
  }

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}
        type="text" className="create-input" placeholder="Enter some text.."/>
      <button onClick={handleCreateTodo} className="create-btn">Create</button>
    </div>
  );
}

export default TodoCreate;
