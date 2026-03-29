import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, X, Maximize2, Crosshair, Cpu, Wrench } from "lucide-react";
import A1 from "../assets/A1.jpeg";
import sc4 from "../assets/sc4.jpeg";
import car1_g from "../assets/car1_g.jpeg";
import ZA from "../assets/ZA.jpeg";

const bentoProjects = [
    {
        id: "p1",
        title: "Bionic & Prosthetic Hand",
        role: "Team Leader & Lead Designer",
        description: "Spearheaded the design and assembly of a low-cost prosthetic hand controlled by EMG signals. Focused on restoring independence through biomechanical innovation and accessible technology, as presented in the official technical proposal.",
        objectives: "Provide an accessible, lightweight prosthetic solution for amputees. Focus on lowering manufacturing costs using 3D printing while ensuring high responsiveness and natural mimicking of human hand biomechanics.",
        specs: "Controlled via non-invasive EMG or EEG sensors reading myoelectric signals. Structured with lightweight custom 3D-printed materials for extended wearable comfort, integrated with advanced signal processing algorithms.",
        tech: ["EMG Sensors", "Myoelectric Control", "3D Printing", "Biomechanics"],
        image: ZA,
        modalImage: A1,
        spanClass: "md:col-span-2 lg:col-span-2 md:row-span-2", 
        icon: <Cpu size={24} />,
    },
    {
        id: "p2",
        title: "Autonomous Mine Detector",
        description: "An ATmega32-powered autonomous vehicle equipped with metal detectors and ultrasonic sensors for safe, unmanned landmine clearing.",
        objectives: "Eliminate human risk in mine-clearing operations by deploying an autonomous sweep vehicle capable of intelligent pathfinding and hidden threat detection.",
        specs: "Utilizes an ATmega32 microcontroller orchestrating ultrasonic arrays for obstacle avoidance and an H-Bridge motor driver for rugged mobility. Employs localized electromagnetic induction loops for subsurface mine detection.",
        tech: ["ATmega32", "Ultrasonic Sensors", "H-Bridge", "Obstacle Avoidance Algorithms"],
        image: sc4,
        spanClass: "md:col-span-1 lg:col-span-1 md:row-span-1", 
        icon: <Crosshair size={24} />,
    },
    {
        id: "p3",
        title: "EVER",
        role: "Team Leader & Project Manager",
        description: "Led a high-performance engineering team to build an electric vehicle prototype. Managed MATLAB mathematical modeling for endurance tests and oversaw the integration of 48V LiFePo4 battery systems, achieving a 0.30 drag coefficient and 0-62 km/h in 4 seconds.",
        objectives: "Engineer a high-performance, aerodynamically optimized electric racing prototype demonstrating rapid acceleration, sustained battery efficiency, and reliable track performance.",
        specs: "Powered by a highly stable 48V LiFePo4 energy storage system feeding dual high-torque hub motors. Features a lightweight aerodynamic fiberglass body meticulously sculpted via MATLAB aerodynamic modeling.",
        tech: ["MATLAB Modeling", "LiFePo4 Battery Tech", "Aerodynamic Fiberglass Body"],
        image: car1_g,
        spanClass: "md:col-span-1 lg:col-span-1 md:row-span-1", 
        icon: <Wrench size={24} />,
    }
];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold inline-flex items-center gap-4">
                        <span className="text-accent"><FolderGit2 size={40} /></span>
                        Innovation Showcase
                    </h2>
                    <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full shadow-[0_0_15px_#38BDF8]"></div>
                </motion.div>

                {/* Dynamic Bento Grid - Glassmorphism Style */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {bentoProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            onClick={() => setSelectedProject(project)}
                            className={`relative overflow-hidden group cursor-pointer rounded-[2rem] bg-[#171F24]/60 backdrop-blur-xl border border-white/10 hover:border-[#38BDF8]/50 hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.3)] transition-all duration-300 flex flex-col ${project.spanClass}`}
                            role="button"
                            tabIndex={0}
                            aria-label={`View details for ${project.title}`}
                        >
                            {/* Strict Aspect Ratio Image Container */}
                            <div className="relative w-full aspect-video border-b border-[#38BDF8]/20 bg-[#0B1215] flex items-center justify-center p-4 shadow-[inset_0px_0px_20px_rgba(56,189,248,0.1)]">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        loading={index === 0 ? "eager" : "lazy"}
                                        style={{ imageRendering: 'auto' }}
                                        className="max-w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.05]"
                                    />
                                
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 z-10 hidden sm:block">
                                    <Maximize2 size={20} />
                                </div>
                            </div>

                            {/* Clean Text Data Area */}
                            <div className="p-6 md:p-8 flex flex-col flex-1 bg-[#171F24]/80 justify-start">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="text-[#38BDF8] bg-[#38BDF8]/10 p-3 rounded-2xl border border-[#38BDF8]/20 shadow-inner transform transition-transform duration-300 group-hover:-translate-y-1 mt-1">
                                        {project.icon}
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors leading-tight">
                                            {project.title}
                                        </h3>
                                        {project.role && (
                                            <span className="inline-block px-2.5 py-1 rounded-md bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-[10px] md:text-xs font-bold tracking-wider uppercase shadow-sm w-fit">
                                                {project.role}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm md:text-base text-slate-300 line-clamp-3 leading-relaxed mb-6 flex-1 mt-1">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-semibold tracking-wide text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-3 py-1.5 rounded-lg">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Modal Portal to escape stacking context */}
                {typeof document !== 'undefined' && createPortal(
                    <AnimatePresence>
                        {selectedProject && (
                            <div className="fixed inset-0 z-[99999] isolate">
                                {/* Backdrop Overlay */}
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 bg-black/90 backdrop-blur-lg z-[99998]"
                                    onClick={() => setSelectedProject(null)}
                                />

                                {/* Strict Position Centering Wrapper */}
                                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99999] w-[95%] md:w-full max-w-6xl flex justify-center items-center pointer-events-none">
                                    {/* Modal Content */}
                                    <motion.div 
                                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                        animate={{ scale: 1, opacity: 1, y: 0 }}
                                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                        className="bg-[#171F24] border border-[#38BDF8]/30 w-full max-h-[90vh] rounded-[2rem] overflow-hidden shadow-[0_0_50px_-10px_#38BDF8] flex flex-col lg:flex-row relative cursor-default pointer-events-auto"
                                        role="dialog"
                                        aria-modal="true"
                                    >
                                <button 
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 z-[9999] bg-black/60 hover:bg-[#38BDF8] text-white p-2.5 rounded-full backdrop-blur-md transition-colors shadow-lg group"
                                    aria-label="Close Modal"
                                >
                                    <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                                </button>
                                
                                {/* Image Container Fix */}
                                <div className="lg:w-1/2 relative min-h-[300px] max-h-[60vh] lg:max-h-full bg-[#0B1215] flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-[#38BDF8]/20 shadow-[inset_0px_0px_30px_rgba(56,189,248,0.1)]">
                                    <img 
                                        src={selectedProject.modalImage || selectedProject.image} 
                                        alt={selectedProject.title}
                                        style={{ imageRendering: 'auto' }}
                                        className="max-w-full h-auto object-contain max-h-[60vh] drop-shadow-2xl"
                                    />
                                </div>

                                {/* Text & Data Container */}
                                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-start relative z-10 overflow-y-auto bg-[#171F24] max-h-[60vh] lg:max-h-[90vh]">
                                    <div className="mb-8 mt-4 lg:mt-0">
                                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                                            {selectedProject.title}
                                        </h3>
                                        {selectedProject.role && (
                                            <span className="inline-block px-3 py-1.5 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold tracking-widest uppercase shadow-sm">
                                                {selectedProject.role}
                                            </span>
                                        )}
                                    </div>
                                    
                                    <div className="space-y-8 mb-10">
                                        <div>
                                            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#38BDF8] mb-3">
                                                <Crosshair size={16} /> Objectives
                                            </h4>
                                            <p className="text-slate-300 text-base leading-relaxed font-light">
                                                {selectedProject.objectives}
                                            </p>
                                        </div>
                                        
                                        <div>
                                            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#38BDF8] mb-3">
                                                <Wrench size={16} /> Technical Specs
                                            </h4>
                                            <p className="text-slate-300 text-base leading-relaxed font-light">
                                                {selectedProject.specs}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-auto">
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4 pb-2 border-b border-white/10">Key Tech Stack</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedProject.tech.map((tech, i) => (
                                                <span key={i} className="text-sm font-medium text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-4 py-2 rounded-xl shadow-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
                )}
            </div>
        </section>
    );
};
