import { motion } from "framer-motion";
import { Shield, Zap, Database, Users, Lock, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Pre-Transaction Protection",
    description: "ป้องกันตั้งแต่ต้นทาง ไม่ต้องรอให้เงินออกจากบัญชีก่อน",
    color: "primary" as const,
  },
  {
    icon: Zap,
    title: "Real-time Detection",
    description: "ตรวจสอบเลขบัญชีกับฐานข้อมูลภายใน 1 วินาที",
    color: "warning" as const,
  },
  {
    icon: Database,
    title: "Mule Account Database",
    description: "เชื่อมต่อกับฐานข้อมูลบัญชีม้าของหน่วยงานรัฐและเครือข่ายธนาคาร",
    color: "success" as const,
  },
  {
    icon: Users,
    title: "Crowd-sourced Data",
    description: "ผู้ใช้สามารถรายงานบัญชีต้องสงสัยเพื่อช่วยปกป้องคนอื่น",
    color: "primary" as const,
  },
  {
    icon: Lock,
    title: "Samsung Knox Integration",
    description: "ทำงานร่วมกับ Knox เพื่อขอสิทธิ์การเข้าถึงระดับพิเศษ",
    color: "warning" as const,
  },
  {
    icon: Globe,
    title: "Cross-app Monitoring",
    description: "ตรวจจับการคัดลอกข้ามแอปพลิเคชัน ไม่จำกัดเฉพาะแอปธนาคาร",
    color: "success" as const,
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/20",
    icon: "text-primary",
    glow: "group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]",
  },
  warning: {
    bg: "bg-warning/10",
    border: "border-warning/20",
    icon: "text-warning",
    glow: "group-hover:shadow-[0_0_30px_-5px_hsl(var(--warning)/0.3)]",
  },
  success: {
    bg: "bg-success/10",
    border: "border-success/20",
    icon: "text-success",
    glow: "group-hover:shadow-[0_0_30px_-5px_hsl(var(--success)/0.3)]",
  },
};

const FeaturesSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            ทำไมต้อง <span className="text-gradient-primary">Safe-Overlay</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            โซลูชันที่ออกแบบมาเพื่อ User Empowerment ทำหน้าที่เป็น "ด่านหน้า" ก่อนการโอนเงิน
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color];
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  group relative p-6 rounded-2xl bg-card border border-border/50
                  hover:border-transparent transition-all duration-300
                  ${colors.glow}
                `}
              >
                <div className={`
                  w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border
                  flex items-center justify-center mb-4
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
