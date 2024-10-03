import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-300 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-200 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-xl bg-light">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span className="text-stone-100 text-[16px]">{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-myorange-100 hover:text-myorange-200"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
