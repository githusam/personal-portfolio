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

      <div className="w-full mt-12 flex flex-wrap justify-center gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            {/* Moved link & arrow to absolute top-right */}
            <div className="absolute top-2 right-2 flex items-center">
              <a
                href="https://kenna.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:text-xl md:text-sm text-sm text-purple hover:underline"
              >
                More Info
              </a>
              <FaLocationArrow className="ms-2" color="#CBACF9" />
            </div>

            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={`${basePath}/${card.thumbnail}`}
                alt={`${basePath}/${card.thumbnail}`}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
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
