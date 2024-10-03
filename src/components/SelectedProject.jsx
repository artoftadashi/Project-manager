import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16 ">
      <header className="pb-4 mb-4 border-b-4 border-myorange-200">
        <div className="flex items-ceneter justify-between">
          <h1 className="text-4xl font-bold text-myorange-200 mb-2">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="text-stone-100 hover:text-light"
          >
            Delete
          </button>
        </div>

        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-100 whitespace-pre-wrap ">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
