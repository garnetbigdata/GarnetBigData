"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, Check } from "lucide-react";
import LottieAnimation from "@/app/components/services/LottieAnimation";
import { itemVariants } from "./animationVariants";
import { automationBenefits } from "./fashionData";

const FashionAutomationCard = () => {
  return (
    <motion.div
      variants={itemVariants}
      className="mx-auto mt-14 max-w-5xl rounded-lg border border-red-100 bg-white p-7 shadow-xl shadow-red-900/5 sm:p-8"
    >
      <div className="grid items-center gap-10 md:grid-cols-[1fr_320px]">
        <div>
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Automation Add-on
          </motion.div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            Want it hands-free?
            <br />
            <span className="text-red-800">We'll automate it.</span>
          </h3>
          <ul className="mt-6 space-y-3 text-sm md:text-md text-gray-600">
            {automationBenefits.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-none text-red-800" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-red-800 text-white px-4 lg:px-5 py-2 rounded-lg hover:bg-red-600 transition whitespace-nowrap text-sm lg:text-base"
          >
            <Bot className="h-4 w-4" />
            Ask About Automation
          </Link>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="relative flex size-96 items-center justify-center">
            <LottieAnimation
              src="/animations/chart.json"
              title="Automated chart animation"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FashionAutomationCard;
