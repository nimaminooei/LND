import React, { useEffect, useState } from "react";
import "./BubbleSection.css";

const BubbleSection = () => {
  const [pixels, setPixels] = useState([]);

  useEffect(() => {
    const createPixels = () => {
      const newPixels = Array.from({ length: 15 }).map(() => ({
        size: Math.random() * 8 + 6,
        x: Math.random() * 90,
        y: Math.random() * 100,
        speed: Math.random() * 0.3 + 0.3,
      }));
      setPixels(newPixels);
    };

    createPixels();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {pixels.map((pixel, index) => (
        <Pixel key={index} {...pixel} />
      ))}
    </div>
  );
};

const Pixel = ({ size, x, y, speed }) => {
  const [position, setPosition] = useState({ x, y });

  useEffect(() => {
    const movePixel = () => {
      setPosition((prev) => ({
        x: prev.x,
        y: (prev.y + speed * 0.05) % 100,
      }));

      requestAnimationFrame(movePixel);
    };

    movePixel();
  }, [speed]);

  const cloudSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
      <path d="M16 28h8v8h-8zm16 0h8v8h-8zm-8 0h8v8h-8z" fill="#ffffff"/>
      <path d="M52 32h-2v2h-2v2h-6v-2h-2v-2h-2v-2h-6v2h-6v-2h-6v2h-6v-2H6v2H4v2H2v-4h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h6v2h2v2h2v2h6v2h2v-2h2v-2h6v2h2v2h2v2h2v2h2v2h2v4z" fill="#ffffff"/>
    </svg>
  `;

  return (
    <div
      className="absolute"
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        transform: `translate(${position.x}vw, ${position.y}vh)`,
      }}
      dangerouslySetInnerHTML={{ __html: cloudSVG }}
    />
  );
};

export default BubbleSection;
