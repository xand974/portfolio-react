import { useState, useEffect, createContext } from "react";
import cls from "classnames";
import { useMousePosition } from "../../hooks/use-mouse-position";
type CursorContextType = string | boolean;

export const CursorContext = createContext<CursorContextType>("cursorContext");

const CursorProvider = ({ children }: { children: JSX.Element }) => {
  const [mousePosition] = useMousePosition();
  const [cursor, setCursor] = useState<string | boolean>(false);
  const SUPPORTED_CURSORS = [false, "pointer", "right", "left"];

  const onCursor = (cursorType: boolean | string) => {
    cursorType =
      (SUPPORTED_CURSORS.includes(cursorType) && cursorType) || false;
    setCursor(cursorType);
  };
  return (
    <CursorContext.Provider value={cursor}>
      <ins
        className={cls("circle-cursor", {
          active: !!cursor,
          [`cursor-${cursor}`]: !!cursor,
        })}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      >
        <div className="w-full h-full rounded-full bg-white"></div>
      </ins>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
