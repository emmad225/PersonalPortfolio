import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import PageTitle from "@/components/shared/PageTitle";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

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

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden p-8"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 ">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-accent font-medium text-neutral-800 mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:eduffy225@gmail.com"
                      className="text-primary hover:underline"
                    >
                      eduffy225@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-accent font-medium text-neutral-800 mb-1">
                      LinkedIn
                    </h4>
                    <a
                      href="https://www.linkedin.com/in/emma-duffy4/"
                      className="text-primary hover:underline"
                    >
                      https://www.linkedin.com/in/emma-duffy4/
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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

export default Contact;
