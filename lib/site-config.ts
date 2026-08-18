export const siteConfig = {
  name: "Akshay Soner",
  role: "Backend / Systems Engineer",
  tagline:
    "Building reliable backend systems, intelligent applications, and production infrastructure.",
  description:
    "Backend / Systems Engineer focused on scalable APIs, data-intensive systems, AI integrations, automation, and reliable production deployments.",
  location: "Pune, Maharashtra, India",
  url: "https://akshaysoner.in",
  email: "akshay.soner@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/kr-akshay/",
    github: "https://github.com/akssnr",
  },
  resumeUrl: "/resume.pdf",
} as const;

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Engineering", href: "/engineering" },
  { label: "Contact", href: "/contact" },
] as const;
