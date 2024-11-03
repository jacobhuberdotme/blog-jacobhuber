import { ThemeToggle } from "@/components/theme-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import clsx from "clsx";

export default function Footer() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/jacobhuberendeavorsllc",
      icon: faGithub,
      label: "GitHub",
    },
    {
      href: "mailto:hello@jacobhuber.me",
      icon: faEnvelope,
      label: "Email",
    },
    {
      href: "https://x.com/cobmin",
      icon: faXTwitter,
      label: "Twitter",
    },
  ];

  return (
    <footer className="py-6 lg:py-8 bg-muted text-muted-foreground mt-16">
      <div className="container max-w-4xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10 px-4">
        {/* Copyright */}
        <div className="text-center lg:text-left">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Jacob Huber Endeavors, LLC.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 text-sm md:text-base">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  "hover:text-primary transition-colors",
                  "focus:text-primary outline-none"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="container max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4 mt-6">
        {/* Footer Information - Left Aligned */}
        <div className="text-left font-light w-full md:w-auto">
          <p>
            For more details, please see{" "}
            <Link
              href="/terms-and-policies"
              target="_blank"
              rel="noreferrer"
              className="text-primary outline-none focus:ring focus:ring-primary"
            >
              Terms and Policies
            </Link>
            .
          </p>
        </div>

        {/* Social Icons and Theme Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto gap-6">
          <div className="flex gap-4">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}