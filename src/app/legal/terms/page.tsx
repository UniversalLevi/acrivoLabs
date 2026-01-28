import type { Metadata } from "next";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Terms & Conditions | Acrivo Labs",
  description: "Terms and Conditions for Acrivo Labs services.",
};

export default function TermsPage() {
  return (
    <div className="pt-20 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <Card>
          <h1 className="text-4xl font-bold mb-8 text-text-primary">
            Terms & Conditions
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
                1. Agreement to Terms
              </h2>
              <p className="text-text-secondary">
                By accessing or using the Acrivo Labs website and services, you
                agree to be bound by these Terms and Conditions. If you do not
                agree with any part of these terms, you may not access our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                2. Services
              </h2>
              <p className="text-text-secondary">
                Acrivo Labs provides design and development services including
                but not limited to branding, web development, UI/UX design, and
                marketing creatives. All services are provided subject to
                separate service agreements and project specifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                3. Intellectual Property
              </h2>
              <p className="text-text-secondary mb-4">
                Unless otherwise agreed in writing:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>
                  All work created by Acrivo Labs remains our property until full
                  payment is received
                </li>
                <li>
                  Upon full payment, ownership of the final deliverables
                  transfers to the client
                </li>
                <li>
                  Acrivo Labs retains the right to use completed work for
                  portfolio and marketing purposes
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                4. Payment Terms
              </h2>
              <p className="text-text-secondary">
                Payment terms will be specified in individual project
                agreements. Generally, a deposit is required to begin work, with
                the balance due upon project completion or according to agreed
                milestones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                5. Client Responsibilities
              </h2>
              <p className="text-text-secondary mb-4">Clients are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                <li>Providing accurate and complete project requirements</li>
                <li>Timely feedback and approvals</li>
                <li>Providing necessary materials and access</li>
                <li>Payment according to agreed terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                6. Revisions and Changes
              </h2>
              <p className="text-text-secondary">
                The number of revisions included in each project will be
                specified in the project agreement. Additional revisions may be
                subject to additional fees. Significant changes to project scope
                may require a new agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                7. Warranties and Disclaimers
              </h2>
              <p className="text-text-secondary">
                We warrant that our services will be performed in a professional
                manner. However, we do not guarantee specific results or
                outcomes. Our services are provided "as is" without warranties of
                any kind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                8. Limitation of Liability
              </h2>
              <p className="text-text-secondary">
                To the maximum extent permitted by law, Acrivo Labs shall not be
                liable for any indirect, incidental, or consequential damages
                arising from the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                9. Termination
              </h2>
              <p className="text-text-secondary">
                Either party may terminate a project agreement with written
                notice. Upon termination, payment is due for all work completed
                up to the termination date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                10. Changes to Terms
              </h2>
              <p className="text-text-secondary">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting. Continued use of our
                services constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                11. Contact Information
              </h2>
              <p className="text-text-secondary">
                For questions about these Terms & Conditions, please contact us
                at{" "}
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
