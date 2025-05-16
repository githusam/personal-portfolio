import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function WeatherAppPage() {
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
          Weather Application
        </h1>
        
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <img
            src={`${basePath}/p4.png`}
            alt="Weather App"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            A simple weather application that provides real-time weather updates. Users can check current conditions, forecasts, and receive weather alerts for their location.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Real-time weather updates</li>
              <li>Location-based forecasting</li>
              <li>Weather alerts and notifications</li>
              <li>Historical weather data</li>
              <li>Interactive weather maps</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-4">
              {["re.svg", "javascript.png", "node.png"].map((icon, index) => (
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
              href="https://github.com/githusam/weather-app"
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