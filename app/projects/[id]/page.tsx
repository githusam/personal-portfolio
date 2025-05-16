import { projects } from "@/data";
import ProjectDetailsClient from "./ProjectDetailsClient";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id as string);
  const project = projects.find((p) => p.id === projectId);
  return <ProjectDetailsClient project={project} />;
} 