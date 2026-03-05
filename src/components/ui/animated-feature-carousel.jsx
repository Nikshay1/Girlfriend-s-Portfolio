"use client"

import {
    forwardRef,
    useCallback,
    useEffect,
    useState,
} from "react"
import {
    AnimatePresence,
    motion,
    useMotionTemplate,
    useMotionValue,
} from "framer-motion"
import { cn } from "../../lib/utils"

// Placeholder for image assets if they are not found.
const placeholderImage = (text = "Image") =>
    `https://placehold.co/600x400/1a1a1a/ffffff?text=${text}`

const ANIMATION_PRESETS = {
    fadeInScale: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
    },
    slideInRight: {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
    },
    slideInLeft: {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 },
        transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
    },
}

// --- Hooks ---
function useNumberCycler(totalSteps, interval = 5000) {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setCurrentNumber((prev) => (prev + 1) % totalSteps);
        }, interval);

        return () => clearTimeout(timerId);
    }, [currentNumber, totalSteps, interval]);

    const setStep = useCallback((stepIndex) => {
        setCurrentNumber(stepIndex % totalSteps);
    }, [totalSteps]);

    return { currentNumber, setStep };
}

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches)
        }
        checkDevice()
        window.addEventListener("resize", checkDevice)
        return () => window.removeEventListener("resize", checkDevice)
    }, [])
    return isMobile
}

// --- Components ---
function IconCheck({ className, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className={cn("h-4 w-4", className)} {...props} >
            <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
        </svg>
    )
}

const stepVariants = {
    inactive: { scale: 0.9, opacity: 0.7 },
    active: { scale: 1, opacity: 1 },
}

const StepImage = forwardRef(
    ({ src, alt, className, style, ...props }, ref) => {
        return (
            <img
                ref={ref}
                alt={alt}
                className={className}
                src={src}
                style={{ position: "absolute", userSelect: "none", maxWidth: "unset", ...style }}
                onError={(e) => (e.currentTarget.src = placeholderImage(alt))}
                {...props}
            />
        )
    }
)
StepImage.displayName = "StepImage"

const MotionStepImage = motion.create(StepImage)

const AnimatedStepImage = ({ preset = "fadeInScale", delay = 0, ...props }) => {
    const presetConfig = ANIMATION_PRESETS[preset]
    return <MotionStepImage {...props} {...presetConfig} transition={{ ...presetConfig.transition, delay }} />
}

function FeatureCard({ children, step, steps }) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const isMobile = useIsMobile()

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        if (isMobile) return
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <motion.div
            className="animated-cards group relative w-full rounded-2xl"
            onMouseMove={handleMouseMove}
            style={{ "--x": useMotionTemplate`${mouseX}px`, "--y": useMotionTemplate`${mouseY}px` }}
        >
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md transition-colors duration-300 shadow-2xl">
                <div className="m-6 md:m-8 min-h-[420px] md:min-h-[400px] w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            className="flex w-full flex-col gap-4 md:w-1/2 relative z-10 p-4 md:p-2 bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <motion.div
                                className="text-sm font-semibold uppercase tracking-wider text-primary"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {steps[step].name}
                            </motion.div>
                            <motion.h2
                                className="text-2xl font-bold tracking-tight text-white md:text-3xl"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {steps[step].title}
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.15, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="text-sm md:text-base leading-relaxed text-text-secondary drop-shadow-md">
                                    {steps[step].description}
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                    {children}
                </div>
            </div>
        </motion.div>
    )
}

function StepsNav({ steps, current, onChange }) {
    return (
        <nav aria-label="Progress" className="flex justify-center px-4">
            <ol className="flex w-full flex-wrap items-center justify-center gap-2" role="list">
                {steps.map((step, stepIdx) => {
                    const isCompleted = current > stepIdx;
                    const isCurrent = current === stepIdx;
                    return (
                        <motion.li key={step.name} initial="inactive" animate={isCurrent ? "active" : "inactive"} variants={stepVariants} transition={{ duration: 0.3 }} className="relative" >
                            <button
                                type="button"
                                className={cn(
                                    "group flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 focus:outline-none",
                                    isCurrent
                                        ? "bg-primary text-white"
                                        : "bg-surface-card text-text-secondary hover:bg-surface-hover hover:text-white border border-white/5"
                                )}
                                onClick={() => onChange(stepIdx)}
                            >
                                <span className={cn(
                                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                                    isCompleted
                                        ? "bg-primary text-white"
                                        : isCurrent
                                            ? "bg-white text-primary"
                                            : "bg-white/10 text-text-tertiary group-hover:bg-white/20 group-hover:text-white"
                                )}>
                                    {isCompleted ? (
                                        <IconCheck className="h-3.5 w-3.5" />
                                    ) : (
                                        <span>{stepIdx + 1}</span>
                                    )}
                                </span>
                                <span className="hidden sm:inline-block">{step.name}</span>
                            </button>
                        </motion.li>
                    );
                })}
            </ol>
        </nav>
    );
}

const defaultClasses = {
    img: "rounded-xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden object-cover",
    step1: "w-[80%] md:w-[45%] h-[50%] md:h-[70%] left-[10%] md:left-[50%] top-[45%] md:top-[15%] object-cover",
    step2: "w-[80%] md:w-[45%] h-[50%] md:h-[70%] left-[10%] md:left-[50%] top-[45%] md:top-[15%] object-cover",
    step3: "w-[80%] md:w-[45%] h-[50%] md:h-[70%] left-[10%] md:left-[50%] top-[45%] md:top-[15%] object-cover",
    step4: "w-[80%] md:w-[45%] h-[50%] md:h-[70%] left-[10%] md:left-[50%] top-[45%] md:top-[15%] object-cover",
}

export function FeatureCarousel({
    image,
    steps,
    step1Class = defaultClasses.step1,
    step2Class = defaultClasses.step2,
    step3Class = defaultClasses.step3,
    step4Class = defaultClasses.step4,
    ...props
}) {
    const totalSteps = steps.length;
    const { currentNumber: step, setStep } = useNumberCycler(totalSteps, 6000)

    const renderStepContent = () => {
        switch (step) {
            case 0:
                return <AnimatedStepImage alt={image.alt} className={cn(defaultClasses.img, step1Class)} src={image.step1} preset="fadeInScale" />
            case 1:
                return <AnimatedStepImage alt={image.alt} className={cn(defaultClasses.img, step2Class)} src={image.step2} preset="fadeInScale" />
            case 2:
                return <AnimatedStepImage alt={image.alt} className={cn(defaultClasses.img, step3Class)} src={image.step3} preset="fadeInScale" />
            case 3:
                return <AnimatedStepImage alt={image.alt} className={cn(defaultClasses.img, step4Class)} src={image.step4} preset="fadeInScale" />
            default: return null
        }
    }

    return (
        <div className="flex flex-col gap-6 md:gap-8 w-full max-w-5xl mx-auto border-transparent">
            <FeatureCard {...props} step={step} steps={steps}>
                <AnimatePresence mode="wait">
                    <motion.div key={step} {...ANIMATION_PRESETS.fadeInScale} className="w-full h-full absolute inset-0 pointer-events-none">
                        {renderStepContent()}
                    </motion.div>
                </AnimatePresence>
            </FeatureCard>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="z-10 relative mt-2 md:mt-0">
                <StepsNav current={step} onChange={setStep} steps={steps} />
            </motion.div>
        </div>
    )
}
