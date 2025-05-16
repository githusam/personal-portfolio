import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function GreenspacePage() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <Link
        href="/#projects"
        className="inline-flex items-center text-purple mb-8 hover:underline"
      >
        <FaArrowLeft className="mr-2" /> Back to Projects
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Greenspace Management System
        </h1>
        
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <img
            src={`${basePath}/p3.png`}
            alt="Greenspace Management"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            A comprehensive urban management system for greenspaces. This system helps city planners and environmental managers monitor, maintain, and optimize urban green areas for better community well-being.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Real-time monitoring of green spaces</li>
              <li>Maintenance scheduling and tracking</li>
              <li>Environmental impact assessment</li>
              <li>Resource allocation optimization</li>
              <li>Community engagement tools</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-4">
              {["re.svg", "javascript.png", "pythonlogo.png", "sql.png", "docker.png"].map((icon, index) => (
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
              href="https://github.com/githusam/Greenspace-Management-System"
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