import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE = "https://hercules-cdn.com/file_cwvZ24fOmlfXcENOoms9K0vv";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-screen w-full items-center overflow-hidden bg-black"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-[120%]">
        <img
          src={HERO_IMAGE}
          alt="Giant shipping container bursting through pink smoke"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 pt-24 md:px-12"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mb-6 text-sm font-semibold tracking-[0.3em] text-white/70 uppercase"
        >
          Logistics &amp; Accounting Consulting
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
          className="font-display max-w-5xl text-balance text-7xl leading-[0.92] text-white uppercase md:text-9xl lg:text-[9rem]"
        >
          Chaos
          <br />
          Contained.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.65 }}
          className="mt-8 max-w-xl text-lg text-white/80 md:text-xl"
        >
          We turn supply chain chaos into clean, structured motion — and
          numbers that used to keep you up at night into total clarity.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
          onClick={() =>
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-12 w-fit cursor-pointer rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-widest text-black uppercase transition-transform hover:scale-105"
        >
          Start The Shift
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-white/60"
      >
        <ArrowDown className="animate-bounce" size={28} />
      </motion.div>
    </section>
  );
}
