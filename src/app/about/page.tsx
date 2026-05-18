import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the journey, mission, and leadership of Garnet BigData.",
};

export default function AboutPage() {
  return (
    <div className="relative isolate bg-gradient-to-br from-red-50/50 via-white to-blue-50/50 min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      
      {/* Brand Background Grid Element */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />

      {/* Brand Background Ambient Radial Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30">
        <div className="w-[800px] h-[800px] bg-radial from-red-200/40 via-transparent to-transparent blur-3xl animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-wider uppercase text-red-800 bg-red-50 px-3 py-1.5 rounded-full border border-red-100 shadow-sm">
            Our Journey
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl tracking-tight mt-4 mb-6 bg-gradient-to-r from-slate-900 via-red-950 to-slate-900 bg-clip-text text-transparent">
            About Garnet BigData
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Building tomorrow's Data-Driven organization today.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="mb-24 max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 group">
            <div className="absolute top-0 left-0 w-2 h-full bg-red-800 transition-all duration-300 group-hover:w-3" />
            <span className="text-xs font-bold uppercase tracking-widest text-red-800 block mb-2">
              The Framework
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              To empower organizations across Nigeria and Africa by transforming complex data landscapes into clear, actionable, and competitive business advantages.
            </p>
          </div>
          <div>
          
        {/* Founder Section */}
        <div className="border-t border-slate-200/60 pt-20">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-red-800 bg-red-50 px-3 py-1.5 rounded-full border border-red-100 shadow-sm">
              Leadership
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3">Meet the Founders</h2>
          </div>
          
          <div className="space-y-16">

            {/* Founder 1: Oluwatoyin Oyedele */}
            <div className="bg-white/70 backdrop-blur-md grid grid-cols-1 md:grid-cols-3 gap-8 items-start p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/40 transition-all duration-300 hover:shadow-xl hover:bg-white">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-48 h-48 rounded-2xl overflow-hidden bg-slate-50 shadow-md border border-slate-100 ring-4 ring-white transition-transform duration-300 hover:scale-[1.02]">
                  <img src="/toyin_about_page.jpeg" alt="Oluwatoyin Oyedele" className="w-full h-full object-cover" />
                </div>   
                <h3 className="mt-5 text-xl font-bold text-slate-900">Oluwatoyin Oyedele</h3>
                <p className="text-red-800 font-semibold text-sm tracking-wide mt-1">Co-Founder & Lead Data Strategist</p>
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
            <div className="bg-white/70 backdrop-blur-md grid grid-cols-1 md:grid-cols-3 gap-8 items-start p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/40 transition-all duration-300 hover:shadow-xl hover:bg-white">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-48 h-48 rounded-2xl overflow-hidden bg-slate-50 shadow-md border border-slate-100 ring-4 ring-white transition-transform duration-300 hover:scale-[1.02]">
                  <img src="/ruby_about_page.png" alt="Ruby Abuye" className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">Ruby Abuye-Samuel</h3>
                <p className="text-red-800 font-semibold text-sm tracking-wide mt-1">Co-Founder & Chief Technology Officer</p>
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

      </div>
    </div>
  );
}
