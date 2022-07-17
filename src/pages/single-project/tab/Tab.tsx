import React from "react";
import { useState } from "react";

export default function Tab() {
  const [active, setActive] = useState(0);
  return (
    <div className="h-32 bg-red-300">
      <div className="flex bg-blue-500 p-4">
        {/* tab set */}
        <div className="flex-1  flex items-center justify-center">
          <button className="border-none bg-none ">
            <span className="text-white">STACKS</span>
          </button>
        </div>
        {/* active tab */}
        <div className=" flex-[4] h-full ">zddzadazdza</div>
      </div>
    </div>
  );
}
