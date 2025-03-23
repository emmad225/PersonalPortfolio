export interface Skill {
  name: string;
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

export const skills: SkillGroup[] = [
  {
    category: "Data Science",
    items: [
      { name: "Machine Learning Algorithms" },
      { name: "Statistical Analysis" },
      { name: "Predictive Modeling" },
      { name: "Data Visualization" },
      { name: "Natural Language Processing" }
    ]
  },
  {
    category: "Programming",
    items: [
      { name: "Python" },
      { name: "R" },
      { name: "SQL" },
      { name: "JavaScript" },
      { name: "React.js" }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Tableau" },
      { name: "Power BI" },
      { name: "AWS" },
      { name: "Git" },
      { name: "Docker" }
    ]
  }
];
