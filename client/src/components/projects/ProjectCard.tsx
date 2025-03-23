import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, image, category, tags, link } = project;
  
  const categoryColors: Record<string, string> = {
    "Data Visualization": "bg-primary",
    "Machine Learning": "bg-[#ff7675]",
    "Dashboard": "bg-[#00b894]",
    "Analysis": "bg-[#0984e3]",
    "Web App": "bg-[#6c5ce7]",
    "API": "bg-[#fdcb6e]"
  };

  const categoryColor = categoryColors[category] || "bg-primary";

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <span className={`px-3 py-1 ${categoryColor} text-white text-xs font-accent rounded-full shadow-md`}>
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-neutral-800 mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4 text-sm">{description}</p>
        <div className="flex gap-2 mb-4 flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={link} 
          className="text-primary font-accent text-sm font-medium inline-flex items-center hover:underline"
        >
          View Project <i className="fas fa-arrow-right ml-1 text-xs"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
