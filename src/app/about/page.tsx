"use client";

import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { Target, Eye, Zap, Handshake } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Design-First Approach",
      description: "We believe that great design is the foundation of every successful digital product. Every decision we make starts with the user experience and visual design, ensuring that what we build is both beautiful and functional.",
    },
    {
      icon: Eye,
      title: "User-Centric Thinking",
      description: "Your users are at the center of everything we do. We design and develop with their needs, behaviors, and goals in mind. This approach ensures that the final product resonates with your audience and drives engagement.",
    },
    {
      icon: Zap,
      title: "Performance-Focused",
      description: "We don't just build pretty websites—we build fast, scalable, and maintainable solutions. Using modern technologies and best practices, we ensure that your digital presence performs well and grows with your business.",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnership",
      description: "We're not just here for the launch. We believe in building long-term relationships with our clients, providing ongoing support, updates, and improvements as your business evolves.",
    },
  ];

  return (
    <div className="pt-20 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        {/* Hero Section */}
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              About <span className="text-neon-cyan">Acrivo Labs</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              We're a creative digital agency focused on building meaningful
              experiences that help businesses grow.
            </p>
          </div>
        </FadeIn>

        {/* Who We Are */}
        <FadeIn direction="up" delay={0.3}>
          <section className="mb-12 md:mb-16">
            <Card className="hover:border-neon-cyan/40 transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
                Who We Are
              </h2>
              <div className="space-y-4">
                <p className="text-text-secondary text-lg leading-relaxed">
                  Acrivo Labs was founded with a simple belief: great design and
                  technology should be accessible to every business, regardless of
                  size. We're a team of designers and developers who are passionate
                  about creating digital experiences that not only look great but
                  also drive real results.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  We work with startups, growing businesses, and established
                  companies who want to elevate their digital presence. Our approach
                  is straightforward: we listen, we plan, we create, and we support.
                  No jargon, no complexity—just clear communication and quality work.
                </p>
              </div>
            </Card>
          </section>
        </FadeIn>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <FadeIn direction="up" delay={0.4}>
            <Card className="h-full hover:border-neon-cyan/40 transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neon-cyan">
                Our Mission
              </h2>
              <p className="text-text-secondary leading-relaxed">
                To help businesses succeed in the digital world by providing
                high-quality design and development services that are accessible,
                transparent, and results-driven. We believe every business deserves
                a digital presence that reflects their values and connects with
                their audience.
              </p>
            </Card>
          </FadeIn>
          <FadeIn direction="up" delay={0.5}>
            <Card className="h-full hover:border-neon-cyan/40 transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neon-cyan">
                Our Vision
              </h2>
              <p className="text-text-secondary leading-relaxed">
                To become the go-to partner for businesses looking to build and
                grow their digital presence. We envision a future where design and
                technology work seamlessly together to create experiences that
                users love and businesses benefit from.
              </p>
            </Card>
          </FadeIn>
        </section>

        {/* How We Think / Work */}
        <FadeIn direction="up" delay={0.6}>
          <section className="mb-12">
            <Card className="hover:border-neon-cyan/40 transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-primary">
                How We Think & Work
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mb-4 shadow-neon">
                        <Icon className="w-6 h-6 text-dark-950" />
                      </div>
                      <h3 className="text-xl font-semibold text-text-primary">
                        {value.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Card>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn direction="up" delay={0.7}>
          <div className="text-center glass-panel border border-neon-cyan/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Ready to elevate your digital presence? Get in touch and let's discuss your project.
            </p>
            <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
              Start a Conversation
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
