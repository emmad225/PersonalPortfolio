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
  GPA: string;
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
      title: "Technology Associate",
      company: "Liberty Mutual",
      period: "Jan 2025 - Present",
      description: "",
      skills: [
        "React",
        "AWS",
        "Version Control",
        "Web Development",
        "Cloud Computing",
        "Snowflake",
        "Data Engineering",
        "Microsoft Power BI",
      ],
    },
    {
      title: "Summer Immersion Program Teaching Assistant",
      company: "Girls Who Code",
      period: "Jun 2023 - Aug 2023",
      description:
        "Empowered 180+ girls and non-binary students to build coding skills in JavaScript and p5.js, fostering a 95% project completion rate and lasting interest in STEM. Created an inclusive and engaging learning environment, offering personalized support to help students overcome challenges. Strengthened industry connections by partnering with Dreamhaven, BlackRock, and Ansys to host 10+ mentorship events, directly linking students with tech leaders.",
      skills: [
        "JavaScript",
        "Student Engagement",
        "Diversity",
        "Team Building",
        "Collaboration",
        "Problem-Solving",
        "Programming",
        "Mentorship",
      ],
    },
    {
      title: "Resident Assistant",
      company: "Boston College",
      period: "Aug 2022 - May 2024",
      description:
        "Recognized as RA of the Year for exceptional leadership and community-building, fostering an inclusive environment for 100+ residents in an 800+ resident hall. Designed and led 10+ social programs, managing budgets to strengthen community engagement. Mediated conflicts and disciplinary issues, ensuring a safe and supportive living space. Improved student engagement by effectively communicating campus resources and events, keeping residents informed and connected.",
      skills: [
        "Communication",
        "Leaderschip",
        "Problem-Solving",
        "Conflict Resolution",
        "Organization",
        "Community Building",
        "Interpersonal Skills",
      ],
    },
    {
      title: "Member Services",
      company: "Boston College",
      period: "May 2023 - May 2024",
      description:
        "Selected to serve on the hiring committee, reviewing over 400 applications and conducting 55 in-person interviews while facilitating training sessions. Managed inventory, processed sales transactions, and oversaw rentals to ensure smooth operations.",
      skills: [
        "Hiring",
        "Customer Service",
        "Sales",
        "Inventory Management",
        "Employee Training",
        "Interviewing",
      ],
    },
  ],
  education: [
    {
      degree: "B.A. in Computer Science",
      institution: "Boston College",
      GPA: "GPA: 3.5",
      period: "2020 - 2024",
      description:
        "Activities and Societies: Boston College Residential Life, Boston College Campus Recreation, TEDxBostonCollege, Women Innovators Network, Women in Tech, Girls Who Code, Boston College Computer Science Society, PULSE Student Volunteering, Intramural Basketball/Volleyball/Flag Football",
    },
    {
      degree: "High School Diploma",
      institution: "Skowhegan Area High School",
      GPA: "GPA: 4.0, Salutatorian",
      period: "2016 - 2020",
      description:
        "Activities and Societies: National Honor Society (Secretary), Varsity Soccer (Captain), Basketball (Captain), Softball",
    },
  ],
};
