export const ParticlesOptions: any = {
  fpsLimit: 120,
  particles: {
    groups: {
      z5000: {
        number: {
          value: 70,
        },
        zIndex: {
          value: 50,
        },
      },
      z7500: {
        number: {
          value: 30,
        },
        zIndex: {
          value: 75,
        },
      },
      z2500: {
        number: {
          value: 50,
        },
        zIndex: {
          value: 25,
        },
      },
      z1000: {
        number: {
          value: 40,
        },
        zIndex: {
          value: 10,
        },
      },
    },
    number: {
      value: 200,
      density: {
        enable: false,
        value_area: 800,
      },
    },
    color: {
      value: "#fff",
      animation: {
        enable: false,
        speed: 20,
        sync: true,
      },
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: false,
        speed: 3,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
    },
    links: {
      enable: false,
      distance: 100,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      angle: {
        value: 10,
        offset: 0,
      },
      enable: true,
      speed: 5,
      direction: "right",
      random: false,
      straight: false,
      outModes: {
        default: "out",
      },
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    zIndex: {
      value: 5,
      opacityRate: 0.5,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: false,
        mode: "repulse",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
      },
      repulse: {
        distance: 200,
      },
      push: {
        quantity: 4,
        groups: ["z5000", "z7500", "z2500", "z1000"],
      },
      remove: {
        quantity: 2,
      },
    },
  },
  detectRetina: true,
  background: {
    color: "#000000",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
  emitters: {
    position: {
      y: 55,
      x: -5,
    },
    rate: {
      delay: 7,
      quantity: 1,
    },
    size: {
      width: 0,
      height: 0,
    },
  },
};
