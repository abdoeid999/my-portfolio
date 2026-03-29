import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={{
                background: { color: { value: "transparent" } },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                    },
                    modes: {
                        repulse: { distance: 120, duration: 0.4 },
                    },
                },
                particles: {
                    color: { value: "#38BDF8" }, /* Accent color */
                    links: { color: "#38BDF8", distance: 150, enable: true, opacity: 0.1, width: 1 },
                    move: { direction: "none", enable: true, outModes: { default: "out" }, random: true, speed: 0.6, straight: false },
                    number: { density: { enable: true, area: 800 }, value: 40 },
                    opacity: { value: 0.3 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 2 } },
                },
                detectRetina: true,
            }}
            className="absolute inset-0 z-0"
        />
    );
};
