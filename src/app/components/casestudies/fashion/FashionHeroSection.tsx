"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LineChart } from "lucide-react";
import AnimatedBlobs from "@/app/components/services/AnimatedBlobs";
import DecorativeDots from "@/app/components/services/DecorativeDots";
import LottieAnimation from "@/app/components/services/LottieAnimation";
import { containerVariants, itemVariants } from "./animationVariants";

const FashionHeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-gradient-to-b from-white to-[#FFF1EE] pb-24">
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

          {/* <motion.div
            variants={itemVariants}
            className="mx-auto mt-8 h-[420px] w-full max-w-4xl"
          >
            <div className="relative mx-auto h-full w-full rounded-md border border-gray-200 bg-white shadow-xl shadow-red-900/10">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 720 320"
                role="img"
                aria-label="Unclear fashion sales chart"
              >
                {[70, 130, 190, 250].map((y) => (
                  <path
                    key={y}
                    d={`M64 ${y} H672`}
                    stroke="#f1f5f9"
                    strokeWidth="2"
                  />
                ))}
                {[160, 280, 400, 520, 640].map((x) => (
                  <path
                    key={x}
                    d={`M${x} 36 V276`}
                    stroke="#f8fafc"
                    strokeWidth="2"
                  />
                ))}
                <path
                  d="M72 252 L148 162 L230 198 L314 88 L410 148 L520 70 L656 126"
                  fill="none"
                  stroke="#991b1b"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                />
                <path
                  d="M68 190 L144 222 L226 128 L312 164 L396 72 L516 202 L650 106"
                  fill="none"
                  stroke="#94a3b8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="7"
                />
                <path
                  d="M76 98 L154 126 L250 72 L360 132 L492 96 L648 112"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="5"
                />
                <path d="M64 276 H672" stroke="#cbd5e1" strokeWidth="4" />
                <path d="M64 36 V276" stroke="#cbd5e1" strokeWidth="4" />
              </svg>
              <motion.div
                className="absolute bottom-0 left-1/2 top-6 flex -translate-x-1/2 items-center justify-center"
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <LottieAnimation
                  src="/animations/office-accountant.json"
                  title="Office accountant animation"
                  className="h-72 w-72 sm:h-124 sm:w-124"
                />
              </motion.div>
            </div>
          </motion.div> */}

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
