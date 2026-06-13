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
          className="mx-auto mt-5 max-w-xl text-gray-600"
        >
          Most fashion brands run on intuition until it's too late. The ones
          that scale run on data. Let's build your dashboards.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-red-800 text-white px-4 lg:px-5 py-2 rounded-lg hover:bg-red-600 transition whitespace-nowrap text-sm lg:text-base"
          >
            Book A Call
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FashionCTASection;
