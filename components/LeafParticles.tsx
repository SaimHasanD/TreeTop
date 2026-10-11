"use client";

import { useEffect, useState, useRef } from "react";

const LEAF_SVG_1 = "M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z";
const LEAF_SVG_2 = "M12 0c6.627 0 12 5.373 12 12 0 6.627-5.373 12-12 12-6.627 0-12-5.373-12-12C0 5.373 5.373 0 12 0z";
const LEAF_SVG_3 = "M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z";
const LEAF_SVG_4 = "M12 0c6.627 0 12 5.373 12 12 0 6.627-5.373 12-12 12-6.627 0-12-5.373-12-12C0 5.373 5.373 0 12 0z";

const LEAVES = [LEAF_SVG_1, LEAF_SVG_2, LEAF_SVG_3, LEAF_SVG_4];

type Leaf = {
  id: number;
  left: number;
  scale: number;
  duration: number;
  path: string;
};

export default function LeafParticles() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const nextId = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLeaf: Leaf = {
        id: nextId.current++,
        left: 5 + Math.random() * 85,
        scale: 0.7 + Math.random() * 0.7,
        duration: 8 + Math.random() * 6,
        path: LEAVES[Math.floor(Math.random() * LEAVES.length)]
      };

      setLeaves((prev) => [...prev, newLeaf]);

      setTimeout(() => {
        setLeaves((prev) => prev.filter((leaf) => leaf.id !== newLeaf.id));
      }, newLeaf.duration * 1000);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <svg
          key={leaf.id}
          viewBox="0 0 24 24"
          fill="#2d6e3a"
          style={{
            position: "absolute",
            bottom: "-24px",
            left: `${leaf.left}%`,
            width: "24px",
            height: "24px",
            transform: `scale(${leaf.scale})`,
            animation: `leafFloat ${leaf.duration}s linear forwards`
          }}
        >
          <path d={leaf.path} />
        </svg>
      ))}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes leafFloat {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.75;
          }
          90% {
            opacity: 0.75;
          }
          100% {
            transform: translateY(-110vh) rotate(320deg);
            opacity: 0;
          }
        }
      `}} />
    </div>
  );
}
