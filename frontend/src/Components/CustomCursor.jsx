import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);

  useEffect(() => {
    // Track mouse movements
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      // Cleanup event listeners
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "10px",
        height: "10px",
        backgroundColor: "red", // Dot color
        borderRadius: "50%",
        pointerEvents: "none",
        transition: "transform 0.1s ease-out", // Smooth movement
        transform: visible ? "translate(-50%, -50%) scale(1)" : "scale(0)", // Scale effect on visibility
        zIndex: 1000,
      }}
    />
  );
};

export default CustomCursor;
