import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { FaLocationArrow } from "react-icons/fa6";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-16 flex flex-wrap justify-center gap-12 lg:gap-16">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 min-w-[90vw] lg:min-w-[800px] text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg lg:text-xl text-purple hover:underline transition-all"
              >
                More Info
              </a>
              <FaLocationArrow className="text-sm md:text-base" color="#CBACF9" />
            </div>

            <div className="flex lg:flex-row flex-col lg:items-start p-4 py-8 md:p-8 lg:p-12 gap-6">
              <img
                src={`${basePath}/${card.thumbnail}`}
                alt={`${basePath}/${card.thumbnail}`}
                className="lg:w-40 md:w-24 w-20 lg:mt-2"
              />
              <div className="lg:ms-6 flex-1">
                <h1 className="text-start text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-white">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 text-sm md:text-base lg:text-lg font-normal whitespace-pre-line leading-loose">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
