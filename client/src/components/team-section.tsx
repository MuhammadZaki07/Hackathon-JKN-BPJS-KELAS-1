import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const team = [
  {
    name: "Zaki Rahman",
    role: "Frontend Developer",
    initials: "ZR",
    bio: "Specialized in React and modern UI/UX design",
    social: {
      github: "#",
      linkedin: "#",
      email: "mailto:zaki@example.com",
    },
  },
  {
    name: "Dinda Permata",
    role: "UI/UX Designer",
    initials: "DP",
    bio: "Creating beautiful and intuitive user experiences",
    social: {
      github: "#",
      linkedin: "#",
      email: "mailto:dinda@example.com",
    },
  },
  {
    name: "Ahmad Rizky",
    role: "Backend Developer",
    initials: "AR",
    bio: "Building robust and scalable server solutions",
    social: {
      github: "#",
      linkedin: "#",
      email: "mailto:ahmad@example.com",
    },
  },
  {
    name: "Siti Nurhaliza",
    role: "Product Manager",
    initials: "SN",
    bio: "Driving innovation and strategic product vision",
    social: {
      github: "#",
      linkedin: "#",
      email: "mailto:siti@example.com",
    },
  },
];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" ref={ref} className="py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet the Innovators
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A diverse team of talented individuals passionate about transforming healthcare in Indonesia
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`card-team-member-${index}`}
            >
              <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300 border-card-border">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <Avatar className="w-24 h-24 border-4 border-primary/20">
                        <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full border-4 border-background flex items-center justify-center">
                        <svg className="w-4 h-4 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1" data-testid={`text-member-name-${index}`}>
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-primary mb-2" data-testid={`text-member-role-${index}`}>
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {member.bio}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-full"
                        asChild
                        data-testid={`link-github-${index}`}
                      >
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-full"
                        asChild
                        data-testid={`link-linkedin-${index}`}
                      >
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-full"
                        asChild
                        data-testid={`link-email-${index}`}
                      >
                        <a href={member.social.email}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Card className="inline-block bg-primary/5 border-primary/20">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">
                    Join Our Mission
                  </p>
                  <p className="text-xs text-muted-foreground">
                    We're always looking for talented individuals passionate about healthcare innovation
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
