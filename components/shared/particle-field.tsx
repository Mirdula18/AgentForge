"use client";

import { useMemo } from "react";

export function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 4}s`,
        duration: `${4 + Math.random() * 4}s`,
      })),
    [],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute size-1 rounded-full bg-white/50 animate-[pulse_var(--duration)_linear_infinite]"
          style={
            {
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              "--duration": particle.duration,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
