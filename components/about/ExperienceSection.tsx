import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Animate from "@/components/Animate";


const experienceData = [
  // {
  //   title: " Full Stack Dev",
  //   company: "TechMorph Innovation",
  //   duration: "2025 - Present",
  // },
  {
    title: "Software Developer",
    company: "Core Digitals ",
    duration: "May 2025 - Nov 2025",
  },
  {
    title: " Frontend Developer",
    company: "CodeAlpha",
    duration: "March 2025 - Apr 2025",
  },
  {
    title: " Web Developer",
    company: "Ayan Tech",
    duration: "Aug 2023 - Jul 2024",
  },
  {
    title: "Intern Web Development",
    company: "University Labs",
    duration: "2022 - 2025",
  },
];

export default function ExperienceSection() {
  return (
    <div className="px-8 hover:scale-105 duration-300 transition">

      <Card className="w-full max-w-4xl mx-auto mt-12  
    shadow-xl bg-gray-100/5 backdrop-blur-md border border-gray-700
    mb-10
    ">

        <Animate type="fade-up">
          <CardHeader>
            <CardTitle className="md:text-4xl text-3xl font-bold text-center text-purple-700">
              RROFESSIONAL EXPERIANCE
            </CardTitle>
          </CardHeader>
        </Animate>

        <CardContent>
          {/* === HORIZONTAL TIMELINE CONTAINER === */}
          <div className="relative overflow-x-auto pb-4 custom-scroll-timeline" >

            {/* --- 2. EXPERIENCE CARDS (Horizontal Flex) --- */}

            <div className="flex flex-nowrap items-center space-x-4 relative 
           ">

              {experienceData.map((exp, index) => (

                <Animate type="pop" delay={0.1}
                  key={index}
                  className="flex flex-col items-center flex-shrink-0 w-55 md:w-63 pl-2" // w-60/w-72 defines the width of each card
                >

                  {/* Experience Card (small card) */}
                  <Card className="w-full h-full py-2  gap-0 bg-gray-100/5 backdrop-blur-md border border-gray-500 shadow-xl transition 
                transition-all duration-300 ease-in-out 
                hover:scale-[1.04] 
                ">
                    <CardHeader className="justify-center">
                      <h3 className={`text-lg font-semibold text-white leading-snug`}>
                        {exp.company}
                      </h3>
                    </CardHeader>
                    <CardHeader className="justify-center ">
                      <p className="text-sm text-gray-400 ">
                        <strong>{exp.duration}</strong>
                      </p>
                    </CardHeader>
                  </Card>
                </Animate>

              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}