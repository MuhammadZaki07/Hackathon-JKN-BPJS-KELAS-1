import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardCheck, Database, Activity, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export function FeaturesSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: ClipboardCheck,
      title: t("features.feature1Title"),
      description: t("features.feature1Desc"),
      color: "primary",
    },
    {
      icon: Database,
      title: t("features.feature2Title"),
      description: t("features.feature2Desc"),
      color: "accent",
    },
    {
      icon: Activity,
      title: t("features.feature3Title"),
      description: t("features.feature3Desc"),
      color: "primary",
    },
    {
      icon: Clock,
      title: t("features.feature4Title"),
      description: t("features.feature4Desc"),
      color: "accent",
    },
  ];

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
            <span className="text-sm font-medium text-primary">{t("features.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("features.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("features.subtitle")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClass =
              feature.color === "primary"
                ? "bg-primary text-primary-foreground"
                : "bg-accent text-accent-foreground";

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
                      <div
                        className={`w-14 h-14 rounded-xl ${colorClass} flex items-center justify-center`}
                      >
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
                    {t("features.trusted")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t("features.available")}
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
