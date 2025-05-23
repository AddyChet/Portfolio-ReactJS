import { useEffect } from "react";
import { gsap } from "gsap";
import BlurBlob from "./Blurblob";

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      gsap.to("#cursor-blob", {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="cursor-blob"
      className="fixed z-30 pointer-events-none"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <BlurBlob />
    </div>
  );
};

export default Cursor;
