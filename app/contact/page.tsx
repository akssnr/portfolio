import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/section-heading";
import { ContactSection } from "@/components/contact-section";
import { PageGlow } from "@/components/page-glow";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch to discuss a system to build, automate, or scale.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="relative">
      <PageGlow />
      <div className="mx-auto max-w-4xl px-6 py-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Have a system to build, automate, or scale?"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mt-14">
            <ContactSection />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
