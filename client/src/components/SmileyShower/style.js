import { css } from '@emotion/core'

export const container = css`
  position: absolute;
  top: 0;
  left: 0;
  width: "100%";
  height: "100%";
`

export const particles = (props) => {
  return {
    particles: {
      number: {
        value: 50,
        density: {
          enable: false,
          value_area: 1803.4120608655228
        }
      },
      color: {
        value: ["#380e7f", "#6915cf", "#d62196", "#e497cd"]
      },
      shape: {
        type: "image",
        image: {
          src: "https://everydae-images.s3-us-west-2.amazonaws.com/" + (props.happy ? "celebration-hands.png" : "worried-face.png"), 
          width: 50,
          height: 50
        },
      },
      opacity: {
        value: 0.4008530152163807,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 25,
        random: true,
        anim: {
          enable: false,
          speed: 50,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 0,
        color: "#ffffff",
        opacity: 0.3687847739990702,
        width: 0.6413648243462091
      },
      move: {
        enable: true,
        speed: 6,
        direction: props.happy ? "top" : "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: false,
          mode: "repulse"
        },
        onclick: {
          enable: false,
          mode: "bubble"
        },
        resize: false
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  }
}