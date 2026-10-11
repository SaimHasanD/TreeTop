"use client";

import { useEffect, useState } from "react";

export default function ForestHero() {
  const [fireflies, setFireflies] = useState<{ id: number; left: number; top: number; delay: number }[]>([]);

  useEffect(() => {
    setFireflies(
      Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        left: 10 + Math.random() * 80,
        top: 40 + Math.random() * 50,
        delay: Math.random() * 3,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" style={{ background: "linear-gradient(to bottom, #071409 0%, #0d2818 60%, #163d22 100%)" }}>
      {/* Background Hill Silhouette (Layer 1) */}
      <svg className="absolute bottom-0 w-full h-[50vh] opacity-30 preserve-3d" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#071409" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      
      {/* Mid Tree Line (Layer 2) */}
      <svg className="absolute bottom-0 w-full h-[40vh] opacity-60" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#0d2818" fillOpacity="1" d="M0,128L80,160C160,192,320,256,480,261.3C640,267,800,213,960,181.3C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>

      {/* Near Trees and Ground (Layer 3) */}
      <svg className="absolute bottom-0 w-full h-[30vh] opacity-100" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#163d22" fillOpacity="1" d="M0,64L80,90.7C160,117,320,171,480,192C640,213,800,203,960,186.7C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>

      {/* Branch Bottom-Left */}
      <svg className="absolute bottom-0 left-0 h-[40vh] origin-bottom-left animate-sway-left" viewBox="0 0 200 400" preserveAspectRatio="xMinYMax meet">
        <path fill="#071409" d="M0,400 L50,400 Q80,200 150,150 Q120,180 30,300 Z" />
        <path fill="#0d2818" d="M150,150 Q180,100 200,120 Q160,160 110,200 Z" />
      </svg>

      {/* Branch Bottom-Right */}
      <svg className="absolute bottom-0 right-0 h-[45vh] origin-bottom-right animate-sway-right" viewBox="0 0 200 400" preserveAspectRatio="xMaxYMax meet">
        <path fill="#071409" d="M200,400 L150,400 Q120,200 50,150 Q80,180 170,300 Z" />
        <path fill="#0d2818" d="M50,150 Q20,100 0,120 Q40,160 90,200 Z" />
      </svg>

      {/* Fireflies */}
      {fireflies.map((ff) => (
        <div
          key={ff.id}
          className="absolute w-1.5 h-1.5 bg-[#e8a020] rounded-full"
          style={{
            left: `${ff.left}%`,
            top: `${ff.top}%`,
            boxShadow: "0 0 8px 2px rgba(232,160,32,0.6)",
            animation: `shimmer 3s ease-in-out infinite alternate ${ff.delay}s`
          }}
        />
      ))}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sway-left {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes sway-right {
          0%, 100% { transform: rotate(2deg); }
          50% { transform: rotate(-2deg); }
        }
        @keyframes shimmer {
          0% { opacity: 0.3; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
        }
        .animate-sway-left {
          animation: sway-left 4s ease-in-out infinite;
        }
        .animate-sway-right {
          animation: sway-right 4s ease-in-out infinite;
        }
      `}} />
    </div>
  );
}
