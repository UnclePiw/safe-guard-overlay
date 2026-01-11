import { motion } from "framer-motion";
import { Shield, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="glass rounded-2xl border border-border/50 px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display font-bold">Safe-Overlay</span>
                <span className="text-muted-foreground ml-1">Alert</span>
              </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                ฟีเจอร์
              </a>
              <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                ทดลองใช้
              </a>
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                วิธีการทำงาน
              </a>
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <Button variant="hero" size="sm">
                ดาวน์โหลด
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="md:hidden pt-4 mt-4 border-t border-border/30"
            >
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  ฟีเจอร์
                </a>
                <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  ทดลองใช้
                </a>
                <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  วิธีการทำงาน
                </a>
                <Button variant="hero" size="sm" className="w-full">
                  ดาวน์โหลด
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
