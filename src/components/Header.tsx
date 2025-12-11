import { FileImage } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-md group-hover:shadow-lg transition-shadow duration-300">
            <FileImage className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="gradient-text">Image</span>
            <span className="text-foreground"> to PDF</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#converter" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Converter
          </a>
          <a href="#how-to-use" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How to Use
          </a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
