"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

import { projects } from "@/data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const projectRoutes: Record<string, string> = {
  "1": "/projects/llm-analyzer",
  "2": "/projects/license",
  "3": "/projects/tmusic",
  "4": "/projects/greenspace",
  "5": "/projects/weather-app",
};

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <div className="relative w-full h-full flex flex-col justify-between bg-[#13162D] rounded-3xl border border-white/[.1] shadow-[0_8px_16px_rgb(0_0_0/0.4)] p-4">
              <div className="relative w-full h-72 mb-4 rounded-2xl overflow-hidden bg-[#13162D]">
                <img
                  src={item.img}
                  alt="cover"
                  className="w-full h-full object-cover"
                  style={{ imageRendering: "auto" }}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base text-white mb-1">
                {item.title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm text-[#BEC1DD] mb-2 line-clamp-3">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img
                        src={`${basePath}/${icon}`}
                        alt="icon5"
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <Link
                    href={projectRoutes[item.id.toString()]}
                    className="flex lg:text-xl md:text-xs text-sm text-purple"
                  >
                    View Details
                  </Link>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
