"use client";

import Image from "next/image";
import { BarChart3, CalendarDays, PackageSearch, Users } from "lucide-react";
import type { MetricChart } from "./FashionMetricVisual";

interface FashionMetric {
  label: string;
  value?: string;
  chart: MetricChart;
}

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
      { label: "Revenue by channel", chart: "channel-bars" },
      { label: "Revenue", value: "$1.29M", chart: "revenue-stack" },
      { label: "Top products", value: "$1.26M", chart: "product-rank" },
      { label: "AOV", value: "$17.6K", chart: "aov-gauge" },
      // { label: "AOV", value: "$12.99", chart: "aov-tiles" },
    ] satisfies FashionMetric[],
    metricsTheme: "bg-red-800/5",
    metricColor: "#991b1b",
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
      { label: "Dead stock aging report", chart: "aging-bars" },
      { label: "Inventory count", chart: "tries-funnel" },
      { label: "True margin", chart: "margin-donut" },
      { label: "Stock progress margin", chart: "stock-progress" },
    ] satisfies FashionMetric[],
    metricsTheme: "bg-teal-800/5",
    metricColor: "#0f766e",
  },
  {
    name: "ClientIQ",
    label: "Customer & Wholesale Intelligence",
    icon: Users,
    theme: "from-pink-800 to-rose-700",
    bullets: [
      "Which channel owns the customer?",
      "Wholesale accounts",
      "Automated Inactivity Alerts",
    ],
    metrics: [
      { label: "CLV", chart: "clv-pyramid" },
      { label: "Repeat customer ratio", chart: "repeat-cohort" },
      { label: "Churn risk flags", chart: "risk-matrix" },
    ] satisfies FashionMetric[],
    metricsTheme: "bg-pink-800/5",
    metricColor: "#9d174d",
  },
  {
    name: "SeasonCast",
    label: "Demand Forecasting & Planning",
    icon: CalendarDays,
    theme: "from-orange-800 to-orange-700",
    bullets: [
      "Eid production quantity",
      "Demand for forecasting planning",
      "Christmas trend",
    ],
    metrics: [
      { label: "Eid production quantity 10", chart: "eid-capacity" },
      { label: "Christmas trend forecast", chart: "season-heatmap" },
      { label: "Christmas trend 26", chart: "trend-score" },
    ] satisfies FashionMetric[],
    metricsTheme: "bg-orange-800/5",
    metricColor: "#c2410c",
  },
];

export const automationBenefits = [
  "Pulls sales data into one dashboard.",
  "Sends reorder alerts from live stock data.",
  "Auto-updates inventory to reduce manual admin.",
];
