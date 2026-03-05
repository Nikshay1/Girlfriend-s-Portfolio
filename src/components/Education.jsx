import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';

const education = [
    {
        degree: 'B.Sc in Biochemistry',
        institution: 'Indira Gandhi National Open University (IGNOU)',
        location: 'Alipur, Delhi',
        period: '2022 – 2026',
        current: true,
    },
    {
        degree: 'Senior Secondary (Medical)',
        institution: 'Co-Ed Government Sarvodaya Vidyalaya',
        location: 'Dakshin Puri, Delhi',
        period: '2020 – 2022',
    },
    {
        degree: 'Matriculation',
        institution: 'Tinu Public School',
        location: 'Holi Chowk, Delhi',
        period: '2019 – 2020',
    },
];

export default function Education() {
    return (
        <section id="education" className="py-24 md:py-32">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Education</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
                        Academic background
                    </h2>
                </motion.div>

                <div className="mt-12 space-y-6">
                    {education.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative flex gap-5 p-6 rounded-2xl bg-surface-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                        >
                            <div className="hidden sm:flex w-12 h-12 rounded-xl bg-primary/10 items-center justify-center text-primary shrink-0 group-hover:bg-primary/15 transition-colors">
                                <HiAcademicCap size={22} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                    <div>
                                        <h3 className="text-base font-semibold text-text-primary flex items-center gap-2">
                                            {item.degree}
                                            {item.current && (
                                                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/15 text-primary">
                                                    Current
                                                </span>
                                            )}
                                        </h3>
                                        <p className="text-sm text-text-secondary mt-1">{item.institution}</p>
                                        <p className="text-xs text-text-tertiary mt-0.5">{item.location}</p>
                                    </div>
                                    <span className="text-xs font-medium text-text-tertiary bg-surface-alt px-3 py-1 rounded-full whitespace-nowrap border border-border">
                                        {item.period}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
