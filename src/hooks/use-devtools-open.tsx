import { useEffect, useState } from "react";
import { addListener, launch, stop } from "devtools-detector";

const useDevToolsOpen = () => {
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    addListener((isOpen) => {
      if (isOpen) {
        setIsDevToolsOpen(true);
        stop();
      }
    });
    launch();
    return () => {
      stop();
    };
  }, []);
  return { isDevToolsOpen };
};

export default useDevToolsOpen;
export { useDevToolsOpen };
