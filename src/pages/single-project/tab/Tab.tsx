import { motion } from "framer-motion";
import { useState } from "react";
import StackTab from "./StackTab";

const headerData = [
  { title: "🖥️", id: 0 },
  { title: "🍕", id: 1 },
  { title: "🚀", id: 2 },
  { title: "💡", id: 3 },
];

const bodyData = [
  { id: 0, content: <StackTab /> },
  { id: 1, content: <div>another</div> },
  { id: 2, content: <div>yes</div> },
  { id: 3, content: <div>wow</div> },
];

export default function Tab() {
  const [activeId, setActiveId] = useState(0);
  return (
    <table
      className=" h-80 w-full flex  shadow-sm mb-10"
      style={{ border: "1px solid gray" }}
    >
      <thead className="flex justify-between flex-col flex-1  ">
        {headerData.map((item, index) => (
          <motion.tr
            whileTap={{ scale: 0.8 }}
            className={`flex items-center justify-center h-full transition-all ${
              activeId === item.id ? "bg-gray-200" : "bg-black"
            }`}
            key={index}
            onClick={() => setActiveId(item.id)}
          >
            <motion.td className="text-white">{item.title}</motion.td>
          </motion.tr>
        ))}
      </thead>
      <tbody className="flex-[4] relative bg-gray-200">
        <tr className="w-10/12 mx-auto">
          {bodyData
            .filter((item) => item.id === activeId)
            .map((item, index) => (
              <td className="h-full absolute pt-4" key={index}>
                <div className="text-white">{item.content}</div>
              </td>
            ))}
        </tr>
      </tbody>
    </table>
  );
}
