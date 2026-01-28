import type { Metadata } from "next";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Privacy Policy | Acrivo Labs",
  description: "Privacy Policy for Acrivo Labs website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <Card>
          <h1 className="text-4xl font-bold mb-8 text-text-primary">
            Privacy Policy
          </h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <div>
              <p className="text-text-secondary mb-4">
                <strong className="text-text-primary">Last Updated:</strong>{" "}
                {new Date().toLocaleDateString()}
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                1. Introduction
              </h2>
              <p className="text-text-secondary">
                Acrivo Labs ("we," "our," or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                2. Information We Collect
              </h2>
              <p className="text-text-secondary mb-4">
                We may collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Project details and requirements</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                3. How We Use Your Information
              </h2>
              <p className="text-text-secondary mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>Respond to your inquiries and provide our services</li>
                <li>Communicate with you about projects and updates</li>
                <li>Improve our website and services</li>
                <li>Send you marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                4. Information Sharing
              </h2>
              <p className="text-text-secondary">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mt-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                5. Data Security
              </h2>
              <p className="text-text-secondary">
                We implement appropriate technical and organizational measures
                to protect your personal information. However, no method of
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                6. Your Rights
              </h2>
              <p className="text-text-secondary mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                7. Cookies
              </h2>
              <p className="text-text-secondary">
                Our website may use cookies to enhance your experience. You can
                set your browser to refuse cookies, but this may affect website
                functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                8. Changes to This Policy
              </h2>
              <p className="text-text-secondary">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                9. Contact Us
              </h2>
              <p className="text-text-secondary">
                If you have questions about this Privacy Policy, please contact
                us at{" "}
                <a
                  href="mailto:hello@acrivolabs.com"
                  className="text-primary-blue hover:underline"
                >
                  hello@acrivolabs.com
                </a>
                .
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
