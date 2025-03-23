import { motion } from "framer-motion";
import { Link } from "wouter";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <main className="min-h-screen pt-16">
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary to-[#ff7675] opacity-70 blur-xl"></div>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1573165850883-9b0e18609e51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Emma Duffy in her lab" 
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
              <h2 className="text-4xl font-display font-bold text-neutral-800 mb-6">About Me</h2>
              <div className="w-20 h-1 bg-[#ff7675] mb-6"></div>
              
              <p className="text-neutral-600 mb-6">
                I'm a passionate data scientist and STEM advocate with over 5 years of experience in transforming complex data into actionable insights. My journey in the tech world began with a fascination for how data can tell compelling stories and drive meaningful change.
              </p>
              
              <p className="text-neutral-600 mb-6">
                As a woman in STEM, I'm dedicated to promoting diversity and inclusion in the field. I believe that diverse perspectives lead to more innovative solutions and better outcomes for everyone.
              </p>
              
              <p className="text-neutral-600 mb-8">
                When I'm not coding or analyzing data, you can find me mentoring aspiring data scientists, speaking at tech conferences, or exploring the great outdoors. I'm constantly learning and pushing the boundaries of what's possible with data.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "rounded-full bg-primary hover:bg-primary/90 font-accent"
                  )}
                >
                  <i className="fas fa-envelope mr-2"></i> Get In Touch
                </Link>
                <Link 
                  href="/projects"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "default" }),
                    "rounded-full border-primary text-primary hover:bg-primary hover:text-white font-accent"
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold text-neutral-800 mb-4">My Mission</h2>
            <div className="w-20 h-1 bg-[#ff7675] mx-auto mb-6"></div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden p-8 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <i className="fas fa-quote-left text-4xl text-primary/20 mb-6"></i>
            <p className="text-xl text-neutral-700 italic font-display mb-6">
              "My mission is to leverage the power of data to drive positive change in the world, while inspiring and supporting the next generation of women in STEM fields."
            </p>
            <div className="w-16 h-1 bg-[#ff7675] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Footer included in every page */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-display font-bold">Emma<span className="text-[#ff7675]">Duffy</span></span>
              <p className="text-neutral-400 mt-2">Data Scientist & STEM Advocate</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Emma Duffy. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors mr-6">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default About;
