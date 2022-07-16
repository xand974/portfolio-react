import React from "react";
import { PROJECT_IMG, PROJECT_IMG_TWO } from "../mock/data";

export default function ProjectCard() {
  const ref = Math.floor(Math.random() * 5);
  console.log(ref);

  return (
    <div className="flex items-center py-10">
      <div className="w-10/12 h-[1px] bg-gray-200"></div>
      <div className="flex-1 w-full">
        <h3 className="text-white whitespace-nowrap mx-10 w-full text-5xl">
          MAISON MALET
        </h3>
      </div>
      <div className=" w-10/12 h-[1px] bg-gray-200"></div>
    </div>
  );
}
