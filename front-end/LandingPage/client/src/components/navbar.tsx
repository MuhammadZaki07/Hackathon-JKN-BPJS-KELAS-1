import { useState, useEffect, useRef } from "react";
import { Menu, X, User, ChevronDown, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const navItems = [
    { name: t("nav.home"), href: "#home", key: "home" },
    { name: t("nav.about"), href: "#about", key: "about" },
    { name: t("nav.features"), href: "#features", key: "features" },
    { name: t("nav.innovation"), href: "#innovation", key: "innovation" },
    { name: t("nav.team"), href: "#team", key: "team" },
    { name: t("nav.contact"), href: "#contact", key: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="max-h-screen overflow-y-auto"
  onScroll={(e) =>
    setIsScrolled((e.target as HTMLDivElement).scrollTop > 20)
  }>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img src="/logo.png" alt="" className="w-52" draggable="false" onContextMenu={(e) => e.preventDefault()}/>
            </motion.div>

            <div className="hidden md:flex items-center gap-3">
              {navItems.map((item, index) => (
                <Button
                  key={item.key}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium hover-elevate"
                >
                  {item.name}
                </Button>
              ))}

              <LanguageToggle />
              <ThemeToggle />

              <div className="relative" ref={profileRef}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <User className="h-5 w-5" />
                </Button>
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-40 bg-background border border-border rounded-md shadow-md overflow-hidden"
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start px-4 py-2 hover:bg-muted/20"
                      >
                        Dashboard
                      </Button>
                      <Button
                        variant="ghost"
                           onClick={() => navigate("/login")}
                        className="w-full justify-start px-4 py-2 hover:bg-muted/20"
                      >
                        Login
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start px-4 py-2 hover:bg-muted/20 text-red-500"
                      >
                        Logout <LogOut />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-30 bg-background/95 backdrop-blur-md shadow-lg md:hidden overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.key}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="justify-start text-base font-medium hover-elevate"
                >
                  {item.name}
                </Button>
              ))}

              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 w-full justify-start"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <User className="h-5 w-5" />
                  {t("nav.profile")}
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 w-full bg-background border border-border rounded-md shadow-md overflow-hidden flex flex-col"
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start px-4 py-2 hover:bg-muted/20"
                      >
                        Dashboard
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start px-4 py-2 hover:bg-muted/20"
                      >
                        Logout
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
