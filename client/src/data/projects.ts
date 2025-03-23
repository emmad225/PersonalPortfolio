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
    title: "Spotify Data Analysis",
    description:
      "A comprehensive analysis of Spotify listening history data trends using advanced data engineering and visualization techniques.",
    image:
      "https://github.com/emmad225/PersonalWebsiteImages/blob/main/spotifydash.jpg?raw=true",
    category: "Data Visualization",
    tags: ["Python", "Tableau", "Statistical Analysis"],
    link: "https://github.com/emmad225/SpotifyPersonalProject.git",
  },

  {
    title: "Breast Cancer Image Detection",
    description:
      "Ultrasound Image Segmentation with U-Net and Hyperparameter Optimization",
    image:
      "https://github.com/emmad225/PersonalWebsiteImages/blob/ac0a1f6112d5a2872f74900cc314fe160732518c/Image%20Analysis.jpg?raw=true",
    category: "Machine Learning",
    tags: ["Python", "Optimization", "Image Segmentation"],
    link: "https://github.com/emmad225/Ultrasound-Image-Segmentation",
  },
];
