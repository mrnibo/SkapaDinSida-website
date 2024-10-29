import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface ShowcaseProjectModalProps {
  project: {
    title: string;
    image: string;
    description: string;
    category: string;
  };
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

/**
 * Renders a modal dialog with project details.
 * @param {ShowcaseProjectModalProps} props
 * @returns {JSX.Element}
 */
export function ShowcaseProjectModal({
  project,
  isOpen,
  onClose,
}: ShowcaseProjectModalProps): JSX.Element {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-auto rounded-lg"
          />
          <p className="mt-4 text-gray-700">{project.description}</p>
          <p className="mt-2 text-sm text-gray-500">
            Category: {project.category}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
