import { Link } from "wouter";
import { motion } from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";
import SkillCard from "@/components/skills/SkillCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Home = () => {
  // Get featured projects (first 3)
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen pt-16 flex items-center bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 md:order-1"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              <motion.h4
                className="font-accent text-[#6b7280] uppercase tracking-wider mb-4"
                variants={fadeInUp}
              >
                Hello, I'm
              </motion.h4>
              <motion.h1
                className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-tight text-neutral-800 mb-6"
                variants={fadeInUp}
              >
                Emma Duffy
              </motion.h1>
              <motion.h2
                className="font-display italic text-2xl sm:text-3xl text-neutral-600 mb-8"
                variants={fadeInUp}
              >
                Software and Data Engineering
              </motion.h2>
              <motion.p
                className="text-lg text-neutral-600 mb-10 max-w-xl"
                variants={fadeInUp}
              >
                Computer Science and Marketing graduate of Boston College,
                combining technology and creativity to deliver impactful
                solutions. Passionate about software engineering, data science,
                and full-stack development, with a focus on coding, data
                visualization, and collaborative problem-solving.
              </motion.p>
              <motion.div className="flex flex-wrap gap-4" variants={fadeInUp}>
                <Link
                  href="/projects"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full bg-primary hover:bg-primary/90 font-accent",
                  )}
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-full border-primary text-primary hover:bg-primary hover:text-white font-accent",
                  )}
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="order-1 md:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-[#ff7675] opacity-70 blur-xl"></div>
                <div className="h-64 w-64 sm:h-80 sm:w-80 rounded-full overflow-hidden relative border-8 border-white shadow-xl">
                  <img
                    src="https://github.com/emmad225/PersonalWebsiteImages/blob/ac0a1f6112d5a2872f74900cc314fe160732518c/SOLO%20cropped.jpg?raw=true"
                    alt="Portrait of Emma Duffy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="My Expertise"
            subtitle="Skills and technologies I've mastered through academic and professional experience."
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {skills.map((skillGroup, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <SkillCard
                  category={skillGroup.category}
                  skills={skillGroup.items}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Projects"
            subtitle="A selection of my most impactful projects and visualizations."
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer included in every page */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-display font-bold">
                Emma<span className="text-[#ff7675]">Duffy</span>
              </span>
              <p className="text-neutral-400 mt-2">
                Software and Data Engineering
              </p>
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              ></a>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Emma Duffy. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-neutral-400 hover:text-white text-sm transition-colors mr-6"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
