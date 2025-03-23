export interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "COVID-19 Data Analysis",
    description: "A comprehensive analysis of COVID-19 trends using advanced data visualization techniques.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Data Visualization",
    tags: ["Python", "Tableau", "Statistical Analysis"],
    link: "#"
  },
  {
    title: "Customer Churn Prediction",
    description: "Predictive modeling to identify factors leading to customer churn in subscription services.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Machine Learning",
    tags: ["R", "Machine Learning", "Random Forest"],
    link: "#"
  },
  {
    title: "Real-time Sales Analytics",
    description: "Interactive Tableau dashboard for monitoring sales performance and identifying market trends.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Dashboard",
    tags: ["Tableau", "SQL", "Business Intelligence"],
    link: "#"
  },
  {
    title: "Sentiment Analysis Tool",
    description: "NLP-based application for analyzing customer feedback sentiment from multiple data sources.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Machine Learning",
    tags: ["Python", "NLP", "PyTorch", "Text Mining"],
    link: "#"
  },
  {
    title: "Gender Diversity in Tech",
    description: "Research study and analysis on gender representation and equity in technology fields.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Analysis",
    tags: ["R", "Data Analysis", "Visualization", "Research"],
    link: "#"
  },
  {
    title: "Supply Chain Optimization",
    description: "ML models to optimize supply chain operations and reduce logistics costs by 23%.",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Machine Learning",
    tags: ["Python", "Optimization", "Operations Research"],
    link: "#"
  }
];
