import { useState, useEffect, createContext } from "react";
import cls from "classnames";
type CursorContextType = string | boolean;

export const CursorContext = createContext<CursorContextType>("cursorContext");

const CursorProvider = ({ children }: { children: JSX.Element }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState<string | boolean>(false);
  const SUPPORTED_CURSORS = [false, "pointer", "right", "left"];
  useEffect(() => {
    if (!document) return;
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener("mousemove", mouseMove);
    return () => document.removeEventListener("mousemove", mouseMove);
  }, []);
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
      />
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
