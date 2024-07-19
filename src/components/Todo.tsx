import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import "../css/Todo.css";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/TodoSlice";
import { useState } from "react";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;

  const [newTodo, setNewTodo] = useState<string>(content);

  const dispatch = useDispatch();

  const [editTodo, setEditTodo] = useState<boolean>(false);

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = ()=>{
    const payload :TodoType = {
      id: id,
      content : newTodo
    }
    dispatch(updateTodo(payload));
    setEditTodo(false);
  }

  return (
    <div className="todo-container">
      {editTodo ? (
        <input className="edit-input"
          type="text"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div>{content}</div>
      )}
      <div className="icons">
        <MdOutlineRemoveCircleOutline onClick={handleRemoveTodo} />
        {editTodo ? (
          <FaCheck onClick={handleUpdateTodo}/>
        ) : (
          <MdOutlineEdit onClick={() => setEditTodo(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
