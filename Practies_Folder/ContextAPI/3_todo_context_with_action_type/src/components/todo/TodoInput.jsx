import { useEffect, useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import { addTodo, updateTodo } from "../../context/todo/actions";

export default function TodoInput() {
  const { dispatch, editTodo, setEditTodo } = useTodos();
  const [text, setText] = useState("");

  useEffect(() => {
    if (editTodo) setText(editTodo.text);
  }, [editTodo]);

  const submitHandler = () => {
    if (!text.trim()) return;

    if (editTodo) {
      dispatch(updateTodo(editTodo.id, text));
      setEditTodo(null);
    } else {
      dispatch(addTodo(text));
    }

    setText("");
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={submitHandler}>
        {editTodo ? "Update" : "Add"}
      </button>
    </>
  );
}
