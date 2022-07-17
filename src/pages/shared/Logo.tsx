import React from "react";

export default function Logo() {
  return (
    <div className="mx-auto flex h-9 w-24 justify-between items-center absolute top-0 left-0">
      <div className="w-1/6 h-full mx-2 bg-indigo-200"></div>
      <div className="w-1/6 translate-y-2 h-full mx-2 bg-indigo-300"></div>
      <div className="w-1/6 translate-y-4 h-full mx-2 bg-indigo-400"></div>
      <div className="w-1/6 translate-y-6 h-full mx-2 bg-indigo-500"></div>
    </div>
  );
}
