import { motion } from "framer-motion";
import { Link } from "wouter";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <main className="min-h-screen pt-16">
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary to-[#6b7280] opacity-70 blur-xl"></div>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://github.com/emmad225/PersonalWebsiteImages/blob/main/farm.jpg?raw=true"
                    alt="My hometown in Maine"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl font-display font-bold text-neutral-800 mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-[#6b7280] mb-6"></div>

              <p className="text-neutral-600 mb-6">
                A recent graduate of Boston College, where I earned my degree in
                Computer Science and Marketing. Originally from Maine, I grew up
                playing three sports, which instilled in me a strong sense of
                teamwork and dedication. During my time at Boston College, I was
                actively engaged in various communities, including Residential
                Life, Campus Recreation, and TEDxBostonCollege. These
                experiences not only enriched my academic journey but also
                allowed me to develop strong leadership and collaboration
                skills.
              </p>

              <p className="text-neutral-600 mb-6">
                In my free time, I love to read, listen to podcasts, and
                exercise, and make fun memories with my friends. I am always on
                the lookout for new ideas and inspiration.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "rounded-full bg-primary hover:bg-primary/90 font-accent",
                  )}
                >
                  <i className="fas fa-envelope mr-2"></i> Get In Touch
                </Link>
                <Link
                  href="/projects"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "default" }),
                    "rounded-full bg-[#3e5b79] hover:bg-[#3e5b79]/90 text-white hover:text-white font-accent",
                  )}
                >
                  <i className="fas fa-eye mr-2"></i> View My Work
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"></div>
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

export default About;
