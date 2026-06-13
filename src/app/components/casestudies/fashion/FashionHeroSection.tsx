"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LineChart } from "lucide-react";
import AnimatedBlobs from "@/app/components/services/AnimatedBlobs";
import DecorativeDots from "@/app/components/services/DecorativeDots";
import { containerVariants, itemVariants } from "./animationVariants";

const FashionHeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-gradient-to-b from-white to-[#FFF1EE] pb-10">
        <DecorativeDots />

        <motion.section
          className="relative text-center pt-10 px-4 overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <AnimatedBlobs variant="hero" />

          <motion.div className="relative z-10" variants={containerVariants}>
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
              variants={itemVariants}
            >
              Stop Running Your Fashion Brand on
              <br />
              <motion.span
                className="text-red-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Gut Feel and Guesswork
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-sm md:text-md text-gray-400 mb-8 max-w-xl mx-auto"
              variants={itemVariants}
            >
              You're tracking sales in spreadsheets. Inventory decisions keep
              you up at night. You do not know which products are actually
              profitable...
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto mt-8 h-96 w-120">
            <div className="relative mx-auto h-full w-full rounded-md border border-gray-200 bg-white shadow-xl shadow-red-900/10">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 256 160"
                role="img"
                aria-label="Unclear fashion sales chart"
              >
                <path
                  d="M22 126 L58 88 L91 104 L126 54 L164 83 L201 39 L235 71"
                  fill="none"
                  stroke="#991b1b"
                  strokeWidth="3"
                />
                <path
                  d="M18 96 L51 110 L83 72 L118 88 L150 42 L193 95 L231 51"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="3"
                />
                <path
                  d="M24 48 L62 68 L98 36 L138 72 L178 48 L224 58"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                />
                <path d="M22 132 H238" stroke="#d1d5db" strokeWidth="2" />
                <path d="M22 18 V132" stroke="#d1d5db" strokeWidth="2" />
              </svg>
              <motion.div
                className="absolute left-1/2 top-1/3 flex -translate-x-1/2 items-center justify-center"
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image src="/frustrated.png" alt="" width={200} height={200} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex justify-center">
            <Link
              href="#fashion-track"
              className="inline-flex items-center gap-2 bg-red-800 text-white px-4 lg:px-5 py-2 rounded-lg hover:bg-red-600 transition whitespace-nowrap text-sm lg:text-base"
            >
              <LineChart className="h-4 w-4" />
              See What We Track
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default FashionHeroSection;
