// components/SkillsetSection.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faPython, faPhp, faGitAlt, faUbuntu
    , faAndroid, faDocker, faLinux
} from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase, faServer, faTerminal, faCloud, faCode
} from '@fortawesome/free-solid-svg-icons';
import Animate from "@/components/Animate";




const skillData = [
    // Frontend
    { icon: faHtml5 },
    { icon: faCss3Alt },
    { icon: faJs },
    { icon: faReact },
    // { icon: faJquery },


    // Backend
    { icon: faNodeJs },
    { icon: faPython },
    { icon: faPhp },
    { icon: faCode },
    { icon: faUbuntu },
    { icon: faServer },

    // Databases
    { icon: faDatabase },

    // Tools & Others
    { icon: faGitAlt },
    { icon: faCloud },
];

const toolUse = [
    // { icon: faAndroid },
    { icon: faDocker },
    { icon: faLinux },
    { icon: faTerminal }
]

export default function SkillsetSection() {
    return (
        <>
            <Card className="w-full max-w-4xl mx-auto mt-12 border-none bg-tranparent  shadow-none">

                <Animate type="fade-up">
                    <CardHeader>
                        <CardTitle className="md:text-4xl text-2xl font-bold text-center text-purple-600">
                            <strong className="text-white">Professional</strong> Skillset
                        </CardTitle>
                    </CardHeader>
                </Animate>

                <CardContent className="py-6">
                    {/* === SKILLS BUBBLE GRID === */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center ">

                        {skillData.map((skill, index) => (
                            <Animate key={index} type="pop" delay={0.2}>
                                <div

                                    className="flex flex-col items-center justify-center p-4 
                                       w-20 h-20 rounded-full bg-slate-950 border border-gray-600 
                                       shadow-md transition hover:scale-105 hover:bg-gray-900/40 duration-200"
                                >
                                    <FontAwesomeIcon
                                        icon={skill.icon}
                                        className={`text-4xl mb-2 text-white`}
                                    />
                                </div>
                            </Animate>
                        ))}

                    </div>
                    {/* === END SKILLS BUBBLE GRID === */}
                </CardContent>
            </Card>

            <Card className="w-full max-w-4xl mx-auto border-none bg-transparent mb-10 shadow-none">
                <Animate type="fade-up">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold text-center text-purple-600">
                            Tools <strong className="text-white">I use</strong>
                        </CardTitle>
                    </CardHeader>
                </Animate>


                <CardContent className="py-6">

                    {/* MOBILE-FRIENDLY BUBBLE WRAPPER */}
                    <div
                        className="
                flex flex-wrap justify-center 
                gap-6 sm:gap-8 
                w-full
            "
                    >
                        {toolUse.map((skill, index) => (
                            <Animate key={index} type="pop" delay={0.2}>
                                <div

                                    className="
                        flex flex-col items-center justify-center 
                        p-4  
                        w-20 h-20 sm:w-20 sm:h-20
                        rounded-full 
                        bg-slate-950 border border-gray-600 
                        shadow-md 
                        transition hover:scale-105 hover:bg-gray-900/40 duration-200
                    "
                                >
                                    <FontAwesomeIcon
                                        icon={skill.icon}
                                        className="text-3xl sm:text-4xl mb-2 text-white"
                                    />
                                </div>
                            </Animate>
                        ))}
                    </div>

                </CardContent>
            </Card >

        </>
    );
}