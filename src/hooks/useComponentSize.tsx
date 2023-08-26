import { RefObject, useLayoutEffect, useRef, useState } from "react";

interface Size {
  width: number;
  height: number;
}

// Custom Hook to get the dimensions of an element
const useComponentSize = (): [RefObject<HTMLDivElement>, Size] => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useLayoutEffect(() => {
    // Function to update size
    const updateSize = () => {
      if (ref.current) {
        setSize({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    // Initialize the dimensions
    updateSize();

    // Attach the resize event listener
    window.addEventListener("resize", updateSize);

    // Cleanup function: Remove event listener
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return [ref, size];
};

export default useComponentSize;
