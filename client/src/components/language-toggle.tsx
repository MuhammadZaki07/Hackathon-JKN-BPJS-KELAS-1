import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          data-testid="button-language-toggle"
          className="rounded-full"
        >
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => changeLanguage("en")}
          data-testid="button-language-en"
          className="cursor-pointer flex items-center gap-2"
        >
          <span className="w-5 h-3">
            <svg
              viewBox="0 0 60 30"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <clipPath id="t">
                <path d="M0 0v30h60V0z" />
              </clipPath>
              <g clipPath="url(#t)">
                <path fill="#012169" d="M0 0v30h60V0z" />
                <path fill="#FFF" d="M0 0l60 30M60 0L0 30" strokeWidth="6" />
                <path fill="#C8102E" d="M0 0l60 30M60 0L0 30" strokeWidth="4" />
                <path fill="#FFF" d="M25 0h10v30H25zM0 10h60v10H0z" />
                <path fill="#C8102E" d="M27 0h6v30h-6zM0 12h60v6H0z" />
              </g>
            </svg>
          </span>
          English
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => changeLanguage("id")}
          data-testid="button-language-id"
          className="cursor-pointer flex items-center gap-2"
        >
          <span className="w-5 h-3">
            <svg
              viewBox="0 0 60 30"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <rect width="60" height="30" fill="#fff" />
              <rect width="60" height="15" fill="#e30a17" />
            </svg>
          </span>
          Indonesian
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
