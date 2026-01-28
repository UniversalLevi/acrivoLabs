import { processSteps } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function Process() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How We Work
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A clear, structured process that keeps you informed every step of
            the way
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary-blue to-primary-blue-light text-white font-bold text-xl mb-4">
                  {step.id}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary-blue" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
