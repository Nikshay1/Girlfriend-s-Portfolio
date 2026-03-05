import { motion } from 'framer-motion';
import { BookOpen, Mic, Share2 } from 'lucide-react';
import DisplayCards from './ui/display-cards';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

const heroCards = [
    {
        icon: <BookOpen className="size-4 text-indigo-300" />,
        title: 'Biochemistry',
        description: 'B.Sc from IGNOU, Delhi',
        date: '2022 – 2026',
        iconClassName: 'text-indigo-500',
        titleClassName: 'text-indigo-400',
        className:
            '[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[\'\'] before:bg-blend-overlay before:bg-black/40 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0',
    },
    {
        icon: <Mic className="size-4 text-violet-300" />,
        title: 'English Trainer',
        description: '150+ students coached',
        date: '2+ years exp',
        iconClassName: 'text-violet-500',
        titleClassName: 'text-violet-400',
        className:
            '[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[\'\'] before:bg-blend-overlay before:bg-black/40 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0',
    },
    {
        icon: <Share2 className="size-4 text-blue-300" />,
        title: 'Content Creator',
        description: 'Social media & blogs',
        date: 'Current',
        iconClassName: 'text-blue-500',
        titleClassName: 'text-blue-400',
        className:
            '[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10',
    },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text content */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                                Jyoti Chauhan
                            </h1>

                            <p className="mt-6 text-base md:text-lg text-white/70 max-w-xl mx-auto lg:mx-0 font-medium">
                                Biochemistry Undergraduate · English Trainer · Content &amp; Social Media Executive
                            </p>

                            <p className="mt-4 text-sm md:text-base text-white/50 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                A motivated undergraduate student skilled in communication, teaching, and digital content creation with experience in education and social media roles.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
                        >
                            <InteractiveHoverButton
                                text="Experience"
                                onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-40 border-white/30 text-white text-sm backdrop-blur-sm"
                            />
                            <InteractiveHoverButton
                                text="Contact Me"
                                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-40 border-white/15 text-white/70 text-sm backdrop-blur-sm"
                            />
                        </motion.div>
                    </div>

                    {/* Right: Display Cards */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="hidden lg:flex justify-center items-center"
                    >
                        <DisplayCards cards={heroCards} />
                    </motion.div>
                </div>
            </div>


        </section>
    );
}
