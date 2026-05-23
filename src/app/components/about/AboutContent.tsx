"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const founders = [
  {
    name: "Oluwatoyin Oyedele",
    role: "Co-Founder & Lead Data Strategist",
    image: "/toyin_about_pagee.png",
    alt: "Oluwatoyin Oyedele",
    highlights: ["Executive analytics", "Microsoft Fabric", "Data strategy"],
    bio: [
      "Toyin leads data strategy at Garnet Big Data, where she specializes in translating complex business problems into dashboards that executives actually use. Her superpower lies in making highly technical work entirely understandable to non-technical audiences, allowing business leaders to move quickly and act decisively on data.",
      "Before founding Garnet, Toyin worked across various multinational operations, including Leadway, one of Nigeria's largest insurance groups, where she oversaw data strategy, team performance, and critical executive analytical systems. Notably, she architected the company's shift to a cloud-based ELT reporting stack on Microsoft Fabric and Azure Databricks, granting leadership immediate access to business-critical insights.",
      "With a technical footprint spanning insurance, fintech, and education, she has successfully trained over 100+ developers in Python and analytics systems. She thrives in fast-paced, high-impact remote environments where business intelligence drives core strategic decisions.",
    ],
  },
  {
    name: "Ruby Abuye-Samuel",
    role: "Co-Founder & Chief Technology Officer",
    image: "/ruby_about_page.png",
    alt: "Ruby Abuye-Samuel",
    highlights: ["Machine learning", "Cloud architecture", "Production data systems"],
    bio: [
      "Ruby brings deep expertise in machine learning, cloud architecture, and building production-grade data engineering infrastructures. Holding an academic background in Medicine and Biochemistry, she firmly believes in empowering clients with sustainable data infrastructure they can completely own outright rather than creating restrictive vendor-lock dependencies.",
      "Before co-founding Garnet, Ruby spent over 6 years as an AI Engineer and Data Scientist, constructing advanced statistical frameworks and predictive platforms for healthcare, biomedical research, and demanding industrial applications. Her technical execution covers cloud-native ecosystems on AWS, GCP, and Azure capable of scaling to process millions of complex records.",
      "She has successfully integrated advanced AI functionalities directly into traditional architectures for notable international entities like the UN, WHO, and IBM across telecom, e-commerce, and IoT sectors, consistently managing cross-functional technical teams under demanding production timelines.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutContent() {
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <motion.div
      className="relative isolate min-h-screen overflow-hidden bg-white font-sans text-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_34%,transparent_88%)]"
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#FFF1EE] px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <div className="invisible absolute left-[-3%] top-28 grid h-16 w-16 grid-cols-11 gap-3.5 opacity-30 sm:visible">
          {[...Array(66)].map((_, i) => (
            <motion.div
              key={i}
              className="h-1 w-1 rounded-full bg-red-900"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.35 + i * 0.01,
                type: "spring",
                stiffness: 200,
              }}
            />
          ))}
        </div>

        <div className="invisible absolute right-10 top-28 grid h-16 w-16 grid-cols-11 gap-3.5 opacity-30 sm:visible">
          {[...Array(66)].map((_, i) => (
            <motion.div
              key={i}
              className="h-1 w-1 rounded-full bg-red-900"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.35 + i * 0.01,
                type: "spring",
                stiffness: 200,
              }}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute h-52 w-[26rem] rounded-full bg-gradient-to-r from-red-300/30 to-orange-200/30 blur-2xl"
            style={{ bottom: "16%", left: "-10%" }}
            animate={{ y: [0, -20, 0], rotate: [0, 1, -1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-52 w-[26rem] rounded-full bg-gradient-to-r from-blue-300/25 to-blue-200/25 blur-3xl"
            style={{ top: "30%", right: "-5%" }}
            animate={{ y: [0, -20, 0], rotate: [0, -1, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-52 w-52 rounded-full bg-gradient-to-r from-purple-300/20 to-orange-200/20 blur-2xl"
            style={{ bottom: "20%", left: "50%", x: "-50%" }}
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          className="relative z-10 mx-auto max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.h1 variants={fadeUp} className="text-4xl font-bold leading-tight text-gray-800 sm:text-5xl lg:text-6xl">
            Our{" "}
            <motion.span
              className="inline text-red-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              mission
            </motion.span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-3xl text-sm font-medium leading-7 text-gray-400 md:text-base">
            To empower organizations across Nigeria and Africa by transforming complex data landscapes into clear, actionable, and competitive business advantages.
          </motion.p>
        </motion.div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.div variants={fadeUp}>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-800">Meet the founders</p>
              <h2 className="mt-4 text-3xl font-black tracking-normal text-slate-950 sm:text-5xl">Strategy and engineering, under one roof.</h2>
            </motion.div>
            <motion.p variants={fadeUp} className="max-w-xl text-base leading-7 text-slate-600">
              Garnet is led by operators who have built executive dashboards, cloud data systems, and AI products across regulated and high-growth environments.
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {founders.map((founder, index) => (
              <motion.article
                key={founder.name}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="grid gap-8 border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50 sm:p-7 lg:grid-cols-[340px_1fr]"
              >
                <div>
                  <motion.div
                    className="aspect-[4/5] overflow-hidden bg-slate-100"
                    whileHover={{ scale: 0.985 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={founder.image}
                      alt={founder.alt}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    />
                  </motion.div>
                  <div className="mt-5">
                    <h3 className="text-2xl font-black text-slate-950">{founder.name}</h3>
                    <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-red-800">{founder.role}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {founder.highlights.map((highlight) => (
                      <span key={highlight} className="border border-red-100 bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-red-900">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="space-y-5 text-base leading-8 text-slate-600">
                    {founder.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
