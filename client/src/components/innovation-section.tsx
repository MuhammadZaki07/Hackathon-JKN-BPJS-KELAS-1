import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  "Instant JKN registration without paperwork",
  "Seamless integration with national health databases",
  "Real-time appointment scheduling and tracking",
  "Secure digital health records accessible 24/7",
  "Automated claim processing and verification",
  "Mobile-first design for accessibility anywhere",
];

export function InnovationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [videoError, setVideoError] = useState(false);

  return (
    <section id="innovation" ref={ref} className="py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Play className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Innovation Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            See Our Innovation in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Watch how our JKN Digital Innovation transforms the healthcare registration experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden border-card-border">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
                  {!videoError ? (
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="JKN Digital Innovation Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onError={() => setVideoError(true)}
                      data-testid="video-innovation-demo"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Play className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Innovation Demo Video
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Replace the YouTube embed URL with your actual demo video
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                How Our System Works
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our innovative platform leverages modern web technologies, cloud infrastructure, and AI-powered 
                automation to deliver a seamless healthcare experience. Users can register, access services, and 
                manage their health records entirely online.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-foreground mb-4">Key Benefits:</h4>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-start gap-3"
                  data-testid={`benefit-${index}`}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20 mt-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Built for Scale</h4>
                    <p className="text-sm text-muted-foreground">
                      Designed to handle millions of users with enterprise-grade security and reliability
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
