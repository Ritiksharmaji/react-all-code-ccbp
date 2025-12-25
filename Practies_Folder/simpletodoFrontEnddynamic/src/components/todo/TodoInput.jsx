import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../redux/slices/todoSlice";
import { useTodoUI } from "../../context/TodoUIContext";

export default function TodoInput() {
  const [text, setText] = useState(""); // ✅ LOCAL STATE
  const dispatch = useDispatch();
  const { editTodo, setEditTodo } = useTodoUI();

  useEffect(() => {
    if (editTodo) setText(editTodo.text);
  }, [editTodo]);

  const submitHandler = () => {
    if (!text.trim()) return;

    if (editTodo) {
      dispatch(updateTodo({
        id: editTodo.id,
       text
      }));
      setEditTodo(null);
    } else {
      dispatch(addTodo({ text, completed: false }));
    }

    setText("");
  };

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={submitHandler}>
        {editTodo ? "Update" : "Add"}
      </button>
    </>
  );
}
