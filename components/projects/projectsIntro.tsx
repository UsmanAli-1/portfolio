import React from "react";
import Animate from "@/components/Animate";

export default function ProjectsIntro() {
  return (
    <section className="w-full max-w-3xl mx-auto text-center py-5 lg:py-16 md:py-16 px-4">
      <Animate type="pop" delay={0.2}>
        <h2 className="scroll-m-20 text-4xl  md:text-3xl font-bold tracking-tight lg:text-5xl text-[#9093FF] ">
          My Projects
        </h2>
      </Animate>

      <Animate type="fade-up">
        <p className="mt-0 md:mt-5 text-lg leading-relaxed text-white/70">
          Explore a collection of my recent work, showcasing my expertise in web
          development, mobile applications, and innovative solutions.
        </p>
      </Animate>
    </section>
  );
}
