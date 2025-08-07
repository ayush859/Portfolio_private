import { useState } from "react";
import { cn } from "@/lib/utils";


const skills = [
  // Core Skills
  { name: "JavaScript (ES6+)", level: 85, category: "core" },
  { name: "Node.js", level: 85, category: "core" },
  { name: "MongoDB", level: 75, category: "core" },
  { name: "C++", level: 80, category: "core" },
  { name: "Linux (System Programming)", level: 70, category: "core" },
  { name: "Data Structures & Algorithms", level: 75, category: "core" },

  // Backend & System Design
  { name: "REST API Design", level: 75, category: "backend" },
  { name: "Apache Kafka", level: 70, category: "backend" },
]

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
