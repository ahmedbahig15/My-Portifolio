"use client";
import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particlesInit = async (engine: any) => {
  await loadSlim(engine);
};

const ParticleBackground = () => {
  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      particles: {
        number: { value: 50 },
        move: { enable: true, speed: 1.5 },
      },
    }),
    []
  );

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles id="tsparticles" options={options} />
    </ParticlesProvider>
  );
};

export default ParticleBackground;