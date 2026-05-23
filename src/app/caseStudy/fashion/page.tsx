"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  BarChart3,
  Bell,
  Bot,
  CalendarDays,
  Check,
  Coins,
  Frown,
  Gauge,
  LineChart,
  PackageSearch,
  RefreshCw,
  Scissors,
  Shirt,
  UploadCloud,
  Users,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 22, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const painPoints = [
  {
    icon: Coins,
    title: "Revenue chaos",
    description: "You're tracking revenue across scattered spreadsheets and delayed reports.",
  },
  {
    icon: Scissors,
    title: "Inventory nightmares",
    description: "Precious fabric rolls, finished pieces, and stock counts disappear into guesswork.",
  },
  {
    icon: Shirt,
    title: "Customer blind spots",
    description: "Best sellers, slow movers, and customer preferences are hard to see clearly.",
  },
];

const dashboardCards = [
  {
    name: "SalesLens",
    label: "Sales & Revenue Intelligence",
    icon: BarChart3,
    theme: "from-red-800 to-red-700",
    bullets: ["Which channel is actually driving revenue?", "Which product mix performs best?", "Which styles are trial items?"],
    metrics: ["Revenue by channel", "Revenue $1.29M", "Top products $1.26M", "AOV $17.6K", "AOV $12.99"],
  },
  {
    name: "StockPulse",
    label: "Inventory & Operations",
    icon: PackageSearch,
    theme: "from-teal-700 to-teal-500",
    bullets: ["Dead stock aging report?", "Which sizes need restocking?", "What is trade margin?"],
    metrics: ["Dead stock aging report", "Tries", "True margin", "Stock progress margin"],
  },
  {
    name: "ClientIQ",
    label: "Customer & Wholesale Intelligence",
    icon: Users,
    theme: "from-pink-600 to-rose-400",
    bullets: ["Which channel owns the customer?", "Wholesale accounts?", "Which customer movement?", "Which are risk flags?"],
    metrics: ["CLV", "Repeat customer ratio", "Churn risk flags"],
  },
  {
    name: "SeasonCast",
    label: "Demand Forecasting & Planning",
    icon: CalendarDays,
    theme: "from-orange-300 to-orange-200",
    bullets: ["Eid production quantity?", "Raw yards for forecasting planning?", "What Christmas trend?"],
    metrics: ["Eid production quantity 10", "Christmas trend forecasting", "Christmas trend 26"],
  },
];

