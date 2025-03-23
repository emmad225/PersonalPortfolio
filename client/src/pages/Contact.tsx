import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import PageTitle from "@/components/shared/PageTitle";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", values);
    
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageTitle 
            title="Contact Me" 
            subtitle="Have a question or want to work together? Feel free to reach out!"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden p-8"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-accent text-neutral-800">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-accent text-neutral-800">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your.email@example.com" 
                            type="email"
                            className="px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-accent text-neutral-800">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What is this regarding?" 
                            className="px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-accent text-neutral-800">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message..." 
                            className="px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary"
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full px-6 py-3 rounded-lg font-accent"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">
                          <i className="fas fa-spinner"></i>
                        </span>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden p-8"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-display font-bold text-neutral-800 mb-6">Connect With Me</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-accent font-medium text-neutral-800 mb-1">Email</h4>
                    <a href="mailto:jane.doe@example.com" className="text-primary hover:underline">jane.doe@example.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-accent font-medium text-neutral-800 mb-1">Location</h4>
                    <p className="text-neutral-600">San Francisco, CA</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-neutral-200">
                  <h4 className="font-accent font-medium text-neutral-800 mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-colors duration-300">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-colors duration-300">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-colors duration-300">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-colors duration-300">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer included in every page */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-display font-bold">Jane<span className="text-[#ff7675]">Doe</span></span>
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
            <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
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

export default Contact;
