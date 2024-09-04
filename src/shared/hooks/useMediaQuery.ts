import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  const media = window.matchMedia(query);

  useEffect(() => {
    const handleResize = () => {
      setMatches(media.matches);
    };

    if (media.matches !== matches) {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return matches;
}
