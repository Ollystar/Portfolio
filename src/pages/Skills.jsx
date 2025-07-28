import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
        <p className="text-gray-600 mb-10">
          Here are the technologies I use to build beautiful and functional websites.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center space-y-2">
              {skill.icon}
              <span className="text-gray-700 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;