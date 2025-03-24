export interface Skill {
  name: string;
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "Java" },
      { name: "C" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Pandas" },
      { name: "Numpy" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Plotly" },
      { name: "Chart.js" },
      { name: "d3.js" },
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      { name: "Tableau" },
      { name: "Power BI" },
      { name: "Snowflake" },
      { name: "SQL" },
      { name: "Data Visualization" },
      { name: "Machine Learning" },
      { name: "Statistical Analysis" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [{ name: "GitHub" }, { name: "AWS" }, { name: "Postman" }],
  },
];
