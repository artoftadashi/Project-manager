import { CssSyntaxError } from "postcss";
import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-vdark/30 backdrop-blur-md text-stone-50 md:w-60 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        {" "}
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let styles =
            "w-full text-left px-2 py-2 rounded-xl my-1 hover:text-stone-100 hover:bg-myorange-100 ";

          if (project.id === selectedProjectId) {
            styles +=
              " bg-myorange-100 text-stone-100 animate-pulse duration-350";
          } else {
            styles += " text-stone-200";
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={styles}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
