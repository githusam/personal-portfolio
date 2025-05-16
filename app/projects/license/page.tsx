"use client";
import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function LicensePlateDetectorPage() {
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
            alt="Expanded"
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
        License Plate Recognition (LPR)
      </h1>
      <p className="text-lg text-[#BEC1DD] mb-12 leading-relaxed">
        A computer vision system for automated vehicle tracking and license plate identification, designed for applications like parking management and law enforcement. This project integrates YOLO-based detection, OCR, and a user-friendly GUI to deliver robust, real-time results under diverse conditions.
      </p>

      {/* Abstract/Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Overview</h2>
        <p className="text-[#BEC1DD] leading-relaxed mb-6">
          The system detects vehicles and license plates in video files, processes them with Optical Character Recognition (OCR), and outputs annotated video and CSV results. The GUI allows users to upload videos, monitor progress, and view results in real time.
        </p>
        <div className="w-full max-w-3xl mx-auto rounded-lg mb-6 overflow-hidden">
          <video
            src="/VideoDemo_compressed.mp4"
            controls
            className="w-full h-auto rounded-lg"
            poster="/license-plate-demo.png"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-[#BEC1DD] text-sm text-center mb-2">
          <b>Demo:</b> Real-time detection and annotation of license plates in a parking lot.
        </p>
      </section>

      {/* System Design */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">System Design</h2>
        <p className="text-[#BEC1DD] leading-relaxed mb-6">
          The architecture consists of three main components:
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>YOLOv8 for vehicle and license plate detection, with SORT for tracking across frames.</li>
            <li>Custom-trained YOLOv8 and OCR for extracting text from plates.</li>
            <li>A Python/Tkinter GUI for uploading videos, monitoring progress, and displaying results.</li>
          </ul>
        </p>    
      </section>

      {/* Implementation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Implementation</h2>
        <div className="w-full max-w-3xl mx-auto rounded-lg mb-6 overflow-hidden">
          <img
            src="/license_results.png"
            alt="Model Training Results"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/license_results.png")}
            style={{ display: "block" }}
          />
        </div>
        <p className="text-[#BEC1DD] leading-relaxed mb-6">
          <b>Model Training:</b> The YOLOv8 model was fine-tuned on a curated dataset of license plates, with 100 epochs and real-time monitoring of precision, recall, and loss. The model achieved high accuracy in both detection and OCR, even under challenging conditions.
        </p>
        <div className="w-full max-w-3xl mx-auto rounded-lg mb-6 overflow-hidden">
          <img
            src="/license_livedetection.png"
            alt="Live Detection Example"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/license_livedetection.png")}
            style={{ display: "block" }}
          />
        </div>
        <p className="text-[#BEC1DD] leading-relaxed mb-6">
          <b>Live Detection:</b> The system processes each frame, detects vehicles and plates, applies OCR, and overlays results in real time. Outputs include annotated video and a CSV file with plate data.
        </p>
      </section>

      {/* Challenges */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Challenges</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-[#BEC1DD]">
            <span className="text-purple text-lg mt-1">•</span>
            <span>Diverse environmental conditions: lighting, weather, and plate obstructions.</span>
          </li>
          <li className="flex items-start gap-2 text-[#BEC1DD]">
            <span className="text-purple text-lg mt-1">•</span>
            <span>Ensuring real-time processing for high-resolution videos.</span>
          </li>
          <li className="flex items-start gap-2 text-[#BEC1DD]">
            <span className="text-purple text-lg mt-1">•</span>
            <span>Maintaining accuracy across different plate formats and camera angles.</span>
          </li>
          <li className="flex items-start gap-2 text-[#BEC1DD]">
            <span className="text-purple text-lg mt-1">•</span>
            <span>Integrating detection, tracking, and OCR for seamless user experience.</span>
          </li>
        </ul>
      </section>

      {/* Results */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Results</h2>
        <p className="text-[#BEC1DD] leading-relaxed mb-6">
          The final application is a user-friendly system that performs real-time license plate recognition from video files. It achieves high accuracy in both detection and OCR, and is robust to challenging conditions. Users can upload videos, monitor progress, and export results for further analysis.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
        <p className="text-[#BEC1DD] mb-6 leading-relaxed">
          Python · OpenCV · YOLOv8 · SORT · OCR · Tkinter (GUI) · Pandas · Numpy
        </p>
      </section>

      {/* How to Run */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">How to Run</h2>
        <p className="text-[#BEC1DD] mb-2">Prerequisites:</p>
        <pre className="bg-[#181B34] text-[#BEC1DD] rounded-lg p-4 mb-4 overflow-x-auto"><code>{`pip install -r requirements.txt`}</code></pre>
        <p className="text-[#BEC1DD] mb-2">Double click on the <code>Run.bat</code> file to launch the UI (<code>ui.py</code>).</p>
      </section>

      {/* GitHub Button */}
      <div className="flex justify-center my-12">
        <a
          href="https://github.com/githusam/License-Plate-Detector" // update to your actual repo
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.68 5.41-5.24 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  );
}
