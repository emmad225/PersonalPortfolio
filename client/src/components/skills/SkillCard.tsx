import { useState } from "react";
import { cn } from "@/lib/utils";
import { Skill } from "@/data/skills";

interface SkillCardProps {
  category: string;
  skills: Skill[];
}

const SkillCard = ({ category, skills }: SkillCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6 cursor-pointer" onClick={toggleOpen}>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-display font-bold text-neutral-800">
            {category}
          </h3>
          <span className="text-primary">
            <i
              className={`fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}
            ></i>
          </span>
        </div>
      </div>
      <div
        className={cn(
          "transition-all duration-500 overflow-hidden",
          isOpen ? "max-h-[500px]" : "max-h-0",
        )}
      >
        <div className="p-6 pt-0 border-t border-neutral-200">
          <ul className="space-y-3">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-[#3e5b79] mr-3"></span>
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
