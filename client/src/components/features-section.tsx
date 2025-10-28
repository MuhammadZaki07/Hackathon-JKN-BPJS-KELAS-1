import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardCheck, Database, Activity, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: ClipboardCheck,
    title: "One-Stop Online Registration",
    description: "Complete your JKN registration from anywhere, anytime. No more waiting in long queues or traveling to registration offices.",
    color: "primary",
  },
  {
    icon: Database,
    title: "Integrated National Health Data",
    description: "Seamlessly connect with national health databases for instant verification and comprehensive medical history access.",
    color: "accent",
  },
  {
    icon: Activity,
    title: "Real-Time Service Tracking",
    description: "Track your application status, appointments, and health services in real-time with instant notifications and updates.",
    color: "primary",
  },
  {
    icon: Clock,
    title: "Queue-Free Digital System",
    description: "Say goodbye to waiting rooms. Our intelligent system manages appointments and services digitally for maximum efficiency.",
    color: "accent",
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Core Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Modern Healthcare
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our innovative platform combines cutting-edge technology with user-friendly design to deliver exceptional healthcare services
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClass = feature.color === "primary" 
              ? "bg-primary text-primary-foreground" 
              : "bg-accent text-accent-foreground";
            const bgColorClass = feature.color === "primary" 
              ? "bg-primary/10" 
              : "bg-accent/10";

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`card-feature-${index}`}
              >
                <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300 border-card-border">
                  <CardContent className="p-6 sm:p-8">
                    <div className="space-y-4">
                      <div className={`w-14 h-14 rounded-xl ${colorClass} flex items-center justify-center`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="inline-block bg-primary/5 border-primary/20">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground">
                    1M+
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent border-2 border-background flex items-center justify-center text-xs font-bold text-accent-foreground">
                    99%
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground">
                    24/7
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">
                    Trusted by over 1 million active users with 99% satisfaction rate
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Available 24/7 across all devices
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
