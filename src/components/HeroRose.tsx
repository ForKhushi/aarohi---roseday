import { motion } from "framer-motion";

interface HeroRoseProps {
  onBloom: () => void;
}

const HeroRose = ({ onBloom }: HeroRoseProps) => {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Flipbook container */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Soft glow behind flipbook */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background:
              "radial-gradient(circle, hsl(340 80% 70% / 0.35), transparent 70%)",
            filter: "blur(35px)",
          }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.2 }}
        />

        {/* Flipbook iframe */}
        <iframe
          src="/book-flip/index.html"
          width="340"
          height="460"
          style={{
            border: "none",
            background: "transparent",
            borderRadius: "12px",
            position: "relative",
            zIndex: 10,
          }}
        />
      </motion.div>

      {/* Continue button */}
      <motion.button
        className="mt-4 font-serif text-sm italic text-muted-foreground hover:text-foreground transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={onBloom}
      >
        Continue ✨
      </motion.button>
    </div>
  );
};

export default HeroRose;
