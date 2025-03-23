interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Resume {
  experiences: Experience[];
  education: Education[];
}

export const resume: Resume = {
  experiences: [
    {
      title: "Senior Data Scientist",
      company: "TechCorp Inc.",
      period: "2020 - Present",
      description: "Led a team of data scientists in developing predictive models for customer behavior analysis. Implemented machine learning solutions that increased conversion rates by 25%.",
      skills: ["Python", "Machine Learning", "Team Leadership"]
    },
    {
      title: "Data Analyst",
      company: "Analytics Partners",
      period: "2018 - 2020",
      description: "Created comprehensive dashboards and reports using Tableau and Power BI. Conducted statistical analyses that guided strategic business decisions.",
      skills: ["Tableau", "SQL", "Data Visualization"]
    }
  ],
  education: [
    {
      degree: "M.S. in Data Science",
      institution: "Stanford University",
      period: "2016 - 2018",
      description: "Specialized in machine learning algorithms and statistical modeling. Thesis on predictive analytics in healthcare outcomes."
    },
    {
      degree: "B.S. in Computer Science",
      institution: "MIT",
      period: "2012 - 2016",
      description: "Graduated with honors. Focus on computational algorithms and software engineering."
    }
  ]
};
