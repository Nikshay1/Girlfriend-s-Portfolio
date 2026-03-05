import { motion } from 'framer-motion';

const skillGroups = [
    {
        category: 'Teaching',
        color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
        tagBg: 'bg-indigo-500/10 text-indigo-300',
        skills: ['Spoken English', 'Comparative English', 'Interview Preparation'],
    },
    {
        category: 'Communication',
        color: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
        tagBg: 'bg-violet-500/10 text-violet-300',
        skills: ['Public Speaking', 'Classroom Interaction', 'Online Class Delivery'],
    },
    {
        category: 'Technical',
        color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        tagBg: 'bg-blue-500/10 text-blue-300',
        skills: ['Social Media Handling', 'Content Creation', 'YouTube SEO', 'Camera Operation'],
    },
    {
        category: 'General',
        color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        tagBg: 'bg-emerald-500/10 text-emerald-300',
        skills: ['Organizational Skills', 'Student Management', 'Interpersonal Skills'],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 md:py-32">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Skills</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
                        What I bring to the table
                    </h2>
                </motion.div>

                <div className="mt-12 grid sm:grid-cols-2 gap-6">
                    {skillGroups.map((group, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-6 rounded-2xl bg-surface-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                        >
                            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${group.color}`}>
                                {group.category}
                            </span>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {group.skills.map((skill, j) => (
                                    <span
                                        key={j}
                                        className={`text-xs font-medium px-3 py-1.5 rounded-lg ${group.tagBg} transition-transform duration-200 hover:scale-105`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
