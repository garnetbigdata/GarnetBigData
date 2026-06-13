"use client";

import Image from "next/image";
import { BarChart3, CalendarDays, PackageSearch, Users } from "lucide-react";

export const painPoints = [
  {
    icon: ({ className }: { className?: string }) => (
      <Image
        src="/coins.png"
        alt=""
        className={className}
        width={100}
        height={100}
      />
    ),
    title: "Revenue chaos",
    description:
      "You're tracking revenue across scattered spreadsheets and delayed reports.",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <Image
        src="/tissue.png"
        alt=""
        className={className}
        width={100}
        height={100}
      />
    ),
    title: "Inventory nightmares",
    description:
      "Precious fabric rolls, finished pieces, and stock counts disappear into guesswork.",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <Image
        src="/blindspot.png"
        alt=""
        className={className}
        width={66}
        height={66}
      />
    ),
    title: "Customer blind spots",
    description:
      "Best sellers, slow movers, and customer preferences are hard to see clearly.",
  },
];

export const dashboardCards = [
  {
    name: "SalesLens",
    label: "Sales & Revenue Intelligence",
    icon: BarChart3,
    theme: "from-red-800 to-red-700",
    bullets: [
      "Which channel is actually driving revenue?",
      "Which product mix performs best?",
      "Which styles are trial items?",
    ],
    metrics: [
      "Revenue by channel",
      "Revenue $1.29M",
      "Top products $1.26M",
      "AOV $17.6K",
      "AOV $12.99",
    ],
    metricsTheme: 'bg-red-800/5'
  },
  {
    name: "StockPulse",
    label: "Inventory & Operations",
    icon: PackageSearch,
    theme: "from-teal-800 to-teal-700",
    bullets: [
      "Dead stock aging report?",
      "Which sizes need restocking?",
      "What is trade margin?",
    ],
    metrics: [
      "Dead stock aging report",
      "Tries",
      "True margin",
      "Stock progress margin",
    ],
    metricsTheme: 'bg-teal-800/5'
  },
  {
    name: "ClientIQ",
    label: "Customer & Wholesale Intelligence",
    icon: Users,
    theme: "from-pink-800 to-rose-700",
    bullets: [
      "Which channel owns the customer?",
      "Wholesale accounts?",
      "Which customer movement?",
      "Which are risk flags?",
    ],
    metrics: ["CLV", "Repeat customer ratio", "Churn risk flags"],
    metricsTheme: 'bg-pink-800/5'
  },
  {
    name: "SeasonCast",
    label: "Demand Forecasting & Planning",
    icon: CalendarDays,
    theme: "from-orange-800 to-orange-700",
    bullets: [
      "Eid production quantity?",
      "Raw yards for forecasting planning?",
      "What Christmas trend?",
    ],
    metrics: [
      "Eid production quantity 10",
      "Christmas trend forecasting",
      "Christmas trend 26",
    ],
    metricsTheme: 'bg-orange-800/5'
  },
];

export const automationBenefits = [
  "Pulls sales data into one dashboard.",
  "Sends reorder alerts from live stock data.",
  "Auto-updates inventory to reduce manual admin.",
];
