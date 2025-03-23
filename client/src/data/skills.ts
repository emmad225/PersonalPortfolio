export interface Skill {
  name: string;
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

export const skills: SkillGroup[] = [
  {
    category: "Data Science, Analytics & Visualization",
    items: [
      { name: "Tableau" },
      { name: "PowerBI" },
      { name: "Looker Studio" },
      { name: "Snowflake" },
      { name: "pandas, numpy, matplotlib, seaborn, plotly, chart.js, d3.js" },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "Java" },
      { name: "C" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "React.js" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [{ name: "GitHub" }, { name: "AWS" }, { name: "Postman" }],
  },
];
