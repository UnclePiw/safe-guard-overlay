import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display font-bold">Safe-Overlay</span>
              <span className="text-muted-foreground ml-1">Alert</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Pre-Transaction Protection</span>
            <span className="hidden md:inline">•</span>
            <span>Powered by Knox</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2026 Safe-Overlay Alert
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
