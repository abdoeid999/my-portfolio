import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Download, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

const LinkedinIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

export const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: null, message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        emailjs
            .sendForm('service_oj66txv', 'template_ts3otbi', form.current, {
                publicKey: 'cYe0gig0W33V8PgfN',
            })
            .then(
                () => {
                    setStatus({ type: 'success', message: 'Message sent successfully!' });
                    form.current.reset();
                },
                (error) => {
                    setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
                },
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden z-[1]">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-3">
                        <span className="text-accent"><Mail size={32} /></span>
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
                    <p className="text-slate-400 mt-6 max-w-xl mx-auto">
                        Ready to innovate together? Whether it's medical tech, embedded systems, or a new challenge—I'm just a message away.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="bg-[#171F24] border border-white/5 p-8 rounded-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 scale-[3] opacity-[0.03] text-accent group-hover:scale-[3.5] group-hover:opacity-10 transition-all duration-500">
                                <Mail size={120} />
                            </div>
                            <h3 className="text-2xl font-bold mb-8 text-white relative z-10 tracking-tight">Let's Connect</h3>

                            <div className="space-y-6 relative z-10">
                                <a href="mailto:zyadeid28@gmail.com" className="flex items-center gap-5 text-slate-300 hover:text-accent transition-all group/item">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent group-hover/item:bg-accent/20 transition-all group-hover/item:scale-110">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email Me</span>
                                        <span className="font-semibold text-lg">zyadeid28@gmail.com</span>
                                    </div>
                                </a>

                                <div className="flex items-center gap-5 text-slate-300 group/item">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent group-hover/item:bg-accent/20 transition-all group-hover/item:scale-110">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Call Me</span>
                                        <span className="font-semibold text-lg">01140012767</span>
                                    </div>
                                </div>

                                <a href="https://linkedin.com/in/ziad-eid-66b960231/" target="_blank" rel="noreferrer" className="flex items-center gap-5 text-slate-300 hover:text-accent transition-all group/item">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent group-hover/item:bg-accent/20 transition-all group-hover/item:scale-110">
                                        <LinkedinIcon size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">LinkedIn</span>
                                        <span className="font-semibold text-lg">ziad-eid</span>
                                    </div>
                                </a>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/5 relative z-10">
                                <motion.a
                                    href="/cv.pdf"
                                    download
                                    className="w-full h-14 rounded-2xl bg-accent text-background font-bold flex items-center justify-center gap-3 hover:shadow-[0_0_20px_#38BDF8] hover:scale-[1.02] active:scale-[0.98] transition-all"
                                >
                                    <Download size={20} />
                                    Download Resume
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 w-full"
                    >
                        <form ref={form} onSubmit={sendEmail} className="bg-[#171F24] border border-white/5 p-8 md:p-10 rounded-3xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Your Name"
                                        className="w-full bg-background border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-700"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="your@email.com"
                                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                                        className="w-full bg-background border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-700"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    placeholder="Project Inquiry"
                                    className="w-full bg-background border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-700"
                                />
                            </div>

                            <div className="mb-8">
                                <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    placeholder="How can I help you?"
                                    className="w-full bg-background border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none placeholder:text-slate-700"
                                ></textarea>
                            </div>

                            <AnimatePresence>
                                {status.message && (
                                    <motion.div 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={`mb-8 p-4 rounded-xl flex items-center gap-3 ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
                                    >
                                        {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                                        <span className="font-semibold text-sm">{status.message}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-14 rounded-2xl bg-white/5 text-white font-bold flex items-center justify-center gap-3 border border-white/10 hover:bg-accent hover:text-background hover:border-accent hover:shadow-[0_0_30px_#38BDF8] disabled:opacity-50 disabled:cursor-not-allowed transition-all group"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
