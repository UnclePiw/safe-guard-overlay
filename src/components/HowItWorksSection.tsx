import { motion } from "framer-motion";
import { Copy, Search, Bell, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Copy,
    title: "คัดลอกเลขบัญชี",
    description: "ระบบตรวจจับทันทีที่คุณคัดลอกเลขบัญชีจากแอปแชทหรือโซเชียลมีเดีย",
  },
  {
    icon: Search,
    title: "ตรวจสอบฐานข้อมูล",
    description: "เลขบัญชีถูกส่งไปตรวจสอบกับฐานข้อมูล Blacklist ของหน่วยงานรัฐ",
  },
  {
    icon: Bell,
    title: "แจ้งเตือนทันที",
    description: "หากพบว่าเป็นบัญชีอันตราย ระบบจะแสดงหน้าต่างเตือนทับหน้าจอทันที",
  },
  {
    icon: CheckCircle,
    title: "ตัดสินใจอย่างปลอดภัย",
    description: "คุณสามารถยกเลิกการโอนหรือแจ้งเบาะแสเพื่อช่วยปกป้องคนอื่น",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] rounded-full bg-success/5 blur-3xl" />
      
      <div className="container relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            วิธีการทำงาน
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            4 ขั้นตอนง่ายๆ ที่ปกป้องคุณจากการโอนเงินไปยังบัญชีม้า
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />
          
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative ${isEven ? "md:pr-12" : "md:pl-12 md:mt-24"}`}
                >
                  {/* Step number */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground glow-primary hidden md:flex">
                    {index + 1}
                  </div>
                  
                  <div className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-primary font-medium md:hidden">ขั้นตอนที่ {index + 1}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
