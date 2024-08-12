import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Large_exp from "@/components/large_exp";
import { MeteorsDemo } from "@/components/meteo";
import { ExpandableCardDemo } from "@/components/card";
import { Activities } from "@/components/activity";
import Activ from "@/components/Achead";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      
      {/* <Large_exp/> */}
      <Skills />
      <Projects /> 
      <ExpandableCardDemo/>
      <MeteorsDemo/>
      <Activ/>
      <Activities/>
    </main>
  );
}
