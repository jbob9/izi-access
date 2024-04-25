import { projects } from "@/pages/projects";
import { Badge } from "../ui/badge";

const Card2 = ({ project }: { project: (typeof projects)[number] }) => {
  return (
    <div className="aspect-auto pb-6 pt-3 px-3 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none min-w-80 max-w-[22rem]">
      <img
        src={project.image}
        className="w-full h-full max-h-56 rounded-xl object-cover"
      />
      <div className="mt-3 border-t pt-4">
        <h6 className="font-bold text-neutral-900">{project.name}</h6>
        <div className="pt-2.5">
          {project.building ? (
            <Badge  className="w-fit ">
              Project en cours
            </Badge>
          ) : (
            <Badge variant="secondary" className="w-fit ">
              Projets Réalisés
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card2;
