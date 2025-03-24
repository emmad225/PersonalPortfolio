import { motion } from "framer-motion";
import PageTitle from "@/components/shared/PageTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import TableauEmbed from "@/components/tableau/TableauEmbed";
import { projects } from "@/data/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageTitle
            title="My Projects"
            subtitle="Explore my portfolio of software engineering and data science work."
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3e5b79] text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold">Emma Duffy</span>
              <p className="text-primary-foreground/80 mt-2">
                Software and Data Engineering
              </p>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/emma-duffy4/"
                className="text-white hover:text-neutral-400 transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/emmad225/"
                className="text-white hover:text-neutral-400 transition-colors"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="mailto:eduffy225@gmail.com"
                className="text-white hover:text-neutral-400 transition-colors"
              >
                <i className="fas fa-envelope mr-2"></i>
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Emma Duffy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Projects;
