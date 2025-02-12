import React, { useState, useEffect } from "react";

const PacManSVG = ({ openMouth }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="32" fill="#FFD700" />
    {openMouth && <path d="M32 32 L64 16 A32 32 0 1 1 64 48 Z" fill="#000" />}
    <circle cx="44" cy="20" r="4" fill="#000" />
  </svg>
);

const CoinSVG = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill="#FFD700" />
  </svg>
);

const PacManComponent = () => {
  const [position, setPosition] = useState(0);
  const [openMouth, setOpenMouth] = useState(true);
  const [coins, setCoins] = useState([100, 200, 300, 400, 500]);
  const initialCoins = [100, 200, 300, 400, 500];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev < window.innerWidth - 64 ? prev + 5 : 0));
      setOpenMouth((prev) => !prev);

      setCoins((prevCoins) => {
        const newCoins = prevCoins.filter(
          (coin) => !(position + 64 > coin - 8 && position + 64 < coin + 8)
        );
        return newCoins;
      });

      if (position >= window.innerWidth - 64) {
        setCoins(initialCoins);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [position]);

  return (
    <div className="relative h-[7em] w-full overflow-hidden">
      <div
        className="absolute"
        style={{ left: position, top: "50%", transform: "translateY(-50%)" }}
      >
        <PacManSVG openMouth={openMouth} />
      </div>
      {coins.map((coin, index) => (
        <div
          key={index}
          className="absolute"
          style={{ left: coin, top: "50%", transform: "translateY(-50%)" }}
        >
          <CoinSVG />
        </div>
      ))}
    </div>
  );
};

export default PacManComponent;
