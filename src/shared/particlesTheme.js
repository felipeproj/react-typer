export const ParticlesTheme = {
  background: {
    color: {
      value: "#000",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 2,
      },
      repulse: {
        distance: 50,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"],
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",

      value: [
        "R",
        "E",
        "A",
        "C",
        "T",
        "T",
        "Y",
        "P",
        "E",
        "R",
        "G",
        "A",
        "M",
        "E",
      ],
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
