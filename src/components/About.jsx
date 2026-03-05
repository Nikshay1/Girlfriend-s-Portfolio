import { motion } from 'framer-motion';
import { HiAcademicCap, HiChat, HiDesktopComputer, HiSparkles } from 'react-icons/hi';

const highlights = [
    { icon: HiAcademicCap, label: 'B.Sc Biochemistry', sub: 'IGNOU, Delhi' },
    { icon: HiChat, label: 'English Trainer', sub: '150+ students taught' },
    { icon: HiDesktopComputer, label: 'Content Creator', sub: 'Social media & blogs' },
    { icon: HiSparkles, label: 'Communication', sub: 'Training & coaching' },
];

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">About</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
                        A little about me
                    </h2>
                </motion.div>

                <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-5"
                    >
                        <p className="text-text-secondary leading-relaxed">
                            I'm Jyoti Chauhan, an undergraduate student pursuing a B.Sc in Biochemistry from Indira Gandhi National Open University (IGNOU), Delhi. My journey has been shaped by a deep passion for teaching, communication, and digital content creation.
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                            With over two years of experience teaching spoken English to 150+ students across offline and online platforms, I've developed strong classroom management and interpersonal skills. I've also worked in social media management, blog writing, and video production for real estate and education brands.
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                            I'm driven by a desire to learn, grow, and make a meaningful impact through education and creative communication.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {highlights.map((item, i) => (
                            <div
                                key={i}
                                className="group p-5 rounded-2xl bg-surface-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:bg-primary/15 transition-colors">
                                    <item.icon size={20} />
                                </div>
                                <p className="text-sm font-semibold text-text-primary">{item.label}</p>
                                <p className="text-xs text-text-tertiary mt-0.5">{item.sub}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
