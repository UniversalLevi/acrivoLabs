import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          We design and build{" "}
          <span className="bg-gradient-to-r from-primary-blue to-primary-blue-light bg-clip-text text-transparent">
            modern digital experiences
          </span>{" "}
          for growing businesses.
        </h1>
        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-8 text-balance">
          Branding, websites, UI/UX, and marketing creatives — crafted with
          clarity and purpose.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" variant="primary" className="w-full sm:w-auto">
            Get a Quote
          </Button>
          <Button href="/work" variant="outline" className="w-full sm:w-auto">
            View Work
          </Button>
        </div>
      </div>
    </section>
  );
}
