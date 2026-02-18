"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { openSourceAssets } from "@/app/data/open-source-assets";

export function ParallaxBackdrop() {
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();

  const shiftA = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -240]);
  const shiftB = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 180]);
  const shiftC = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -140]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: shiftA }}
        className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <motion.div
        style={{ y: shiftB }}
        className="absolute right-[-90px] top-24 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl"
      />
      <motion.div
        style={{ y: shiftC }}
        className="absolute left-1/3 top-[55%] h-72 w-72 rounded-full bg-blue-500/15 blur-3xl"
      />

      <motion.div
        style={{ y: shiftB }}
        className="absolute -left-16 top-[28%] hidden h-56 w-80 overflow-hidden rounded-3xl border border-white/20 opacity-35 shadow-2xl lg:block"
      >
        <Image
          src={openSourceAssets.heroPanels[0].src}
          alt={openSourceAssets.heroPanels[0].alt}
          width={1200}
          height={800}
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        style={{ y: shiftA }}
        className="absolute right-[-70px] top-[62%] hidden h-52 w-72 overflow-hidden rounded-3xl border border-white/20 opacity-35 shadow-2xl lg:block"
      >
        <Image
          src={openSourceAssets.heroPanels[2].src}
          alt={openSourceAssets.heroPanels[2].alt}
          width={1200}
          height={800}
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
}
