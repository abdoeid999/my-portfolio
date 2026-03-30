import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import profileImg from "../assets/ziad.png";

export const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 w-full max-w-6xl">
                <div className="flex flex-col-reverse lg:flex-row gap-12 items-center justify-between">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col space-y-6 lg:w-1/2"
                    >
                        <div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-3 block"
                            >
                                Research & Development Engineer
                            </motion.span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mt-2 leading-[0.9] tracking-tight">
                                Ziad <span className="text-accent">Eid</span>
                            </h1>
                            <h2 className="text-xl md:text-2xl text-slate-300 font-medium mt-8 max-w-xl leading-relaxed">
                                I build <span className="text-white border-b-2 border-accent/30">embedded systems</span> and <span className="text-white border-b-2 border-accent/30">medical technologies</span> that solve real-world problems.
                            </h2>
                        </div>

                        <p className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed font-light">
                            Bridging the gap between complex hardware and intelligent software to innovate the next generation of healthcare solutions.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <motion.a
                                href="#projects"
                                className="btn-primary group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Projects
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="/cv.pdf"
                                download
                                className="btn-secondary group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download CV
                                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Image/Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex justify-center lg:justify-end lg:w-1/2"
                    >
                        <div className="relative flex justify-center items-center">
                            {/* Depth of field blur layer behind */}
                            <div className="absolute rounded-full opacity-50 blur-[70px] z-0 pointer-events-none transition-transform duration-1000 hover:scale-105 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-accent/30"></div>

                            {/* Outer glowing ring */}
                            <div className="absolute rounded-full bg-[#38BDF8]/20 blur-[40px] animate-pulse z-0 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80"></div>

                            {/* Image Container */}
                            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-2 border-[#38BDF8]/20 shadow-2xl p-1 overflow-hidden bg-[#0B1215] z-10 hover:border-[#38BDF8] hover:shadow-[0_0_50px_-5px_#38BDF8] transition-all duration-500 flex items-center justify-center">
                                <div className="w-full h-full rounded-full overflow-hidden relative group bg-[#0B1215]">
                                    {/* Subtle overlay effect */}
                                    <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0 rounded-full"></div>
                                    <img
                                        src={profileImg}
                                        alt="Ziad Eid"
                                        loading="eager"
                                        className="w-full h-full object-cover object-top transform transition-transform duration-1000 group-hover:scale-[1.05] z-0"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
