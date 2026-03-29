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
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
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
                        Whether you have a question, want to collaborate on a project, or simply want to say hi, my inbox is always open.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="bento-card relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 scale-[3] opacity-[0.03] text-accent group-hover:scale-[3.5] group-hover:opacity-10 transition-all duration-500">
                                <Mail size={120} />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-white relative z-10">Contact Information</h3>

                            <div className="space-y-6 relative z-10">
                                <a href="mailto:zyadeid28@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-accent transition-colors group/item">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent group-hover/item:bg-accent/20 transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-slate-400 mb-1">Email</span>
                                        <span className="font-medium">zyadeid28@gmail.com</span>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 text-slate-300 group/item">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent group-hover/item:bg-accent/20 transition-colors">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-slate-400 mb-1">Phone</span>
                                        <span className="font-medium">01140012767</span>
                                    </div>
                                </div>

                                <a href="https://linkedin.com/in/ziad-eid-66b960231/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-accent transition-colors group/item">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent group-hover/item:bg-accent/20 transition-colors">
                                        <LinkedinIcon size={20} />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-slate-400 mb-1">LinkedIn</span>
                                        <span className="font-medium">ziad-eid-66b960231</span>
                                    </div>
                                </a>
                            </div>

                            <div className="mt-10 pt-8 border-t border-white/10 relative z-10">
                                <p className="text-slate-400 mb-4 text-sm font-medium uppercase tracking-wider">Also Available</p>
                                <motion.a
                                    href="/cv.pdf"
                                    download
                                    className="w-full btn-secondary justify-center text-accent hover:text-white border-accent/30 hover:bg-accent/10 group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                                    Download Complete CV
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <form ref={form} onSubmit={sendEmail} className="bento-card">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                                        title="Please enter a valid email address."
                                        className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                />
                            </div>

                            <div className="mb-8">
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                                ></textarea>
                            </div>

                            <AnimatePresence>
                                {status.message && (
                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
                                    >
                                        {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                                        <span className="font-medium text-sm">{status.message}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary justify-center disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Send Message
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
