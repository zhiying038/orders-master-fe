import throttle from "lodash/throttle";
import { useEffect, useState } from "react";

// https://betterprogramming.pub/usebreakpoint-hook-get-media-query-breakpoints-in-react-3f1779b73568
// https://getbootstrap.com/docs/5.0/layout/breakpoints/
const getDeviceConfig = (width: number) => {
  let breakpoint = "";
  if (width < 576) {
    breakpoint = "xs";
  } else if (width >= 576 && width < 768) {
    breakpoint = "sm";
  } else if (width >= 768 && width < 992) {
    breakpoint = "md";
  } else if (width >= 992 && width < 1200) {
    breakpoint = "lg";
  } else if (width >= 1200) {
    breakpoint = "xxl";
  }

  return { breakpoint };
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    const calcInnerWidth = throttle(() => {
      setBreakpoint(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return breakpoint;
};