const FashionPage = () => {
  return (
    <main className="relative overflow-x-hidden bg-white font-sans text-gray-800">
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#FFF1EE] px-4 py-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -left-24 bottom-16 h-64 w-64 rounded-full bg-gradient-to-r from-red-300/30 to-orange-200/30 blur-3xl"
            animate={{ y: [0, -18, 0], rotate: [0, 1, -1, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-20 top-28 h-72 w-72 rounded-full bg-gradient-to-r from-blue-300/25 to-blue-200/25 blur-3xl"
            animate={{ y: [0, -20, 0], rotate: [0, -1, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </div>

        <div className="invisible absolute left-[-3%] top-32 grid h-16 w-16 grid-cols-11 gap-3.5 opacity-30 sm:visible">
          {[...Array(66)].map((_, i) => (
            <motion.div
              key={i}
              className="h-1 w-1 rounded-full bg-red-900"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.5 + i * 0.01,
                type: "spring",
                stiffness: 200,
              }}
            />
          ))}
        </div>

        <div className="invisible absolute right-10 top-32 grid h-16 w-16 grid-cols-11 gap-3.5 opacity-30 sm:visible">
          {[...Array(66)].map((_, i) => (
            <motion.div
              key={i}
              className="h-1 w-1 rounded-full bg-red-900"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.5 + i * 0.01,
                type: "spring",
                stiffness: 200,
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 mx-auto max-w-5xl text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >

          <motion.h1
            variants={itemVariants}
            className="mx-auto max-w-3xl text-3xl font-black uppercase leading-tight tracking-normal text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Stop running your
            <br />
            <span className="text-red-800">fashion brand on gut</span>
            <br />
            feel and guesswork
          </motion.h1>

          <motion.p variants={itemVariants} className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-6 text-gray-500 sm:text-base">
            You're tracking sales in spreadsheets. Inventory decisions keep you up at night. You do not know which products are actually profitable...
          </motion.p>

          <motion.div variants={itemVariants} className="mx-auto mt-8 max-w-sm">
            <div className="relative mx-auto h-44 w-72 rounded-md border border-gray-200 bg-white shadow-xl shadow-red-900/10">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 256 160" role="img" aria-label="Unclear fashion sales chart">
                <path d="M22 126 L58 88 L91 104 L126 54 L164 83 L201 39 L235 71" fill="none" stroke="#991b1b" strokeWidth="3" />
                <path d="M18 96 L51 110 L83 72 L118 88 L150 42 L193 95 L231 51" fill="none" stroke="#94a3b8" strokeWidth="3" />
                <path d="M24 48 L62 68 L98 36 L138 72 L178 48 L224 58" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <path d="M22 132 H238" stroke="#d1d5db" strokeWidth="2" />
                <path d="M22 18 V132" stroke="#d1d5db" strokeWidth="2" />
              </svg>
              <motion.div
                className="absolute left-1/2 top-12 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-[#f8d7c9]"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative h-14 w-14 rounded-full bg-[#8b4a33]">
                  <div className="absolute left-2 top-3 h-8 w-10 rounded-full bg-[#f3b89f]" />
                  <Frown className="absolute left-4 top-4 h-6 w-6 text-red-900" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8">
            <Link
              href="#fashion-track"
              className="inline-flex items-center gap-2 rounded-md bg-red-800 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-red-900/20 transition hover:bg-red-700"
            >
              <LineChart className="h-4 w-4" />
              See what we track
            </Link>
          </motion.div>
        </motion.div>
      </section>

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
              <motion.h2 variants={itemVariants} className="mx-auto max-w-3xl text-center text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
                You're Not Alone - Every Fashion Brand Faces This
              </motion.h2>
              <motion.div variants={containerVariants} className="mt-8 grid gap-5 md:grid-cols-3">
                {painPoints.map(({ icon: Icon, title, description }) => (
                  <motion.article
                    key={title}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    className="rounded-lg border border-gray-100 bg-white p-6 text-center shadow-xl shadow-slate-200/70"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-red-50 text-red-800">
                      <Icon className="h-9 w-9" />
                    </div>
                    <h3 className="mt-4 text-sm font-black uppercase leading-tight text-gray-900">{title}</h3>
                    <p className="mt-2 text-xs font-semibold leading-5 text-gray-500">{description}</p>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#FFF1EE] px-4 py-16 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-20 bg-[radial-gradient(circle,#991b1b_1.5px,transparent_1.5px)] bg-[size:18px_18px] opacity-10 lg:block" />
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-black uppercase leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                We build dashboards
                <br />
                that answer your
                <br />
                <span className="text-red-800">real questions</span>
              </h2>
            </motion.div>

            <motion.div variants={containerVariants} className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
              {dashboardCards.map(({ name, label, icon: Icon, theme, bullets, metrics }) => (
                <motion.article
                  key={name}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl shadow-slate-200/70"
                >
                  <div className={`bg-gradient-to-r ${theme} px-6 py-7 text-center text-white`}>
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-black uppercase leading-none">{name}</h3>
                    <p className="mt-2 text-sm font-semibold text-white/85">{label}</p>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-2 text-sm font-semibold leading-5 text-gray-700">
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
                          key={metric}
                          className={`${metrics.length % 2 === 1 && index === metrics.length - 1 ? "col-span-2" : ""} min-h-20 rounded-md bg-gray-50 p-3 text-sm font-bold leading-5 text-gray-700`}
                        >
                          <span>{metric}</span>
                          {index % 2 === 1 ? (
                            <svg className="mt-2 h-9 w-full" viewBox="0 0 100 32" aria-hidden="true">
                              <path d="M4 24 L20 18 L34 22 L50 10 L68 16 L84 8 L96 12" fill="none" stroke="#991b1b" strokeWidth="3" />
                            </svg>
                          ) : null}
                          {name === "StockPulse" && index === 3 ? (
                            <div className="mt-3 h-8 overflow-hidden rounded-t-full border-8 border-teal-200 border-b-0">
                              <div className="h-full w-2/3 bg-teal-600" />
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mx-auto mt-14 max-w-5xl rounded-lg border border-red-100 bg-white p-7 shadow-xl shadow-red-900/5 sm:p-8"
            >
              <div className="grid items-center gap-10 md:grid-cols-[1fr_320px]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-gray-500">Automation add-on</p>
                <h3 className="mt-3 text-3xl font-black uppercase leading-tight text-gray-900 sm:text-4xl">
                  Want it hands-free?
                  <br />
                  <span className="text-red-800">We'll automate it.</span>
                </h3>
                <ul className="mt-6 space-y-3 text-sm font-semibold text-gray-700 sm:text-base">
                  {[
                    "Pulls sales data into one dashboard.",
                    "Sends reorder alerts from live stock data.",
                    "Auto-updates inventory to reduce manual admin.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-none text-red-800" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-emerald-400/15 text-red-800">
                  <motion.div
                    className="absolute h-36 w-36 rounded-full border-[20px] border-emerald-400 border-l-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="relative z-10 grid grid-cols-2 gap-3">
                    <UploadCloud className="h-9 w-9" />
                    <Bell className="h-9 w-9" />
                    <RefreshCw className="h-9 w-9" />
                    <Gauge className="h-9 w-9" />
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-red-800 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-red-900/20 transition hover:bg-red-700"
                >
                  <Bot className="h-4 w-4" />
                  Ask about automation
                </Link>
              </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FFF1EE] to-transparent" />
        <motion.div
          className="relative z-10 mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-black uppercase leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Ready to stop
            <br />
            <span className="text-red-800">guessing and start</span>
            <br />
            knowing?
          </motion.h2>
          <motion.p variants={itemVariants} className="mx-auto mt-5 max-w-xl text-sm font-semibold leading-6 text-gray-600 sm:text-base">
            Most fashion brands run on intuition until it's too late. The ones that scale run on data. Let's build your dashboards.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-red-800 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-red-900/20 transition hover:bg-red-700"
            >
              Get started - book a call
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto mt-10 max-w-sm">
            <svg className="h-28 w-full" viewBox="0 0 360 120" aria-hidden="true">
              <path d="M24 92 L78 70 L126 82 L170 38 L224 66 L284 30 L336 48" fill="none" stroke="#e5c1bc" strokeWidth="4" />
              {[24, 78, 126, 170, 224, 284, 336].map((x, index) => {
                const y = [92, 70, 82, 38, 66, 30, 48][index];
                return (
                  <g key={x}>
                    <circle cx={x} cy={y} r={index === 5 ? 10 : 5} fill={index === 5 ? "#d9a39c" : "#fff"} stroke="#991b1b" strokeOpacity="0.45" strokeWidth="3" />
                    <circle cx={x} cy={y} r="2" fill="#991b1b" />
                  </g>
                );
              })}
            </svg>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default FashionPage;
