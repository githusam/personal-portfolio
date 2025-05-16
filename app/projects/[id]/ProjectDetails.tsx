"use client";

import { projects } from "@/data";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function ProjectDetails() {
  const params = useParams();
  const projectId = parseInt(params.id as string);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-white">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <Link
        href="/#projects"
        className="inline-flex items-center text-purple mb-8 hover:underline"
      >
        <FaArrowLeft className="mr-2" /> Back to Projects
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">{project.des}</p>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-4">
              {project.iconLists.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black w-12 h-12 flex justify-center items-center"
                >
                  <img
                    src={`${basePath}/${icon}`}
                    alt={`tech-${index}`}
                    className="p-2"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-purple text-white rounded-lg hover:bg-purple/80 transition-colors"
            >
              View on GitHub
              <FaArrowLeft className="ml-2 rotate-180" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 