import { motion } from "framer-motion";
import { Cpu, Stethoscope, Code2 } from "lucide-react";

const skillsData = [
    {
        category: "Embedded & Hardware",
        icon: <Cpu size={28} />,
        items: ["C/Embedded C", "ATmega32", "Arduino", "PCB Design", "SOLIDWORKS"],
        colSpan: "md:col-span-2 lg:col-span-2",
    },
    {
        category: "Medical Tech",
        icon: <Stethoscope size={28} />,
        items: ["3D Reconstruction", "Sterilization Systems", "CBCT Simulation"],
        colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
        category: "Software & Data",
        icon: <Code2 size={28} />,
        items: ["Python (Harvard Certified)", "Data Structures", "NumPy", "Pandas", "scikit-learn"],
        colSpan: "md:col-span-3 lg:col-span-3",
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-3">
                        <span className="text-accent"><Code2 size={32} /></span>
                        Skills & Expertise
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`bento-card group flex flex-col h-full ${skill.colSpan}`}
                        >
                            <div className="p-3 bg-accent/10 w-max rounded-xl text-accent mb-6 group-hover:scale-110 transition-transform">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {skill.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-slate-300 font-medium"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
