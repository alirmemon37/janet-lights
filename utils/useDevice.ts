import { useState, useEffect } from "react";

const useDevice = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const onResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = windowWidth < 768;

  return { isMobile };
};

export default useDevice;