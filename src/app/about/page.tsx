import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the journey, mission, and leadership of Garnet BigData.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl tracking-tight mb-4">
            About Garnet BigData
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Building tomorrow's Data-Driven organization today.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 bg-slate-50 p-8 rounded-2xl">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To empower organizations across Nigeria and Africa by transforming complex data landscapes into clear, actionable, and competitive business advantages.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be the be the premier architecture and data consulting ally, recognized for pioneering pathways that seamlessly link raw technical data assets with high-level corporate strategy.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="border-t border-slate-100 pt-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Meet the Founders</h2>
          
          <div className="space-y-20">

            {/* Founder 1: Oluwatoyin Oyedele */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-t border-slate-100 pt-12">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-56 h-56 rounded-2xl overflow-hidden bg-slate-100 shadow-md border border-slate-200">
                  <img src="/toyin_about_page.jfif" alt="Oluwatoyin Oyedele" className="w-full h-full object-cover" />
                </div>   
                <h3 className="mt-4 text-xl font-bold text-slate-900">Oluwatoyin Oyedele</h3>
                <p className="text-blue-600 font-medium text-sm">Co-Founder & Lead Data Strategist</p>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Toyin leads data strategy at Garnet Big Data, where she specializes in translating complex business problems into dashboards that executives actually use. Her superpower lies in making highly technical work entirely understandable to non-technical audiences, allowing business leaders to move quickly and act decisively on data.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Before founding Garnet, Toyin worked across various multinational operations, including Leadway—one of Nigeria's largest insurance groups—where she oversaw data strategy, team performance, and critical executive analytical systems. Notably, she architected the company's shift to a cloud-based ELT reporting stack on Microsoft Fabric and Azure Databricks, granting leadership immediate access to business-critical insights. 
                </p>
                <p className="text-slate-600 leading-relaxed">
                  With a technical footprint spanning insurance, fintech, and education, she has successfully trained over 100+ developers in Python and analytics systems. She thrives in fast-paced, high-impact remote environments where business intelligence drives core strategic decisions.
                </p>
              </div>
            </div>

            {/* Founder 2: Ruby Abuye-Samuel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-t border-slate-100 pt-12">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-56 h-56 rounded-2xl overflow-hidden bg-slate-100 shadow-md border border-slate-200">
                  <img src="/ruby_about_page.png" alt="Ruby Abuye" className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Ruby Abuye-Samuel</h3>
                <p className="text-blue-600 font-medium text-sm">Co-Founder & Chief Technology Officer</p>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Ruby brings deep expertise in machine learning, cloud architecture, and building production-grade data engineering infrastructures. Holding an academic background in Medicine and Biochemistry, she firmly believes in empowering clients with sustainable data infrastructure they can completely own outright rather than creating restrictive vendor-lock dependencies.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Before co-founding Garnet, Ruby spent over 6 years as an AI Engineer and Data Scientist, constructing advanced statistical frameworks and predictive platforms for healthcare, biomedical research, and demanding industrial applications. Her technical execution covers cloud-native ecosystems on AWS, GCP, and Azure capable of scaling to process millions of complex records.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  She has successfully integrated advanced AI functionalities directly into traditional architectures for notable international entities like the UN, WHO, and IBM across telecom, e-commerce, and IoT sectors, consistently managing cross-functional technical teams under demanding production timelines.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Cleaned Testimonials Placeholder Section */}
        <div className="border-t border-slate-100 mt-20 pt-16 text-center">
          <h2 className="text-2xl font-bold text-slate-400 mb-4">
            Client Testimonials
          </h2>
          <p className="text-slate-400 italic max-w-md mx-auto text-sm">
            What our strategic partners say. Success metrics and case endorsements launching soon.
          </p>
        </div>

      </div>
    </div>
  );
}
