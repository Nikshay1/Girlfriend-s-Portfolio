import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiPaperAirplane } from 'react-icons/hi';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "2b9b11f7-afdf-44b0-9668-6c42a0546cce",
                    name: form.name,
                    email: form.email,
                    message: form.message,
                }),
            });
            const result = await response.json();
            if (result.success) {
                setSubmitted(true);
                setForm({ name: '', email: '', message: '' }); // Clear form
                setTimeout(() => setSubmitted(false), 3000);
            }
        } catch (error) {
            console.error("Error submitting form", error);
        }
    };

    return (
        <section id="contact" className="py-24 md:py-32">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Contact</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
                        Get in touch
                    </h2>
                </motion.div>

                <div className="mt-12 grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <p className="text-text-secondary leading-relaxed">
                            I'd love to hear from you! Whether you have a question, opportunity, or just want to connect — feel free to reach out.
                        </p>

                        <div className="space-y-4">
                            <a
                                href="mailto:jc4108034@gmail.com"
                                className="flex items-center gap-4 p-4 rounded-xl bg-surface-card border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200 group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors">
                                    <HiMail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-text-tertiary">Email</p>
                                    <p className="text-sm font-medium text-text-primary">jc4108034@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="tel:+917042922528"
                                className="flex items-center gap-4 p-4 rounded-xl bg-surface-card border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200 group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors">
                                    <HiPhone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-text-tertiary">Phone</p>
                                    <p className="text-sm font-medium text-text-primary">+91 70429 22528</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <div>
                            <label htmlFor="name" className="block text-xs font-medium text-text-secondary mb-1.5">Name</label>
                            <input
                                id="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-surface-card border border-border text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs font-medium text-text-secondary mb-1.5">Email</label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-surface-card border border-border text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-xs font-medium text-text-secondary mb-1.5">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-surface-card border border-border text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                                placeholder="Write your message..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 w-full justify-center"
                        >
                            <HiPaperAirplane size={16} className="rotate-90" />
                            {submitted ? 'Message Sent!' : 'Send Message'}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
