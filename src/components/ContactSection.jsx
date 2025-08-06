import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// ✅ LeetCode SVG Icon Component
const LeetCodeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 50 50"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
  >
    <path d="M39.8 15.3L32 7.7c-1.2-1.1-3-1.1-4.2 0l-16 16c-1.1 1.2-1.1 3 0 4.2l16 16c1.2 1.1 3 1.1 4.2 0l7.8-7.6c1.2-1.2 1.2-3.1 0-4.3l-10.6-10c-.6-.5-1.4-.5-2 0-.5.6-.5 1.4 0 2l10.6 10c.1.1.1.2 0 .3l-7.8 7.6c-.1.1-.2.1-.3 0l-16-16c-.1-.1-.1-.2 0-.3l16-16c.1-.1.2-.1.3 0l7.8 7.6c.6.6 1.5.6 2.1 0 .6-.6.6-1.5 0-2.1z" />
  </svg>
);

// ✅ GitHub SVG Icon Component
const GitHubIcon = () => (
  <svg
    className="text-primary"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .5C5.6.5.5 5.7.5 12.3c0 5.2 3.4 9.6 8.1 11.1.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6-.8 2.4-1.2.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.4-2.3 1.1-3.2-.1-.3-.5-1.6.1-3.2 0 0 .9-.3 3 .9.9-.3 1.9-.5 2.9-.5s2 .2 2.9.5c2.1-1.2 3-.9 3-.9.6 1.6.2 2.9.1 3.2.7.9 1.1 1.9 1.1 3.2 0 4.5-2.8 5.5-5.4 5.8.4.3.7 1 .7 2v3c0 .3.2.7.8.6 4.7-1.5 8.1-5.9 8.1-11.1C23.5 5.7 18.4.5 12 .5z" />
  </svg>
);

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ayushgtg@outlook.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ayushgtg@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+918597542120"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8597542120
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    Bengaluru ,India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/ayush85975/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://leetcode.com/ayush859/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LeetCodeIcon />
                </a>
                <a
                  href="https://github.com/ayush859/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.twitch.tv/defnot4me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Ayush Choubey"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="ayushgtg@outlook.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
