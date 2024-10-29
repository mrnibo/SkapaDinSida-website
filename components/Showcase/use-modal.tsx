import { useState } from "react";

/**
 * Hook for managing a modal that displays a project.
 *
 * @returns {{ isOpen: boolean, selectedProject: Project | null, openModal: (project: Project) => void, closeModal: () => void }}
 */

interface Project {
  title: string;
  image: string;
  description: string;
  category: string;
}
export function useModal(): {
  isOpen: boolean;
  selectedProject: Project | null;
  openModal: (project: Project) => void;
  closeModal: () => void;
} {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return { isOpen, selectedProject, openModal, closeModal };
}
