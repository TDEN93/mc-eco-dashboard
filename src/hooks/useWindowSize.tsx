import { useState } from "react";
import isClient from "../utils/isClient";
import useEventListener from "./useEventListener";

function useWindowSize(initialWidth: number, initialHeight: number) {
  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : initialWidth,
    height: isClient ? window.innerHeight : initialHeight,
  });

  useEventListener("resize", () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return windowSize;
}

export default useWindowSize;
