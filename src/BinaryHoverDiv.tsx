import { useState, useEffect } from "react";

export default function BinaryHoverDiv() {
  const [binary, setBinary] = useState("");

  useEffect(() => {
    let initialBinary = "";
    for (let i = 0; i < 400; i++) {
      initialBinary += Math.floor(Math.random() * 2) % 2 === 0 ? "0" : "1";
      if (i % 20 === 0) {
        initialBinary += " ";
      }
    }
    setBinary(initialBinary);
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] bg-[#a5fa04]/40 shadow-lg shadow-[#a5fa04] rounded-[20px] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100"
        style={{ overflow: "hidden" }}
      >
        <p
          className="text-white font-mono text-[1.6vw] leading-none"
          style={{ whiteSpace: "pre-wrap", wordBreak: "break-word", transform: "translateY(100%)", animation: "slide-up 3s forwards" }}
        >
          {binary}
        </p>
      </div>
    </div>
  );
}
