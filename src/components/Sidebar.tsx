import React from "react";
import { LINKS } from "../mock/data";

export default function Sidebar() {
  return (
    <section className="main__left h-full flex-[1] ">
      <div className="flex flex-col items-start w-10/12 mx-auto justify-center h-full">
        {LINKS.map((item, index) => (
          <div
            className="text-gray-400  mb-7 font-light text-[11px]"
            key={index}
          >
            <a href={item.link}>{item.title}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
