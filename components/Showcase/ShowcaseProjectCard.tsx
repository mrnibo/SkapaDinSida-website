import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface ShowcaseProjectCardProps {
  project: Project;
  onClick: () => void;
}

/**
 * ShowcaseProjectCard component renders a card displaying a project's
 * image, title, and description. Clicking the card triggers the onClick event.
 *
 * @param {ShowcaseProjectCardProps} props - The project data and click handler.
 * @returns {JSX.Element} The rendered project card element.
 */
export function ShowcaseProjectCard({
  project,
  onClick,
}: ShowcaseProjectCardProps): JSX.Element {
  return (
    <div
      className="break-inside-avoid mb-4 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-200">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
