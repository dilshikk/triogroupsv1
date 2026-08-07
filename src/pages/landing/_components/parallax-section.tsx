import { type ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils.ts";

type ParallaxSectionProps = {
  id?: string;
  image: string;
  eyebrow: string;
  headline: string;
  subtext: string;
  align?: "left" | "center" | "right";
  children?: ReactNode;
};

export default function ParallaxSection({
  id,
  image,
  eyebrow,
  headline,
  subtext,
  align = "left",
  children,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.75, 0.55, 0.75],
  );

  return (
    <section
      id={id}
      ref={ref}
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 h-[124%] w-full"
      >
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/85"
      />

      <motion.div
        style={{ y: contentY }}
        className={cn(
          "relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 py-32 md:px-12",
          align === "left" && "items-start text-left",
          align === "center" && "items-center text-center",
          align === "right" && "items-end text-right",
        )}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 text-sm font-semibold tracking-[0.3em] text-white/60 uppercase"
        >
          {eyebrow}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className={cn(
            "font-display max-w-4xl text-balance text-6xl leading-[0.95] text-white uppercase md:text-8xl lg:text-[7.5rem]",
          )}
        >
          {headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          className={cn(
            "mt-8 max-w-xl text-lg text-white/80 md:text-xl",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto",
          )}
        >
          {subtext}
        </motion.p>

        {children}
      </motion.div>
    </section>
  );
}
