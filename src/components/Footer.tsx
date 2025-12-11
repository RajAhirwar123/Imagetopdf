import { FileImage, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <FileImage className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">
              <span className="gradient-text">Image</span>
              <span className="text-foreground"> to PDF</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#converter" className="hover:text-foreground transition-colors">
              Converter
            </a>
            <a href="#how-to-use" className="hover:text-foreground transition-colors">
              How to Use
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Image to PDF Converter</span>
            <span className="mx-2">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-destructive fill-destructive" /> 
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
