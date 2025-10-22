"use client";
import { motion } from "motion/react";
import { useState } from "react";

interface PuzzlePieceProps {
  id: number;
  path: string;
  color: string;
  initialX: number;
  initialY: number;
  isCenter?: boolean;
}

export function PuzzlePiece({
  id,
  path,
  color,
  initialX,
  initialY,
  isCenter = false,
}: PuzzlePieceProps) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.g
      drag
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      dragElastic={0}
      initial={{ x: initialX, y: initialY }}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      whileHover={{ scale: isCenter ? 1 : 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width={800}
        height={800}
        viewBox="0 0 800 800"
        //   className="max-w-full"
        style={{ touchAction: "none" }}
      >
        <path
          d={path}
          fill={color}
          stroke="#ffffff"
          strokeWidth="3"
          style={{
            filter: isDragging
              ? "drop-shadow(0px 10px 20px rgba(0,0,0,0.3))"
              : "drop-shadow(0px 4px 8px rgba(0,0,0,0.2))",
            transition: "filter 0.2s ease",
          }}
        />
      </svg>
    </motion.g>
  );
}
