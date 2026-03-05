import { motion, AnimatePresence } from "framer-motion";
import TetrisLoading from "./ui/tetris-loader";
import { AuroraBackground } from "./ui/aurora-background";

export default function LoadingScreen() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-background"
            >
                <AuroraBackground className="h-screen w-screen absolute inset-0 z-0 opacity-50" showRadialGradient={false}>
                    <div />
                </AuroraBackground>

                <div className="relative z-10 flex flex-col items-center justify-center">
                    <TetrisLoading size="md" speed="fast" />
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
