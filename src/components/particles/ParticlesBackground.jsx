import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config";

const ParticlesBackground = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return (
    <div style={{ zIndex: "-1" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
    </div>
  );
};

export default ParticlesBackground;
