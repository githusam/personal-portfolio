"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function RobotMazeSolverPage() {
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
            alt="Expanded Design Screenshot"
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
        Robot Maze Solver
      </h1>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <div className="w-full max-w-sm mx-auto rounded-lg mb-4 overflow-hidden">
          <img
            src="/robot.png"
            alt="Robot Maze Solver Project Overview"
            className="w-full h-auto cursor-pointer"
            style={{ display: "block" }}
            onClick={() => setModalImg("/robot.png")}
          />
        </div>
        <p className="text-[#BEC1DD] leading-relaxed mb-4">
          The Robot Maze Solver project uses an HCS12 microcontroller to autonomously navigate a maze using a guiding system and photosensors. The robot follows black electrical tape placed on the floor, making real-time decisions at intersections and handling obstacles with bumper sensors. The system can also learn the maze and perform reverse traversal, making for an engaging demonstration of autonomous robotics and embedded programming.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-[#BEC1DD] mb-4 ml-6 space-y-2">
          <li>Autonomous maze navigation using photosensors and bumper sensors</li>
          <li>Real-time tape following and course correction</li>
          <li>Obstacle detection and automatic reversal</li>
          <li>Decision-making at intersections and junctions</li>
          <li>Path memory for backtracking and learning the maze</li>
          <li>Reverse traversal for advanced demonstrations</li>
        </ul>
      </section>

      {/* Main Design (with code image) */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Main Part of Design</h2>
        <div className="w-full max-w-3xl mx-auto rounded-lg mb-4 overflow-hidden">
          <img
            src="/robot_code.png"
            alt="Main Part of Design - State Machine Code"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/robot_code.png")}
            style={{ display: "block" }}
          />
        </div>
        <p className="text-[#BEC1DD] leading-relaxed mb-4">
          The robot's state machine is implemented using subroutines for each state (start, forward, turn, reverse, backtrack, standby). The dispatcher checks the current state and calls the appropriate routine, allowing the robot to respond to sensor input and navigate the maze. The use of subroutines for sensor control was a crucial design choice, enabling modular and maintainable code. The robot's behavior is determined by comparing sensor data to thresholds, allowing it to follow the tape, handle obstacles, and make decisions at junctions.
        </p>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside text-[#BEC1DD] mb-4 ml-6 space-y-2">
          <li>
            <b>Photosensor Calibration:</b> The robot's front photosensors are calibrated to detect black tape by measuring light intensity.
          </li>
          <li>
            <b>Tape Following:</b> The robot moves forward, constantly checking sensor readings. If it veers off the tape, it adjusts its course to stay on track.
          </li>
          <li>
            <b>Obstacle Handling:</b> Bumper sensors detect obstacles. When triggered, the robot reverses and changes direction.
          </li>
          <li>
            <b>Decision Making at Intersections:</b> At junctions, the robot evaluates sensor data to choose the correct path, and remembers previous paths for backtracking.
          </li>
          <li>
            <b>Maze Learning & Reverse Traversal:</b> The robot can learn the maze layout and perform reverse runs, demonstrating advanced path memory and navigation.
          </li>
        </ol>
      </section>

      {/* UI/Video Showcase Placeholder */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Showcase</h2>
         <video
            src="/robot_demo.mp4"
            controls
            className="w-full h-auto rounded-lg"
            poster="/robot_demo.png"
          >
          </video>
      </section>
    </div>
  );
} 