import { motion } from 'framer-motion';
import { FeatureCarousel } from './ui/animated-feature-carousel';

export default function Experience() {
    const steps = [
        {
            id: "1",
            name: "Dec 2025 – Mar 2026",
            title: "Social Media & Content Executive",
            description: "At DhanBhumi. Authored real estate blogs, created engaging Instagram reels, designed social media graphics, and managed both LinkedIn and Reddit community presence.",
        },
        {
            id: "2",
            name: "Jul 2025 – Dec 2025",
            title: "Business Development Executive",
            description: "At Training YA Institute. Managed social media pages and content calendars, optimized YouTube SEO for better discoverability, and assisted with video production and camera work.",
        },
        {
            id: "3",
            name: "Aug 2023 – Jul 2025",
            title: "English Trainer & Teacher",
            description: "At Training YA Institute & Lal Bahadur Shastri Training Institute. Taught Spoken and Comparative English to 150+ students through online and offline classes, and provided interview coaching.",
        },
        {
            id: "4",
            name: "Nov 2022 – May 2023",
            title: "School Teacher",
            description: "At Maya Goel Vidya Niketan. Served as a Nursery Teacher handling foundational education and also served as a Proxy Science Teacher.",
        },
    ];

    const images = {
        alt: "Experience highlight",
        step1: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
        step2: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1661&auto=format&fit=crop",
        step3: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop",
        step4: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
    };

    return (
        <section id="experience" className="py-24 md:py-32">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Experience</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                        Work experience
                    </h2>
                </motion.div>

                <FeatureCarousel steps={steps} image={images} />
            </div>
        </section>
    );
}
