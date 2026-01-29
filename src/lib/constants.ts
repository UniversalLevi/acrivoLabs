import { Service, ProcessStep, Project, ContactInfo } from "@/types";

export const services: Service[] = [
  {
    id: "branding",
    title: "Branding & Visual Identity",
    description: "Complete brand identity design that reflects your business values and resonates with your audience.",
    icon: "palette",
    detailedDescription: "We create comprehensive brand identities that tell your story and connect with your target audience. From logo design to brand guidelines, we ensure consistency across all touchpoints.",
    whoItsFor: "Startups, businesses launching new products, or companies looking to rebrand.",
    whatYouGet: [
      "Logo design (multiple variations)",
      "Color palette and typography selection",
      "Brand guidelines document",
      "Business card and letterhead designs",
      "Social media profile assets",
    ],
    typicalOutcomes: [
      "Cohesive brand identity",
      "Professional brand guidelines",
      "Ready-to-use brand assets",
      "Clear brand positioning",
    ],
  },
  {
    id: "web-development",
    title: "Website Design & Development",
    description: "Fast, responsive, and scalable websites built with modern technologies.",
    icon: "globe",
    detailedDescription: "We design and develop custom websites that are fast, responsive, and built to scale. Using modern frameworks and best practices, we create digital experiences that convert visitors into customers.",
    whoItsFor: "Businesses needing a new website, redesign, or e-commerce solution.",
    whatYouGet: [
      "Custom UI/UX design",
      "Fully responsive development",
      "SEO optimization",
      "Fast loading times",
      "Content management system",
      "Ongoing support",
    ],
    typicalOutcomes: [
      "Modern, professional website",
      "Improved search rankings",
      "Better user engagement",
      "Mobile-friendly experience",
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    icon: "layers",
    detailedDescription: "We focus on creating user experiences that are both beautiful and functional. Through research, wireframing, and prototyping, we design interfaces that users love to interact with.",
    whoItsFor: "Companies building new products, redesigning existing apps, or improving user experience.",
    whatYouGet: [
      "User research and analysis",
      "Wireframes and prototypes",
      "High-fidelity UI designs",
      "Design system creation",
      "Usability testing",
      "Design handoff files",
    ],
    typicalOutcomes: [
      "Improved user satisfaction",
      "Higher conversion rates",
      "Reduced development time",
      "Scalable design system",
    ],
  },
  {
    id: "marketing",
    title: "Marketing & Social Media Creatives",
    description: "Eye-catching visuals and campaigns that drive engagement and conversions.",
    icon: "megaphone",
    detailedDescription: "We create marketing materials and social media content that captures attention and drives action. From social posts to ad campaigns, we design visuals that align with your brand and marketing goals.",
    whoItsFor: "Businesses needing social media content, ad creatives, or marketing campaign materials.",
    whatYouGet: [
      "Social media templates",
      "Ad campaign creatives",
      "Email marketing designs",
      "Presentation templates",
      "Marketing collateral",
      "Content strategy guidance",
    ],
    typicalOutcomes: [
      "Consistent brand presence",
      "Higher engagement rates",
      "Professional marketing materials",
      "Time-saving templates",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Understand Requirements",
    description: "We start by listening. Through detailed discussions, we understand your goals, target audience, and vision for the project.",
  },
  {
    id: 2,
    title: "Plan & Design",
    description: "We create a strategic plan and design mockups. You'll see exactly what we're building before development begins.",
  },
  {
    id: 3,
    title: "Build & Refine",
    description: "We bring the design to life with clean code and modern technologies. Regular updates keep you in the loop throughout development.",
  },
  {
    id: 4,
    title: "Launch & Support",
    description: "We handle deployment and provide ongoing support. Your project is never left behind—we're here for the long term.",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    slug: "modern-saas-platform",
    title: "Modern SaaS Platform",
    description: "A clean, intuitive dashboard design for a B2B SaaS product focusing on user productivity and data visualization.",
    thumbnail: "/images/project-1.jpg",
    isConcept: true,
    objective: "Design a modern SaaS dashboard that helps teams manage projects efficiently with clear data visualization.",
    approach: "Focused on minimalism and clarity. Used a card-based layout with intuitive navigation and real-time data updates.",
    tools: ["Figma", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "2",
    slug: "eco-brand-identity",
    title: "Eco Brand Identity",
    description: "Complete brand identity for a sustainable products company, emphasizing nature and modern aesthetics.",
    thumbnail: "/images/project-2.jpg",
    isConcept: true,
    objective: "Create a brand identity that communicates sustainability while maintaining a modern, premium feel.",
    approach: "Used organic shapes and earth tones combined with clean typography. Created a flexible logo system for various applications.",
    tools: ["Illustrator", "Photoshop", "Brand Guidelines"],
  },
  {
    id: "3",
    slug: "e-commerce-redesign",
    title: "E-commerce Redesign",
    description: "Complete redesign of an online store focusing on improved user experience and increased conversion rates.",
    thumbnail: "/images/project-3.jpg",
    isConcept: true,
    objective: "Redesign an e-commerce platform to improve user experience and increase sales conversion.",
    approach: "Simplified the checkout process, improved product discovery, and enhanced mobile experience. Focused on trust-building elements.",
    tools: ["Figma", "Next.js", "Shopify", "Analytics"],
  },
  {
    id: "4",
    slug: "fintech-mobile-app",
    title: "Fintech Mobile App",
    description: "Mobile-first design for a financial management app with focus on security and ease of use.",
    thumbnail: "/images/project-4.jpg",
    isConcept: true,
    objective: "Design a mobile app that makes personal finance management simple and secure.",
    approach: "Prioritized security indicators and simplified complex financial data into digestible visualizations. Used progressive disclosure for advanced features.",
    tools: ["Figma", "React Native", "TypeScript"],
  },
];

export const contactInfo: ContactInfo = {
  email: "acrivolabs@gmail.com",
  whatsapp: "+91 96430 62851",
  workingHours: "Monday - Friday: 9:00 AM - 6:00 PM",
};

export const whyAcrivoPoints = [
  {
    title: "Clean & Functional Design",
    description: "We prioritize clarity and usability. Every design decision serves a purpose.",
  },
  {
    title: "Modern Tech Stack",
    description: "Built with the latest technologies for performance, scalability, and maintainability.",
  },
  {
    title: "Fast Turnaround",
    description: "Efficient processes mean you get quality work delivered on time, every time.",
  },
  {
    title: "Clear Communication",
    description: "No jargon, no surprises. We keep you informed at every step of the process.",
  },
  {
    title: "Long-term Support",
    description: "We're not just here for the launch. We provide ongoing support and updates.",
  },
];
