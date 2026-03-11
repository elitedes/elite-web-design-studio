import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
    const { t, lang, dir } = useLanguage();

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                delay: 0.3 + i * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <section className="relative min-h-[100vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden" dir={dir}>
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/hero-bg.png" 
                    alt="Hero Background" 
                    className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
                    style={{ transformOrigin: "center center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/60 via-[#030303]/40 to-[#030303]/90 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] opacity-80" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center text-center">
                
                {/* Badge */}
                <motion.div
                    custom={0}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 sm:mb-12 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                >
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium tracking-widest uppercase text-white/80">
                        {t.hero.badge}
                    </span>
                </motion.div>

                {/* Main Titles */}
                <motion.div
                    custom={1}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold leading-[1.1] tracking-tight mb-8">
                        <span className="block text-white filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            {t.hero.title1}
                        </span>
                        <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 filter drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                            {t.hero.title2}
                        </span>
                    </h1>
                </motion.div>

                {/* Description */}
                <motion.div
                    custom={2}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <p className="max-w-2xl mx-auto text-lg sm:text-2xl text-white/60 font-light leading-relaxed tracking-wide mb-12">
                        {t.hero.description}
                    </p>
                </motion.div>

                {/* Call to Actions */}
                <motion.div
                    custom={3}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a 
                        href="#contact" 
                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-lg font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                    >
                        <span className="relative z-10">{t.hero.ctaPrimary}</span>
                        <ArrowRight className={`w-5 h-5 relative z-10 transition-transform ${lang === 'he' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    
                    <a 
                        href="#portfolio" 
                        className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/20 text-white text-lg font-medium rounded-full backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30 hover:scale-105"
                    >
                        {t.hero.ctaSecondary}
                    </a>
                </motion.div>
            </div>
            
            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        </section>
    );
};

export default Hero;
