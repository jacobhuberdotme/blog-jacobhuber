import { ThemeToggle } from "@/components/theme-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function NavBottom() {
  return (
    <footer className="p-6 bg-muted text-muted-foreground flex-shrink-0 mt-auto"> {/* Ensure it stays at the bottom */}
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <p className="text-sm md:text-base">© 2024 Jacob Huber Endeavors, LLC.</p>
        <div className="flex space-x-6 items-center ml-auto"> {/* Floats the links and toggle to the right */}

          {/* Links to internal pages */}
          <Link href="/blog" className="hover:underline text-sm md:text-base transition-colors">
              Blog
          </Link>
          <Link href="/about" className="hover:underline text-sm md:text-base transition-colors">
              About
          </Link>
          <Link href="/resume" className="hover:underline text-sm md:text-base transition-colors">
              Resume
          </Link>

          {/* External links with icons */}
          <a
            href="https://github.com/jacobhuberendeavorsllc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center space-x-2 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
          </a>
          <a
            href="mailto:hello@jacobhuber.me"
            className="hover:underline flex items-center space-x-2 transition-colors"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/cobmin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center space-x-2 transition-colors"
          >
            <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}