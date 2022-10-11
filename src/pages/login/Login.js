import * as React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { ParticlesTheme } from "./../../shared/particlesTheme";

function Login() {
  const particlesInit = React.useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = React.useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <React.Fragment>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesTheme}
      />
      <div>login</div>
    </React.Fragment>
  );
}

export default Login;
