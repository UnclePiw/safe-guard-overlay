import { motion } from "framer-motion";
import { Shield, AlertTriangle, Smartphone } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-destructive/5 blur-3xl" />
      
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 mb-6"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Pre-Transaction Protection</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
              <span className="text-foreground">ปกป้องเงินของคุณ</span>
              <br />
              <span className="text-gradient-primary">ก่อนการโอน</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Safe-Overlay Alert ตรวจจับเลขบัญชีม้าแบบเรียลไทม์ทันทีที่คุณคัดลอก 
              ป้องกันความเสียหายตั้งแต่ต้นทาง ก่อนที่เงินจะออกจากบัญชี
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl">
                เริ่มต้นใช้งาน
              </Button>
              <Button variant="glass" size="xl">
                ดูการทำงาน
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/30"
            >
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">ความแม่นยำ</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">&lt;1s</div>
                <div className="text-sm text-muted-foreground">ตรวจสอบ</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-success">50K+</div>
                <div className="text-sm text-muted-foreground">บัญชีม้า</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-[280px] h-[560px] bg-card rounded-[3rem] border-4 border-border/50 shadow-2xl overflow-hidden">
                {/* Screen content */}
                <div className="absolute inset-4 rounded-[2.5rem] overflow-hidden bg-background">
                  {/* Status bar */}
                  <div className="h-8 bg-secondary/50 flex items-center justify-center">
                    <div className="w-20 h-5 bg-foreground/10 rounded-full" />
                  </div>
                  
                  {/* Chat mockup */}
                  <div className="p-4 space-y-3">
                    <div className="flex justify-end">
                      <div className="bg-primary/20 rounded-2xl rounded-br-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm">โอนเงินมาที่บัญชีนี้นะ</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <motion.div 
                        className="bg-destructive/30 border border-destructive/50 rounded-2xl rounded-br-sm px-4 py-2 max-w-[80%]"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <p className="text-sm font-mono">123-4-56789-0</p>
                        <p className="text-xs text-muted-foreground mt-1">กสิกรไทย</p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Alert overlay preview */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute inset-x-4 bottom-20 glass-danger border border-destructive/50 rounded-2xl p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-danger flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-5 h-5 text-destructive-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-destructive text-sm">⚠️ บัญชีอันตราย!</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          เลขบัญชีนี้อยู่ในฐานข้อมูลบัญชีม้า
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-8 top-20 w-16 h-16 rounded-2xl bg-gradient-safe flex items-center justify-center shadow-xl glow-safe"
              >
                <Shield className="w-8 h-8 text-success-foreground" />
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-8 bottom-32 w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-xl glow-primary"
              >
                <Smartphone className="w-7 h-7 text-primary-foreground" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
