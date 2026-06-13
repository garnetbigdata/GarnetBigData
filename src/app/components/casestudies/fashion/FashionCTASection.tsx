"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./animationVariants";

const FashionCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center"
          variants={itemVariants}
        >
          Ready to Stop and
          <br />
          <motion.span
            className="text-red-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Start Knowing
          </motion.span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-5 max-w-xl text-sm font-semibold leading-6 text-gray-600 sm:text-base"
        >
          Most fashion brands run on intuition until it's too late. The ones
          that scale run on data. Let's build your dashboards.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-red-800 text-white px-4 lg:px-5 py-2 rounded-lg hover:bg-red-600 transition whitespace-nowrap text-sm lg:text-base"
          >
            Get Started - Book A Call
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mx-auto mt-10 max-w-sm">
          <svg className="h-28 w-full" viewBox="0 0 360 120" aria-hidden="true">
            <path
              d="M24 92 L78 70 L126 82 L170 38 L224 66 L284 30 L336 48"
              fill="none"
              stroke="#e5c1bc"
              strokeWidth="4"
            />
            {[24, 78, 126, 170, 224, 284, 336].map((x, index) => {
              const y = [92, 70, 82, 38, 66, 30, 48][index];
              return (
                <g key={x}>
                  <circle
                    cx={x}
                    cy={y}
                    r={index === 5 ? 10 : 5}
                    fill={index === 5 ? "#d9a39c" : "#fff"}
                    stroke="#991b1b"
                    strokeOpacity="0.45"
                    strokeWidth="3"
                  />
                  <circle cx={x} cy={y} r="2" fill="#991b1b" />
                </g>
              );
            })}
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FashionCTASection;
