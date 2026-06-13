import type { Metadata } from "next";
import AboutContent from "../components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the journey, mission, and leadership of Garnet BigData.",
};

export default function AboutPage() {
  return <AboutContent />;
}
