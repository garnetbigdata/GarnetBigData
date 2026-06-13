"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./animationVariants";
import FashionAutomationCard from "./FashionAutomationCard";
import FashionMetricVisual from "./FashionMetricVisual";
import { dashboardCards } from "./fashionData";

const FashionDashboardSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center"
            variants={itemVariants}
          >
            We Build Dashboards That Answer
            <br />
            <motion.span
              className="text-red-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Your Real Question
            </motion.span>
          </motion.h1>

          <motion.div
            variants={containerVariants}
            className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2"
          >
            {dashboardCards.map(
              ({
                name,
                label,
                icon: Icon,
                theme,
                bullets,
                metrics,
                metricsTheme,
                metricColor,
              }) => (
                <motion.article
                  key={name}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl shadow-slate-200/70"
                >
                  <div
                    className={`bg-gradient-to-r ${theme} px-6 py-7 text-center text-white`}
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-black uppercase leading-none">
                      {name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-white/85">
                      {label}
                    </p>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-2 text-gray-600 font-medium">
                      {bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-red-800" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {metrics.map((metric, index) => (
                        <div
                          key={`${metric.label}-${metric.chart}`}
                          className={`${metrics.length % 2 === 1 && index === metrics.length - 1 ? "col-span-2" : ""} min-h-20 rounded-md bg-gray-50 p-3 text-sm font-bold leading-5 text-gray-600 text-center ${metricsTheme}`}
                        >
                          <p>{metric.label}</p>
                          {"value" in metric ? <p>{metric.value}</p> : null}
                          <FashionMetricVisual
                            chart={metric.chart}
                            color={metricColor}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ),
            )}
          </motion.div>

          <FashionAutomationCard />
        </motion.div>
      </div>
    </section>
  );
};

export default FashionDashboardSection;
