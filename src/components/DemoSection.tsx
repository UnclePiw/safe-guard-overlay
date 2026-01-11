import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Search, AlertTriangle, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

type DemoState = "idle" | "copied" | "checking" | "danger" | "safe";

const MOCK_ACCOUNTS = {
  dangerous: "123-4-56789-0",
  safe: "987-6-54321-0",
};

const DemoSection = () => {
  const [demoState, setDemoState] = useState<DemoState>("idle");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountType, setAccountType] = useState<"dangerous" | "safe">("dangerous");

  const handleDemo = (type: "dangerous" | "safe") => {
    setAccountType(type);
    const account = MOCK_ACCOUNTS[type];
    setAccountNumber(account);
    setDemoState("copied");
    
    setTimeout(() => setDemoState("checking"), 1000);
    setTimeout(() => setDemoState(type === "dangerous" ? "danger" : "safe"), 3000);
    setTimeout(() => setDemoState("idle"), 8000);
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="container relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            ทดลองการทำงาน
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ลองคลิกปุ่มด้านล่างเพื่อจำลองการคัดลอกเลขบัญชีและดูการแจ้งเตือนแบบเรียลไทม์
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Demo buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-4">เลือกสถานการณ์จำลอง</h3>
              
              <div className="space-y-4">
                <Button
                  variant="danger"
                  size="lg"
                  className="w-full justify-start gap-4"
                  onClick={() => handleDemo("dangerous")}
                  disabled={demoState !== "idle"}
                >
                  <AlertTriangle className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">บัญชีอันตราย</div>
                    <div className="text-xs opacity-80">{MOCK_ACCOUNTS.dangerous}</div>
                  </div>
                </Button>

                <Button
                  variant="safe"
                  size="lg"
                  className="w-full justify-start gap-4"
                  onClick={() => handleDemo("safe")}
                  disabled={demoState !== "idle"}
                >
                  <CheckCircle className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">บัญชีปลอดภัย</div>
                    <div className="text-xs opacity-80">{MOCK_ACCOUNTS.safe}</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Status timeline */}
            <div className="glass rounded-2xl p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-4">ลำดับการทำงาน</h3>
              
              <div className="space-y-4">
                <StatusStep 
                  step={1} 
                  label="ตรวจจับการคัดลอก" 
                  active={demoState === "copied"} 
                  completed={demoState !== "idle" && demoState !== "copied"}
                  icon={<Copy className="w-4 h-4" />}
                />
                <StatusStep 
                  step={2} 
                  label="ตรวจสอบฐานข้อมูล" 
                  active={demoState === "checking"} 
                  completed={demoState === "danger" || demoState === "safe"}
                  icon={<Search className="w-4 h-4" />}
                />
                <StatusStep 
                  step={3} 
                  label="แจ้งผลลัพธ์" 
                  active={demoState === "danger" || demoState === "safe"} 
                  completed={false}
                  icon={demoState === "danger" ? <AlertTriangle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                />
              </div>
            </div>
          </motion.div>

          {/* Phone mockup with overlay */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-[280px] h-[560px] bg-card rounded-[3rem] border-4 border-border/50 shadow-2xl overflow-hidden">
              {/* Screen */}
              <div className="absolute inset-4 rounded-[2.5rem] overflow-hidden bg-background">
                {/* Status bar */}
                <div className="h-8 bg-secondary/50 flex items-center justify-between px-6">
                  <span className="text-xs text-muted-foreground">9:41</span>
                  <div className="w-20 h-5 bg-foreground/10 rounded-full" />
                </div>
                
                {/* Banking app mockup */}
                <div className="p-4">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary mx-auto mb-2" />
                    <span className="text-sm font-medium">โอนเงิน</span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs text-muted-foreground">เลขบัญชีปลายทาง</label>
                      <div className="h-10 rounded-lg bg-secondary/50 flex items-center px-3">
                        <AnimatePresence mode="wait">
                          {accountNumber && (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="font-mono text-sm"
                            >
                              {accountNumber}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-muted-foreground">จำนวนเงิน</label>
                      <div className="h-10 rounded-lg bg-secondary/50 flex items-center px-3">
                        <span className="font-mono text-sm">฿ 5,000.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlay alerts */}
                <AnimatePresence>
                  {demoState === "checking" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-background/80 flex items-center justify-center"
                    >
                      <div className="text-center">
                        <Loader2 className="w-12 h-12 text-primary mx-auto animate-spin" />
                        <p className="text-sm mt-4">กำลังตรวจสอบ...</p>
                      </div>
                    </motion.div>
                  )}

                  {demoState === "danger" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 glass-danger border-4 border-destructive/50 rounded-[2.5rem] flex flex-col items-center justify-center p-6 animate-shake"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="w-20 h-20 rounded-full bg-gradient-danger flex items-center justify-center mb-4 glow-danger"
                      >
                        <AlertTriangle className="w-10 h-10 text-destructive-foreground" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-destructive mb-2">⚠️ อันตราย!</h3>
                      <p className="text-sm text-center text-muted-foreground mb-6">
                        บัญชีนี้อยู่ในรายการบัญชีม้า<br/>โปรดอย่าโอนเงิน
                      </p>
                      <div className="space-y-2 w-full">
                        <Button variant="danger" size="sm" className="w-full">
                          แจ้งเบาะแส
                        </Button>
                        <Button variant="glass" size="sm" className="w-full">
                          ยกเลิกการโอน
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {demoState === "safe" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-x-4 bottom-20 glass border border-success/30 rounded-2xl p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-safe flex items-center justify-center flex-shrink-0 glow-safe">
                          <CheckCircle className="w-5 h-5 text-success-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-success text-sm">✓ บัญชีปลอดภัย</h4>
                          <p className="text-xs text-muted-foreground">
                            ไม่พบข้อมูลในฐานข้อมูลบัญชีม้า
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface StatusStepProps {
  step: number;
  label: string;
  active: boolean;
  completed: boolean;
  icon: React.ReactNode;
}

const StatusStep = ({ step, label, active, completed, icon }: StatusStepProps) => (
  <div className={`flex items-center gap-4 transition-all duration-300 ${active ? "scale-105" : ""}`}>
    <div 
      className={`
        w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
        ${completed ? "bg-gradient-safe glow-safe" : active ? "bg-gradient-primary glow-primary animate-pulse-glow" : "bg-secondary"}
      `}
    >
      {active ? <Loader2 className="w-4 h-4 animate-spin" /> : icon}
    </div>
    <div>
      <div className="text-xs text-muted-foreground">ขั้นตอนที่ {step}</div>
      <div className={`text-sm font-medium ${active ? "text-primary" : completed ? "text-success" : ""}`}>
        {label}
      </div>
    </div>
  </div>
);

export default DemoSection;
