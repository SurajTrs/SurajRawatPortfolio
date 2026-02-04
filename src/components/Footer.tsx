import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70 text-sm">
              &copy; {currentYear} Suraj Rawat. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/SurajTrs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/surajrawat99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:suraj.schs99@gmail.com"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FiMail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}