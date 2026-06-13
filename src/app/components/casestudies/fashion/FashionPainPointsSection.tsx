"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./animationVariants";
import { painPoints } from "./fashionData";

const FashionPainPointsSection = () => {
  return (
    <section id="fashion-track" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="grid gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div>
            <motion.h2
              variants={itemVariants}
              className="mx-auto max-w-3xl text-center text-3xl md:text-4xl font-bold text-gray-800"
            >
              You're Not Alone - Every Fashion Brand Faces This
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className="mt-8 grid gap-5 md:grid-cols-3"
            >
              {painPoints.map(({ icon: Icon, title, description }) => (
                <motion.article
                  key={title}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="rounded-lg border border-gray-100 bg-white p-6 text-center shadow-xl shadow-slate-200/70 flex flex-col items-center"
                >
                  <Icon />
                  <h3 className="mt-4 text-sm font-black uppercase leading-tight text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm md:text-md text-gray-400">
                    {description}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FashionPainPointsSection;
