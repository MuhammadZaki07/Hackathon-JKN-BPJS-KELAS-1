import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { TrendingUp, Users, ThumbsUp } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ from, to, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return (
    <motion.span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}

export function StatisticsSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: TrendingUp,
      value: 90,
      suffix: "%",
      label: t("stats.stat1Label"),
      description: t("stats.stat1Desc"),
      color: "primary",
    },
    {
      icon: Users,
      value: 1,
      suffix: "M+",
      label: t("stats.stat2Label"),
      description: t("stats.stat2Desc"),
      color: "accent",
    },
    {
      icon: ThumbsUp,
      value: 99,
      suffix: "%",
      label: t("stats.stat3Label"),
      description: t("stats.stat3Desc"),
      color: "primary",
    },
  ];

  return (
    <section
      id="statistics"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">{t("stats.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("stats.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("stats.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isAccent = stat.color === "accent";

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                data-testid={`stat-${index}`}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl blur-xl transition-all group-hover:blur-2xl" />
                  <div className="relative bg-card border border-card-border rounded-2xl p-8 hover-elevate transition-all duration-300">
                    <div className="space-y-6">
                      <div
                        className={`w-14 h-14 rounded-xl ${
                          isAccent ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
                        } flex items-center justify-center`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>

                      <div>
                        <div
                          className={`text-5xl font-bold mb-2 ${
                            isAccent ? "text-accent-foreground" : "text-primary"
                          }`}
                        >
                          <Counter from={0} to={stat.value} suffix={stat.suffix} duration={2.5} />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">{t("stats.realtime")}</div>
                <div className="text-xs text-muted-foreground">{t("stats.updated")}</div>
              </div>
            </div>
            <div className="h-px sm:h-12 w-full sm:w-px bg-border" />
            <p className="text-sm text-muted-foreground max-w-md">{t("stats.accuracy")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
