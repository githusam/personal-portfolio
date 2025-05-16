"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function GreenspacePage() {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-16 px-6 md:px-16 max-w-4xl mx-auto">
      {/* Modal for expanded images */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setModalImg(null)}
        >
          <img
            src={modalImg}
            alt="Expanded UI Screenshot"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl border-4 border-white"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      <Link
        href="/#projects"
        className="inline-flex items-center text-purple mb-12 hover:underline"
      >
        <FaArrowLeft className="mr-2" /> Back to Projects
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        Greenspace Management System
      </h1>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-[#BEC1DD] leading-relaxed mb-4">
          Urban green spaces are essential for public health and climate resilience, reducing heat, stress, and air pollution. The Urban Green Space Management System (UGSMS) streamlines plant health monitoring, AND maintenance scheduling. Built with React, Tailwind CSS, FastAPI, Python, and MySQL, UGSMS uses plant and weather data to optimize care and resource use, making urban environments healthier and more sustainable.
        </p>
      </section>

      {/* Framework */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Framework</h2>
        <ul className="list-disc list-inside text-[#BEC1DD] mb-4 ml-6">
          <li>React</li>
          <li>HTML</li>
          <li>Tailwind CSS</li>
          <li>FastAPI</li>
          <li>Python</li>
          <li>MySQL</li>
        </ul>
      </section>

      {/* User Interface Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">User Interface</h2>
        <div className="space-y-10">
          {/* Search and Add Plant UI */}
          <div>
            <div className="w-full max-w-3xl mx-auto rounded-lg mb-4 overflow-hidden">
              <img
                src="/GMS.png"
                alt="Search and Add Plant UI"
                className="w-full h-auto cursor-pointer"
                onClick={() => setModalImg("/GMS.png")}
                style={{ display: "block" }}
              />
            </div>
            <p className="text-[#BEC1DD] mb-2 leading-relaxed">
              <b>Plant Search & Add:</b> Search for plants and add them to your garden. The UI displays search results and allows quick addition to your personal garden.
            </p>
          </div>
          {/* Weekly Schedule UI */}
          <div>
            <div className="w-full max-w-3xl mx-auto rounded-lg mb-4 overflow-hidden">
              <img
                src="/gms_schedule.png"
                alt="Weekly Schedule UI"
                className="w-full h-auto cursor-pointer"
                onClick={() => setModalImg("/gms_schedule.png")}
                style={{ display: "block" }}
              />
            </div>
            <p className="text-[#BEC1DD] mb-2 leading-relaxed">
              <b>Weekly Watering Schedule:</b> View a generated weekly watering schedule for each plant in your garden, ensuring optimal care and maintenance.
            </p>
          </div>
          {/* API Documentation UI */}
          <div>
            <div className="w-full max-w-3xl mx-auto rounded-lg mb-4 overflow-hidden">
              <img
                src="/gms_docs.png"
                alt="API Documentation UI"
                className="w-full h-auto cursor-pointer"
                onClick={() => setModalImg("/gms_docs.png")}
                style={{ display: "block" }}
              />
            </div>
            <p className="text-[#BEC1DD] mb-2 leading-relaxed">
              <b>API Documentation:</b> The system provides a RESTful API for plant search, watering details, garden management, and scheduling, documented with OpenAPI/Swagger UI.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
        <ul className="list-disc list-inside text-[#BEC1DD] space-y-3 ml-6">
          <li>Search and add plants to your personal garden</li>
          <li>View and manage your garden with a clean, interactive table</li>
          <li>Automatically generated weekly watering schedules for each plant</li>
          <li>RESTful API for plant search, garden management, and scheduling (OpenAPI/Swagger docs)</li>
          <li>Modern, responsive UI built with React and Tailwind CSS</li>
          <li>Robust backend using FastAPI, Python, and MySQL</li>
        </ul>
      </section>

            {/* Quick Start */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
        <ol className="list-decimal list-inside text-[#BEC1DD] mb-4 ml-6 space-y-2">
          <li>
            <b>Clone the repository:</b>
            <pre className="bg-[#181B34] text-[#BEC1DD] rounded-lg p-2 mt-1 mb-2 overflow-x-auto"><code>git clone https://github.com/githusam/Greenspace-Management-System.git</code></pre>
          </li>
          <li>
            <b>Start the Backend:</b>
            <pre className="bg-[#181B34] text-[#BEC1DD] rounded-lg p-2 mt-1 mb-2 overflow-x-auto"><code>cd backend
env\Scripts\activate  # On Windows
# source env/bin/activate  # On macOS/Linux
uvicorn app.main:app --reload
</code></pre>
            <span>
              The backend will be available at <a href="http://localhost:8000" className="text-purple underline" target="_blank" rel="noopener noreferrer">http://localhost:8000</a>.
            </span>
          </li>
          <li>
            <b>Start the Frontend:</b>
            <pre className="bg-[#181B34] text-[#BEC1DD] rounded-lg p-2 mt-1 mb-2 overflow-x-auto"><code>cd frontend_ui
npm install
npm start
</code></pre>
            <span>
              The frontend will be available at <a href="http://localhost:3000" className="text-purple underline" target="_blank" rel="noopener noreferrer">http://localhost:3000</a>.
            </span>
          </li>
          <li>
            <b>Usage:</b>
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>Open your browser and go to <a href="http://localhost:3000" className="text-purple underline" target="_blank" rel="noopener noreferrer">http://localhost:3000</a>.</li>
              <li>The frontend will communicate with the backend API for data.</li>
              <li>Explore features such as plant management and greenspace tracking.</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="text-[#BEC1DD] leading-relaxed mb-4">
          The UGSMS successfully delivers all core features: plant search, garden management, and automated watering schedules. While public reporting was not implemented due to time constraints, the system integrates a robust FastAPI backend and a responsive frontend. Development involved extensive testing, API integration, and deployment experience with Docker and Azure, providing valuable skills for future cloud-based projects.
        </p>
      </section>

      {/* GitHub Button */}
      <div className="flex justify-center my-12">
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
  );
} 