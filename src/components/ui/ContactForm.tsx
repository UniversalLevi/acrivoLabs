"use client";

import { useState, FormEvent } from "react";
import Button from "./Button";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    // In production, this would send to an API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", phone: "", projectType: "", budget: "", timeline: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg glass-panel border border-dark-800 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan/50 transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg glass-panel border border-dark-800 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan/50 transition-all"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-text-primary mb-2"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg glass-panel border border-dark-800 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan/50 transition-all"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label
            htmlFor="projectType"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg glass-panel border border-dark-800 text-text-primary focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan/50 transition-all"
          >
            <option value="">Select...</option>
            <option value="branding">Branding</option>
            <option value="website">Website</option>
            <option value="ui-ux">UI/UX Design</option>
            <option value="marketing">Marketing</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg glass-panel border border-dark-800 text-text-primary focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan/50 transition-all"
          >
            <option value="">Select...</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-plus">$25,000+</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="timeline"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg glass-panel border border-dark-800 text-text-primary focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan/50 transition-all"
          >
            <option value="">Select...</option>
            <option value="asap">ASAP</option>
            <option value="1-3months">1-3 months</option>
            <option value="3-6months">3-6 months</option>
            <option value="6plus">6+ months</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-primary mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg glass-panel border border-dark-800 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan/50 transition-all resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 flex items-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Thank you! Your message has been sent. We&apos;ll get back to you soon.</span>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 flex items-center gap-2"
          >
            <AlertCircle className="w-5 h-5" />
            <span>Something went wrong. Please try again or contact us directly.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="w-full text-lg py-4"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
