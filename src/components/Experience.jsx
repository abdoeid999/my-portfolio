import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        company: "Elezaby Medical Factory",
        role: "R&D Software Engineer",
        date: "2024 - Present",
        description: [
            "Spearheaded development of CBCT 3D imaging prototypes, integrating complex hardware-software pipelines.",
            "Engineered low-level embedded systems using ATmega32 for real-time medical device operations.",
            "Translated clinical requirements into technical specifications for mechanical and software teams."
        ],
    },
    {
        company: "ITI Internships",
        role: "Software QA / Embedded Systems",
        date: "2023",
        description: [
            "Executed Software QA protocols, identifying edge cases to improve system reliability.",
            "Implemented and debugged communication interfaces (I2C, SPI, UART) on AVR architectures.",
            "Optimized logic flow and analyzed system bottlenecks for embedded component interactions."
        ],
    },
    {
        company: "Siemens Energy",
        role: "Digital Circuits Operations",
        date: "2022",
        description: [
            "Managed operational continuity of complex digital circuits and industrial hardware.",
            "Analyzed operational schematic designs to diagnose and rectify hardware anomalies.",
            "Collaborated with cross-functional teams to streamline incident response workflows."
        ],
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-3">
                        <span className="text-accent"><Briefcase size={32} /></span>
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-10 md:pl-0"
                        >
                            {/* Mobile timeline elements */}
                            <div className="md:hidden absolute left-[3px] top-2 bottom-[-4rem] w-0.5 bg-white/10"></div>
                            <div className="md:hidden absolute left-[-3px] top-2 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-background z-10"></div>

                            <div className="md:grid md:grid-cols-5 md:gap-12 lg:gap-16 group">
                                <div className="md:col-span-2 flex flex-col items-start md:items-end md:text-right mt-1 mb-5 md:mb-0 relative md:pr-10">
                                    {/* Desktop timeline elements */}
                                    <div className="hidden md:block absolute right-[-1.85rem] lg:right-[-2.35rem] top-2 w-3.5 h-3.5 rounded-full bg-background border-2 border-accent ring-4 ring-background z-10 transition-colors group-hover:bg-accent"></div>
                                    <div className="hidden md:block absolute right-[-1.5rem] lg:right-[-2rem] top-2 bottom-[-4rem] w-0.5 bg-white/10"></div>

                                    <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-1">{exp.date}</span>
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">{exp.company}</h3>
                                </div>

                                <div className="md:col-span-3 text-left">
                                    <h4 className="text-lg md:text-xl text-[#38BDF8] font-bold mb-4 tracking-tight uppercase text-xs">{exp.role}</h4>
                                    <ul className="space-y-4">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-slate-400 text-sm md:text-base flex items-start gap-3 leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 flex-shrink-0"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
