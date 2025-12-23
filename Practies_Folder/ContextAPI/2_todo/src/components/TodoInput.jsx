// import { useEffect, useState } from "react";

// export default function TodoInput({ addTodo, updateTodo, editTodo }) {
//   const [text, setText] = useState("");

//   useEffect(() => {
//     if (editTodo) setText(editTodo.text);
//   }, [editTodo]);

//   const submitHandler = () => {
//     if (!text.trim()) return;

//     editTodo
//       ? updateTodo(editTodo.id, text)
//       : addTodo(text);

//     setText("");
//   };

//   return (
//     <>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <button onClick={submitHandler}>
//         {editTodo ? "Update" : "Add"}
//       </button>
//     </>
//   );
// }

// with useContext and useTodos hook
import { useEffect, useState } from "react";
import { useTodos } from "../hooks/useTodos";

export default function TodoInput() {
  const { dispatch, editTodo, setEditTodo } = useTodos();
  const [text, setText] = useState("");

  useEffect(() => {
    if (editTodo) setText(editTodo.text);
  }, [editTodo]);

  const submitHandler = () => {
    if (!text.trim()) return;

    if (editTodo) {
      dispatch({ type: "UPDATE", payload: { id: editTodo.id, text } });
      setEditTodo(null);
    } else {
      dispatch({ type: "ADD", payload: text });
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

