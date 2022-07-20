import { ENABLE_CANVAS } from "../../context/slices/app.slice";
import { useAppSelector } from "../../hooks/use-selector";
import { useDispatch } from "react-redux";

export default function Logo() {
  const dispatch = useDispatch();
  const {enableCanvas} = useAppSelector(state => state.app);
  const setCanvasVisibility = () => {
    if(enableCanvas){
      dispatch(ENABLE_CANVAS(false))
      return
    }
    dispatch(ENABLE_CANVAS(true))
  }
  return (
    <div className="mx-auto flex h-9 w-24 justify-between items-center absolute top-0 left-0" onClick={() => setCanvasVisibility()}>
      <div className="w-1/6 h-full mx-2 bg-indigo-200"></div>
      <div className="w-1/6 translate-y-2 h-full mx-2 bg-indigo-300"></div>
      <div className="w-1/6 translate-y-4 h-full mx-2 bg-indigo-400"></div>
      <div className="w-1/6 translate-y-6 h-full mx-2 bg-indigo-500"></div>
    </div>
  );
}
