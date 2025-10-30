import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export function AboutSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {t("about.badge")}
                </span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              {t("about.title")}
            </h2>

            <p
              className="text-lg text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: t("about.p1") }}
            />
            <p className="text-lg text-muted-foreground">{t("about.p2")}</p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t("about.mission")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("about.missionText")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t("about.impact")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("about.impactText")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* sisi kanan tetap sama (gambar dan angka-angka) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square bg-gradient-to-br from-primary/20 via-accent/10 to-background rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="space-y-6 w-full">
                  {/* kartu pertama */}
                  <div className="bg-card border border-card-border rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-primary-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          2.5M+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Target Beneficiaries
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* kartu kedua */}
                  <div
                    className="bg-card border border-card-border rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform"
                    style={{ marginLeft: "2rem" }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-accent-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent-foreground">
                          24/7
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Digital Access
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* kartu ketiga */}
                  <div className="bg-card border border-card-border rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-primary-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          100%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Data Security
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
