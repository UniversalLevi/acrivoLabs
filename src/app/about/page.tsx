import type { Metadata } from "next";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About Us | Acrivo Labs",
  description:
    "Learn about Acrivo Labs - our mission, vision, and approach to creating modern digital experiences.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About Acrivo Labs
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We're a creative digital agency focused on building meaningful
            experiences that help businesses grow.
          </p>
        </div>

        {/* Who We Are */}
        <section className="mb-12 md:mb-16">
          <Card>
            <h2 className="text-3xl font-bold mb-4 text-text-primary">
              Who We Are
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-text-secondary text-lg mb-4">
                Acrivo Labs was founded with a simple belief: great design and
                technology should be accessible to every business, regardless of
                size. We're a team of designers and developers who are passionate
                about creating digital experiences that not only look great but
                also drive real results.
              </p>
              <p className="text-text-secondary text-lg">
                We work with startups, growing businesses, and established
                companies who want to elevate their digital presence. Our approach
                is straightforward: we listen, we plan, we create, and we support.
                No jargon, no complexity—just clear communication and quality work.
              </p>
            </div>
          </Card>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:mb-16">
          <Card>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              Our Mission
            </h2>
            <p className="text-text-secondary">
              To help businesses succeed in the digital world by providing
              high-quality design and development services that are accessible,
              transparent, and results-driven. We believe every business deserves
              a digital presence that reflects their values and connects with
              their audience.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              Our Vision
            </h2>
            <p className="text-text-secondary">
              To become the go-to partner for businesses looking to build and
              grow their digital presence. We envision a future where design and
              technology work seamlessly together to create experiences that
              users love and businesses benefit from.
            </p>
          </Card>
        </section>

        {/* How We Think / Work */}
        <section>
          <Card>
            <h2 className="text-3xl font-bold mb-6 text-text-primary">
              How We Think & Work
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary">
                  Design-First Approach
                </h3>
                <p className="text-text-secondary">
                  We believe that great design is the foundation of every
                  successful digital product. Every decision we make starts with
                  the user experience and visual design, ensuring that what we
                  build is both beautiful and functional.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary">
                  User-Centric Thinking
                </h3>
                <p className="text-text-secondary">
                  Your users are at the center of everything we do. We design and
                  develop with their needs, behaviors, and goals in mind. This
                  approach ensures that the final product resonates with your
                  audience and drives engagement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary">
                  Performance-Focused
                </h3>
                <p className="text-text-secondary">
                  We don't just build pretty websites—we build fast, scalable,
                  and maintainable solutions. Using modern technologies and best
                  practices, we ensure that your digital presence performs well
                  and grows with your business.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary">
                  Long-Term Partnership
                </h3>
                <p className="text-text-secondary">
                  We're not just here for the launch. We believe in building
                  long-term relationships with our clients, providing ongoing
                  support, updates, and improvements as your business evolves.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
