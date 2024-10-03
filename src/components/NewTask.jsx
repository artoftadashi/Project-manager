import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex iten-center gap-4 mt-8">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-2xl bg-transparent border-2 border-stone-200 focus:border-myorange-200 focus:outline-none text-stone-100"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-myorange-200 hover:text-myorange-100"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
