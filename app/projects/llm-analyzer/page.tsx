"use client";
import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function LLMAnalyzerPage() {
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
        Can I Afford It? Prompt Engineering Cost & Performance Tool
      </h1>
      <p className="text-lg text-[#BEC1DD] mb-12 leading-relaxed">
        An end-to-end platform to benchmark and compare prompt engineering strategies across OpenAI and Anthropic models. Features a modern chat UI, real-time analytics, and a neural token estimator to forecast API costs.
      </p>

      {/* Image + Description Blocks */}
      <div className="mb-16">
        <div className="w-full max-w-3xl mx-auto rounded-lg mb-6 overflow-hidden">
          <img
            src="/p_LLMAnalyzer.png"
            alt="LLM Analyzer UI"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/p_LLMAnalyzer.png")}
            style={{ display: "block" }}
          />
        </div>
        <p className="text-[#BEC1DD] mb-6 leading-relaxed">
          <b>Personalized Welcome Screen:</b> The home screen provides a personalized, intuitive chat experience. Users can upload files, select prompt types, and view real-time token counts. The interface adapts to the user, making prompt engineering and LLM experimentation seamless.
        </p>
      </div>

      <div className="mb-16">
        <div className="w-full max-w-3xl mx-auto rounded-lg mb-6 overflow-hidden">
          <img
            src="/llm_inputbar.png"
            alt="Prompt Input Bar"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/llm_inputbar.png")}
            style={{ display: "block" }}
          />
        </div>
        <p className="text-[#BEC1DD] mb-6 leading-relaxed">
          <b>Prompt Input Bar:</b> Easily compose prompts, upload files, and see a live token count. The AI assist button helps refine prompts for better results.
        </p>
      </div>

      <div className="mb-16">
        <div className="w-full max-w-3xl mx-auto rounded-lg mb-6 overflow-hidden">
          <img
            src="/llm_chatlist.png"
            alt="Chat List"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/llm_chatlist.png")}
            style={{ display: "block" }}
          />
        </div>
        <p className="text-[#BEC1DD] mb-6 leading-relaxed">
          <b>Chat List & Session Management:</b> Manage multiple chat sessions, rename, open in new window, or delete for a clean workspace.
        </p>
      </div>

      <div className="mb-16">
        <div className="w-full max-w-3xl mx-auto rounded-lg mb-6 overflow-hidden">
          <img
            src="/llm_modelselector.png"
            alt="Model Selector"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/llm_modelselector.png")}
            style={{ display: "block" }}
          />
        </div>
        <p className="text-[#BEC1DD] mb-6 leading-relaxed">
          <b>Model Selector & Judge:</b> Switch between LLMs, toggle memory, and use the Judge feature for automatic scoring of responses.
        </p>
      </div>

      <div className="mb-16">
        <div className="w-full max-w-sm mx-auto rounded-lg mb-6 overflow-hidden">
          <img
            src="/llm_usermenu.png"
            alt="User Menu"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/llm_usermenu.png")}
            style={{ display: "block" }}
          />
        </div>
        <p className="text-[#BEC1DD] mb-6 leading-relaxed">
          <b>User Menu:</b> Access logout, theme toggle, and help resources quickly from the user menu.
        </p>
      </div>

      <div className="mb-16">
        <div className="w-full max-w-xs mx-auto rounded-lg mb-6 overflow-hidden">
          <img
            src="/llm_drawer.png"
            alt="Prompt Engineering Drawer"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/llm_drawer.png")}
            style={{ display: "block" }}
          />
        </div>
        <p className="text-[#BEC1DD] mb-6 leading-relaxed">
          <b>Prompt Engineering Drawer:</b> Select advanced prompting strategies like Few Shot, Chain of Thought, and more.
        </p>
      </div>

      <div className="mb-16">
        <div className="w-full max-w-3xl mx-auto rounded-lg mb-6 overflow-hidden">
          <img
            src="/llm_analytics.png"
            alt="Analytics Dashboard"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/llm_analytics.png")}
            style={{ display: "block" }}
          />
        </div>
        <p className="text-[#BEC1DD] mb-6 leading-relaxed">
          <b>Analytics Dashboard:</b> Visualize token usage, cost, accuracy, and more. Compare models and prompt strategies with real data.
        </p>
      </div>

      <div className="mb-16">
        <div className="w-full max-w-3xl mx-auto rounded-lg mb-6 overflow-hidden">
          <img
            src="/llm_tokenprediction.png"
            alt="Token Prediction"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/llm_tokenprediction.png")}
            style={{ display: "block" }}
          />
        </div>
        <p className="text-[#BEC1DD] mb-6 leading-relaxed">
          <b>Token Prediction:</b> Neural token estimator predicts completion tokens before model response, helping users anticipate cost and latency.
        </p>
      </div>

            {/* Libraries & Frameworks Table (replaces Tech Stack) */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Libraries & Frameworks</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[#444] rounded-lg text-[#BEC1DD]">
            <thead>
              <tr className="bg-[#181B34] text-white">
                <th className="px-4 py-2 border-b border-[#444] text-left">Category</th>
                <th className="px-4 py-2 border-b border-[#444] text-left">Library/Framework</th>
                <th className="px-4 py-2 border-b border-[#444] text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {/* Frontend */}
              <tr>
                <td className="px-4 py-2 border-b border-[#444] align-top" rowSpan={7}>Frontend</td>
                <td className="px-4 py-2 border-b border-[#444]">React.js</td>
                <td className="px-4 py-2 border-b border-[#444]">Core library for building the UI.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">React Router</td>
                <td className="px-4 py-2 border-b border-[#444]">Manage protected and public routes based on user authentication state.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">Axios</td>
                <td className="px-4 py-2 border-b border-[#444]">Handle API calls for login, registration, and token validation.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">Material UI</td>
                <td className="px-4 py-2 border-b border-[#444]">Design and style the user interface.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">React Hook Form</td>
                <td className="px-4 py-2 border-b border-[#444]">Simplify form handling and validation for login and registration.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">Socket.io</td>
                <td className="px-4 py-2 border-b border-[#444]">Real-time communication for instant updates or notifications.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">EventSource</td>
                <td className="px-4 py-2 border-b border-[#444]">Real-time communication for instant updates or notifications (if applicable).</td>
              </tr>
              {/* Backend */}
              <tr>
                <td className="px-4 py-2 border-b border-[#444] align-top" rowSpan={7}>Backend</td>
                <td className="px-4 py-2 border-b border-[#444]">Node.js</td>
                <td className="px-4 py-2 border-b border-[#444]">Runtime environment for server-side code.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">Express.js</td>
                <td className="px-4 py-2 border-b border-[#444]">Create routes for authentication and other application logic.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">bcrypt</td>
                <td className="px-4 py-2 border-b border-[#444]">Hash and compare passwords securely.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">multer</td>
                <td className="px-4 py-2 border-b border-[#444]">Handle file uploads.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">socket.io</td>
                <td className="px-4 py-2 border-b border-[#444]">Enable real-time, bidirectional communication between client and server.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">google api</td>
                <td className="px-4 py-2 border-b border-[#444]">Authenticate Google users and interact with Google services (Mail, Drive, Search, Docs, etc.).</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">CORS</td>
                <td className="px-4 py-2 border-b border-[#444]">Handle cross-origin requests securely.</td>
              </tr>
              {/* Database */}
              <tr>
                <td className="px-4 py-2 border-b border-[#444] align-top" rowSpan={2}>Database</td>
                <td className="px-4 py-2 border-b border-[#444]">MongoDB</td>
                <td className="px-4 py-2 border-b border-[#444]">Store user credentials and other data (like prompt history).</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">Mongoose</td>
                <td className="px-4 py-2 border-b border-[#444]">Simplify MongoDB interactions with a schema-based model.</td>
              </tr>
              {/* Visualization */}
              <tr>
                <td className="px-4 py-2 border-b border-[#444] align-top" rowSpan={2}>Visualization</td>
                <td className="px-4 py-2 border-b border-[#444]">Chart.js</td>
                <td className="px-4 py-2 border-b border-[#444]">Render token-cost graphs.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-[#444]">Figma (Design)</td>
                <td className="px-4 py-2 border-b border-[#444]">Create and refine the frontend design and wireframes.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[#BEC1DD] leading-relaxed">
          The project leverages a modern stack: React, Material UI, Chart.js for the frontend; Node.js, Express, and MongoDB for the backend; and PyTorch for token estimation. Real-time features are powered by Socket.io. This table summarizes the key libraries and their purposes.
        </p>
      </section>

      {/* Class Diagram */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Class Diagram</h2>
        <div className="w-full max-w-3xl mx-auto rounded-lg mb-6 overflow-hidden">
          <img
            src="/llm_classdiagram.png"
            alt="Class Diagram"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/llm_classdiagram.png")}
            style={{ display: "block" }}
          />
        </div>
        <p className="text-[#BEC1DD] leading-relaxed">
          The class diagram illustrates the structure and relationships between the main components, models, and utility functions in the LLM Analyzer application.
        </p>
      </section>

      {/* Component Diagram */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Component Diagram</h2>
        <div className="w-full max-w-3xl mx-auto rounded-lg mb-6 overflow-hidden">
          <img
            src="/llm_componentdiagram.png"
            alt="Component Diagram"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/llm_componentdiagram.png")}
            style={{ display: "block" }}
          />
        </div>
        <p className="text-[#BEC1DD] leading-relaxed">
          The component diagram shows the interaction between frontend React components and backend Express APIs, highlighting the flow of data and responsibilities across the system.
        </p>
      </section>

      {/* Architecture Diagram */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Architecture Diagram</h2>
        <div className="w-full max-w-3xl mx-auto rounded-lg mb-6 overflow-hidden">
          <img
            src="/llm_architecturediagram.png"
            alt="Architecture Diagram"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/llm_architecturediagram.png")}
            style={{ display: "block" }}
          />
        </div>
        <p className="text-[#BEC1DD] leading-relaxed">
          The architecture diagram provides a high-level overview of the system, including the frontend, backend, database, and external service layers, and how they interact to deliver the application's features.
        </p>
      </section>

      {/* Performance Measurement Results */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Performance Measurement Results</h2>
        <div className="w-full max-w-3xl mx-auto rounded-lg mb-6 overflow-hidden">
          <img
            src="/llm_performancebenchmark.png"
            alt="Performance Benchmark"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/llm_performancebenchmark.png")}
            style={{ display: "block" }}
          />
          <img
            src="/llm_performancebenchmark2.png"
            alt="Performance Benchmark"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/llm_performancebenchmark2.png")}
            style={{ display: "block" }}
          />
        </div>
        <p className="text-[#BEC1DD] leading-relaxed mb-6">
          <b>Performance Benchmark Test:</b> The latency benchmarks compare the response times of our local API endpoints with the official OpenAI SDK, showing modest increases due to additional processing layers, but maintaining acceptable latency for real-time applications.
        </p>
        <div className="w-full max-w-3xl mx-auto rounded-lg mb-6 overflow-hidden">
          <img
            src="/llm_tokenestimationaccuracy.png"
            alt="Token Estimation Accuracy"
            className="w-full h-auto cursor-pointer"
            onClick={() => setModalImg("/llm_tokenestimationaccuracy.png")}
            style={{ display: "block" }}
          />
        </div>
        <p className="text-[#BEC1DD] leading-relaxed">
          <b>Token Estimation Accuracy Test:</b> The token estimator achieves an average error of ~25% for most models, demonstrating strong performance for a lightweight model across a wide range of LLMs.
        </p>
      </section>

 {/* Key Features & Results */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Key Features & Results</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-purple mb-3">Key Features</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-[#BEC1DD]">
              <span className="text-purple text-lg mt-1">•</span>
              <span>
                Interactive chat with file upload, token counter, and prompt-type selector
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#BEC1DD]">
              <span className="text-purple text-lg mt-1">•</span>
              <span>
                Analytics dashboard: token usage, latency, BLEU/ROUGE/F1 scores, LLM-as-a-Judge ratings
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#BEC1DD]">
              <span className="text-purple text-lg mt-1">•</span>
              <span>
                Neural token-estimation model for forecasting API costs
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#BEC1DD]">
              <span className="text-purple text-lg mt-1">•</span>
              <span>
                Modular Node.js/Express backend with MongoDB for user sessions, messages, and files
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-purple mb-3">Project Results</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-[#BEC1DD]">
              <span className="text-purple text-lg mt-1">✓</span>
              <span>
                Sub-second overhead for custom APIs
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#BEC1DD]">
              <span className="text-purple text-lg mt-1">✓</span>
              <span>
                Identified trade-offs between cost, speed, and accuracy
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#BEC1DD]">
              <span className="text-purple text-lg mt-1">✓</span>
              <span>
                Token estimator validated with ~25% MSE on compact models
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Quick Start & Configuration */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Quick Start & Configuration</h2>
        <h3 className="text-xl font-semibold text-purple mb-4">AI Chat Application</h3>
        <h4 className="text-lg font-semibold mb-2">Quick Start</h4>
        <pre className="bg-[#181B34] text-[#BEC1DD] rounded-lg p-4 mb-4 overflow-x-auto"><code>{`git clone https://github.com/ArjunB3hl/prompt-app.git
cd prompt-app
npm install`}</code></pre>
        <h4 className="text-lg font-semibold mb-2">Configuration</h4>
        <ol className="list-decimal list-inside text-[#BEC1DD] mb-4">
          <li className="mb-2">Create <code>.env</code> file in root directory:
            <pre className="bg-[#23263A] text-[#BEC1DD] rounded-lg p-3 mt-2 overflow-x-auto"><code>{`OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key
CLIENT_ID=your_google_client_id
CLIENT_SECRET=your_google_client_secret
REDIRECT_URI=http://localhost:5030/oauth2callback`}</code></pre>
          </li>
          <li className="mb-2">MongoDB Setup
            <ul className="list-disc list-inside ml-6 mt-2">
              <li><b>MacOS:</b>
                <pre className="bg-[#23263A] text-[#BEC1DD] rounded-lg p-3 mt-2 overflow-x-auto"><code>{`brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community`}</code></pre>
              </li>
              <li><b>Windows:</b>
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Download MongoDB Community Server from <a href="https://www.mongodb.com/try/download/community" target="_blank" rel="noopener noreferrer" className="underline">MongoDB Download Center</a></li>
                  <li>Follow installation wizard</li>
                  <li>Start MongoDB service</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="mb-2">Google Cloud Setup
            <ol className="list-decimal list-inside ml-6 mt-2">
              <li>Visit <a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer" className="underline">Google Cloud Console</a> and create/select a project. Note your Project ID.</li>
              <li>Enable APIs in "APIs & Services" {'>'} "Library":
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Gmail API</li>
                  <li>Google Drive API</li>
                  <li>Google Docs API</li>
                </ul>
              </li>
              <li>Configure OAuth consent screen and add scopes:
                <pre className="bg-[#23263A] text-[#BEC1DD] rounded-lg p-3 mt-2 overflow-x-auto"><code>{`https://mail.google.com/
https://www.googleapis.com/auth/drive
https://www.googleapis.com/auth/documents`}</code></pre>
              </li>
              <li>Create OAuth 2.0 credentials (Web application):
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Add authorized origins: <code>http://localhost:5030</code></li>
                  <li>Add authorized redirect URI: <code>http://localhost:5030/oauth2callback</code></li>
                </ul>
              </li>
            </ol>
          </li>
        </ol>
        <h4 className="text-lg font-semibold mb-2">Features</h4>
        <ul className="list-disc list-inside text-[#BEC1DD] mb-4">
          <li><b>Prompting Techniques:</b> Few Shot, Chain of Thought, Self Consistency, Role Playing, React Prompting</li>
          <li><b>Token Analytics:</b> Real-time token usage tracking, visualization, and historical analysis</li>
          <li><b>Google Integration:</b> Email, document, and drive file management</li>
        </ul>
        <h4 className="text-lg font-semibold mb-2">Development</h4>
        <pre className="bg-[#181B34] text-[#BEC1DD] rounded-lg p-4 mb-4 overflow-x-auto"><code>{`npm run dev`}</code></pre>
        <h4 className="text-lg font-semibold mb-2">Contributing</h4>
        <ol className="list-decimal list-inside text-[#BEC1DD] mb-4">
          <li>Fork the repository</li>
          <li>Create feature branch: <code>git checkout -b feature-name</code></li>
          <li>Commit changes: <code>git commit -am 'Add feature'</code></li>
          <li>Push branch: <code>git push origin feature-name</code></li>
          <li>Submit pull request</li>
        </ol>
      </section>

      {/* GitHub Button */}
      <div className="flex justify-center my-12">
        <a
          href="https://github.com/ArjunB3hl/prompt-app/tree/main"
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