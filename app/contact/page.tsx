import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/section-heading";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch to discuss a system to build, automate, or scale.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Have a system to build, automate, or scale?"
      />
      <div className="mt-14">
        <ContactSection />
      </div>
    </div>
  );
}
